const express = require("express");
const app = express();
var config = require("./config.js");
var tokenUtil = require("./auth/token.js");
var CommonModels = require("./models/CommonModels.js");
var session = require("express-session");
app.use(session({ secret: config.secret_key }));

//设置跨域访问
app.all("*", function(req, res, next) {
  if (
    req.headers.origin == "http://localhost:1234" ||
    req.headers.origin == "http://eraop.com" ||
    req.headers.origin == "https://eraop.com" ||
    req.headers.origin == "http://www.eraop.com" ||
    req.headers.origin == "https://www.eraop.com"
  ) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token,authorization,X-Requested-With,Content-Type"
    );
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
  }

  next();
});

app.get("/api/", function(req, res) {
  res.send("Hello World");
});

app.get("/api/admin/*", function(req, res, next) {
  var token = req.headers["x-access-token"];
  var decoded = tokenUtil.decodedToken(token);
  console.log(decoded.exp * 1000 - new Date() < 30 * 1000);
  console.log(decoded.exp * 1000 - new Date());
  if (
    decoded &&
    decoded.exp * 1000 > new Date() &&
    decoded.exp * 1000 - new Date() < 30 * 1000
  ) {
    var LoginUser = req.session.LoginUser;
    var valid = LoginUser && LoginUser.username === token;
    if (LoginUser && LoginUser.username === decoded.username) {
      token = tokenUtil.createToken(LoginUser.username);
      LoginUser.token = token;
      res.setHeader("x-access-token", token);
    }
  }
  tokenUtil.checkToken(token).then(result => {
    if (result && result.success) {
      next();
    } else {
      var rm = new CommonModels.ReturnModel();
      rm.code = 401;
      rm.msg = "token信息错误";
      res.json(rm);
    }
  });
});

app.get("/api/admin/menu", function(req, res, next) {
  res.send("menu");
});

app.use("/api/news", require("./news.js"));
app.use("/api/auth", require("./auth/auth.js"));

app.listen("8002", () => {
  console.log("success listen at port:8002......");
});
