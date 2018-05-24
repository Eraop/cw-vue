"use strict";
var express = require("express");
var router = express.Router();
//引入数据库包
var db = require("./db.js");
var models = require("./models/models.js");
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
  var start = 0;
  var size = 0;
  if (req.query.pageIndex !== undefined && req.query.pageSize !== undefined) {
    size = parseInt(req.query.pageSize);
    start = (req.query.pageIndex - 1) * size;
  } else {
    return;
  }
  var page = new PageModel();
  db.query("SELECT * FROM cms_article limit ?,?", [start, size], function(
    err,
    result
  ) {
    if (err) {
      console.log("[SELECT ERROR] - ", err.message);
      return;
    }
    page.pageIndex = start;
    page.pageSize = size;
    page.items = result;

    db.query("SELECT count(1) as sum FROM cms_article", function(err, result) {
      if (err) {
        console.log("[SELECT ERROR] - ", err.message);
        return;
      }
      page.total = result[0]["sum"];
      res.send(page);
    });
  });
});

router.get("/detail/:id", function(req, res, next) {
  //查
  db.query(
    "SELECT * FROM cms_article where id= ? limit 1",
    [req.params.id],
    function(err, result) {
      if (err) {
        console.log("[SELECT ERROR] - ", err.message);
        return;
      }
      res.send(result.length > 0 ? result[0] : null);
    }
  );
});

class PageModel {}
module.exports = router;
