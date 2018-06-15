const express = require("express");
const app = express();
var config = require("./config.js");
// var auth = require("./auth/auth.js");
var common = require("./common.js");
// var redis_client = require("./redis.js");
var cookieParser = require("cookie-parser");
var session = require("express-session");
// 存储session
app.use(
  session({
    secret: config.secret_key,
    resave: true,
    saveUninitialized: true,
    rolling: true,
    cookie: { secure: false, maxAge: config.session_expires_in * 1000 }
  })
);

// 使用redis存储session
// var RedisStore = require("connect-redis")(session);
// app.use(
//   session({
//     secret: config.secret_key,
//     store: new RedisStore(config.redis_options),
//     resave: true,
//     saveUninitialized: false,
//     rolling: true
//   })
// );

app.use(cookieParser());
// var tokenUtil = require("./auth/token.js");
// var CommonModels = require("./models/CommonModels.js");
//设置跨域访问
app.all("*", function(req, res, next) {
  if (
    req.headers.origin == "http://localhost:1234" ||
    req.headers.origin == "http://47.97.107.213:80" || 
    req.headers.origin == "http://47.97.107.213" || 
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

app.get("/api/", function(req, res) {
  res.send("Hello World");
});

// 存储在redis
// app.get("/api/admin/*", function(req, res, next) {
//   var token = req.headers["x-access-token"];
//   var sid = req.headers["sid"];
//   console.log("/api/admin/************************************************");
//   console.log("session ：", req.session);
//   console.log("LoginUser ：", req.session.LoginUser);
//   console.log("username ：", req.session.username);
//   console.log("token ：", req.session.token);
//   // 检查session是否有效
//   if (!sid) {
//     var rm = new CommonModels.ReturnModel();
//     rm.code = 401;
//     rm.msg = "无权限";
//     res.json(rm);
//   } else {
//     redis_client.check(sid + ":username").then(isActive => {
//       if (isActive) {
//         redis_client.refresh(sid + ":username");
//         //检查token是否有效
//         tokenUtil.checkToken(token).then(result => {
//           if (result && result.success) {
//             var decoded = tokenUtil.decodedToken(token);
//             if (
//               decoded &&
//               decoded.exp * 1000 > new Date() &&
//               decoded.exp * 1000 - new Date() <
//                 (config.token_expires_in / 2) * 1000
//             ) {
//               redis_client.get(sid + ":username").then(session_username => {
//                 if (session_username === decoded.username) {
//                   token = tokenUtil.createToken(session_username);
//                   res.setHeader("x-access-token", token);
//                   next();
//                 } else {
//                   var rm = new CommonModels.ReturnModel();
//                   rm.code = 401;
//                   rm.msg = "token信息错误";
//                   res.json(rm);
//                 }
//               });
//             } else {
//               next();
//             }
//           } else {
//             var rm = new CommonModels.ReturnModel();
//             rm.code = 401;
//             rm.msg = "token信息错误";
//             res.json(rm);
//           }
//         });
//       } else {
//         var rm = new CommonModels.ReturnModel();
//         rm.code = 401;
//         rm.msg = "登录过期";
//         res.json(rm);
//       }
//     });
//   }
// });

// app.get("/api/admin/*", function(req, res, next) {
//   var token = req.headers["x-access-token"];
//   // 检查session是否有效
//   if (!req.session || !req.session.username) {
//     var rm = new CommonModels.ReturnModel();
//     rm.code = 401;
//     rm.msg = "登录过期";
//     res.json(rm);
//   } else {
//     //检查token是否有效
//     tokenUtil.checkToken(token).then(result => {
//       if (result && result.success) {
//         var decoded = tokenUtil.decodedToken(token);
//         if (
//           decoded &&
//           decoded.exp * 1000 > new Date() &&
//           decoded.exp * 1000 - new Date() <
//             (config.token_expires_in / 2) * 1000 &&
//           decoded.username === req.session.username
//         ) {
//           token = tokenUtil.createToken(decoded.username);
//           res.setHeader("x-access-token", token);
//           next();
//         } else {
//           next();
//         }
//       } else {
//         var rm = new CommonModels.ReturnModel();
//         rm.code = 401;
//         rm.msg = "token信息错误";
//         res.json(rm);
//       }
//     });
//   }
// });

app.all("/api/admin/*", function(req, res, next) {
  common.checkState(req, res, next).then(result => {
    if (result && result.code === 200) {
      next();
    } else {
      res.json(result);
    }
  });
});
app.use("/api/news", require("./news.js"));
app.use("/api/auth", require("./auth/auth.js"));
app.use("/api/admin", require("./admin/admin.js"));

app.listen("5678", () => {
  console.log("success listen at port:5678......");
});
