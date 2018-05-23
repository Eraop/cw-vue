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

    console.log("--------------------------SELECT----------------------------");
    console.log(result);
    // jsonWrite(res, result);
    res.send(result);
    console.log(
      "------------------------------------------------------------\n\n"
    );
  });
});

// 向前台返回JSON方法的简单封装
var jsonWrite = function(res, result) {
  if (typeof result === "undefined") {
    res.json({
      code: "1",
      msg: "操作失败"
    });
  } else {
    res.json(result);
  }
};

module.exports = router;
