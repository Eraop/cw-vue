"use strict";
var express = require("express");
var router = express.Router();
//引入数据库包
var db = require("./db.js");
var models = require("./models/models.js");
var mysql = require("mysql");

/**
 * 查询列表页
 */
router.get("/list", function(req, res, next) {
  var start = 0;
  var size = 0;
  var channel_id = 0;
  if (req.query.pageIndex !== undefined && req.query.pageSize !== undefined) {
    size = parseInt(req.query.pageSize);
    start = (req.query.pageIndex - 1) * size;
  } else {
    return;
  }
  channel_id = req.query.channel !== undefined ? req.query.channel : 0;
  var page = new PageModel();
  db.query(
    "SELECT * FROM cms_article where channel_id = ? limit ?,?",
    [channel_id, start, size],
    function(err, result) {
      if (err) {
        console.log("[SELECT ERROR] - ", err.message);
        return;
      }
      page.pageIndex = start;
      page.pageSize = size;
      page.items = result;

      db.query(
        "SELECT count(1) as sum FROM cms_article where channel_id = ?",
        [channel_id],
        function(err, result) {
          if (err) {
            console.log("[SELECT ERROR] - ", err.message);
            return;
          }
          page.total = result[0]["sum"];
          res.send(page);
        }
      );
    }
  );
});

router.get("/channel", function(req, res, next) {
  db.query("SELECT * FROM cms_channel", function(err, result) {
    if (err) {
      console.log("[SELECT ERROR] - ", err.message);
      return;
    }
    res.send(result);
  });
});

router.get("/detail/:id", function(req, res, next) {
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
