"use strict";
var express = require("express");
var router = express.Router();
//引入数据库包
var db = require("./db.js");
var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123456",
//   port: "3306",
//   database: "wf"
// });

/**
 * 查询列表页
 */
router.get("/list", function(req, res, next) {
  //查
  db.query("SELECT * FROM cms_article", function(err, result) {
    if (err) {
      console.log("[SELECT ERROR] - ", err.message);
      return;
    }
    res.send(result);
  });
});

router.get("/detail/:id", function(req, res, next) {
  //查
  db.query("SELECT * FROM cms_article where id=?", [req.params.id], function(
    err,
    result
  ) {
    if (err) {
      console.log("[SELECT ERROR] - ", err.message);
      return;
    }
    res.send(result);
  });
});
module.exports = router;
