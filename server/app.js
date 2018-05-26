const express = require("express");
const app = express();

app.use("*", function(req, res, next) {
  if (
    req.headers.origin == "http://36.7.150.150:8002" ||
    req.headers.origin == "http://localhost:1234" ||
    req.headers.origin == "http://eraop.com" ||
    req.headers.origin == "http://wwww.eraop.com"
  ) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    //res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, GET, DELETE, OPTIONS"
    ); //设置方法
  }
  if (req.method == "OPTIONS") {
    res.send(200); // 意思是，在正常的请求之前，会发送一个验证，是否可以请求。
  } else {
    next();
  }
});

app.get("/api/", function(req, res) {
  res.send("Hello World");
});

app.use("/api/news", require("./news.js"));

app.listen("8002", () => {
  console.log("success listen at port:8002......");
});
