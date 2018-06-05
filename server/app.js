const express = require("express");
const app = express();
var config = require("./config.js");
var redis_client = require("./redis.js");
var session = require("express-session");
var cookieParser = require("cookie-parser");
app.use(
  session({
    secret: config.secret_key,
    cookie: { secure: false, maxAge: 1000 * 60 }
  })
);
app.use(cookieParser());
// var RedisStore = require("connect-redis")(session);
// app.use(
//   session({
//     secret: config.secret_key,
//     store: new RedisStore(config.redis_options),
//     resave: false
//   })
// );

var tokenUtil = require("./auth/token.js");
var CommonModels = require("./models/CommonModels.js");
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
    res.header("Access-Control-Expose-Headers", "x-access-token");
  }

  next();
});
app.get("/", function(req, res, next) {
  if (req.session && req.session.views) {
    req.session.views++;
    res.status(201);
    res.setHeader("Content-Type", "text/html");
    res.write("<p>views: " + req.session.views + "</p>");
    res.write("<p>expires in: " + req.session.cookie.maxAge / 1000 + "s</p>");
    res.end();
  } else {
    req.session.views = 1;
    res.end("welcome to the session demo. refresh!");
  }
});

app.get("/api/", function(req, res) {
  res.send("Hello World");
});

app.get("/api/admin/*", function(req, res, next) {
  var token = req.headers["x-access-token"];
  if (!req.session) {
    var rm = new CommonModels.ReturnModel();
    rm.code = 401;
    rm.msg = "token信息错误";
    res.json(rm);
  }

  tokenUtil.checkToken(token).then(result => {
    if (result && result.success) {
      var decoded = tokenUtil.decodedToken(token);
      if (
        decoded &&
        decoded.exp * 1000 > new Date() &&
        decoded.exp * 1000 - new Date() < 60 * 1000
      ) {
        redis_client.get(req.sessionID + ":username").then(session_username => {
          if (session_username === decoded.username) {
            token = tokenUtil.createToken(session_username);
            res.setHeader("x-access-token", token);
            next();
          } else {
            var rm = new CommonModels.ReturnModel();
            rm.code = 401;
            rm.msg = "token信息错误";
            res.json(rm);
          }
        });
      } else {
        next();
      }
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
