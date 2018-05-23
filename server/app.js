const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
 })


 
app.use("/news", require("./news.js"));

app.listen("5678", () => {
  console.log("success listen at port:5678......");
});
