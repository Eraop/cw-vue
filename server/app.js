const express = require("express");
const app = express();
var session = require("express-session");
app.use(session({ secret: "eraop" }));

//设置跨域访问
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:1234");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Credentials', 'true');
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
