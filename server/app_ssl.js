const express = require("express");
const app = express();
var config = require("./config.js");
var common = require("./common.js");
var cookieParser = require("cookie-parser");
var session = require("express-session");

let fs = require("fs");
let https = require("https");
let http = require("http");
var path = require("path");
let privateKey = fs.readFileSync(
  path.join(__dirname, "./certificate/private.pem"),
  "utf8"
);
let certificate = fs.readFileSync(
  path.join(__dirname, "./certificate/csr.crt"),
  "utf8"
);
let cert = { key: privateKey, cert: certificate };
let httpServer = http.createServer(app);
let httpsServer = https.createServer(cert, app);

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

app.use(cookieParser());
//设置跨域访问
app.all("*", function(req, res, next) {
  var orginList = [
    "http://localhost:1234",
    "http://api.eraop.com",
    "https://api.eraop.com",
    "https://eraop.com",
    "https://www.eraop.com",
    "https://eraop.netlify.com"
  ];
  if (
    req.headers.origin != null &&
    orginList.includes(req.headers.origin.toLowerCase())
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

httpServer.listen(5678, function() {
  console.log("HTTP Server is running, success listen at port:5678......");
});
httpsServer.listen(5679, function() {
  console.log("HTTPS Server is running, success listen at port:5679......");
});
