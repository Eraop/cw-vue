const express = require("express");
const app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get("/api/", function(req, res) {
  res.send("Hello World");
});

app.use("/api/news", require("./news.js"));
app.use("/api/auth", require("./auth/auth.js"));

app.listen("8002", () => {
  console.log("success listen at port:8002......");
});
  