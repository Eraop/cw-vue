const express = require("express");
const app = express();

let fs = require('fs');
let https = require('https');
let http = require('http');
var path = require("path");
let privateKey  = fs.readFileSync(path.join(__dirname,'./certificate/private.pem'), 'utf8');
let certificate = fs.readFileSync(path.join(__dirname,'./certificate/csr.crt'), 'utf8');
let cert = {key: privateKey, cert: certificate};
let httpServer = http.createServer(app);
let httpsServer = https.createServer(cert, app); 
 

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

// app.listen("8002", () => {
//   console.log("success listen at port:8002......");
// });


httpServer.listen(5678, function() {
  console.log('HTTP Server is running, success listen at port:5678......');
});
httpsServer.listen(8002, function() {
console.log('HTTPS Server is running, success listen at port:8002......');
});
