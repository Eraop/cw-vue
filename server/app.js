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
      "auth-token,authorization,X-Requested-With,Content-Type"
    );
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
  }
  next();
});

app.get("/api/", function(req, res) {
  res.send("Hello World");
});

app.get("/api/auth", function(req, res) {
  var rm = new CommonModels.ReturnModel();
  var token = tokenUtil.createToken("eraop");
  rm.code = 0;
  rm.msg = "登录成功";
  rm.data = {
    token: token
  };
  res.json(rm);
});

app.use("/api/news", require("./news.js"));
app.use("/api/auth", require("./auth/auth.js"));

app.listen("8002", () => {
  console.log("success listen at port:8002......");
});
