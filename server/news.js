"use strict";
var express = require("express");
var router = express.Router();
//引入数据库包
var db = require("./db.js");
var CommonModels = require("./models/CommonModels.js");
var config = require("./config.js");
// 查询列表页
router.get("/list", function(req, res, next) {
  var size = req.query.pageSize
    ? parseInt(req.query.pageSize)
    : config.page_size;
  var pageIndex = req.query.pageIndex ? parseInt(req.query.pageIndex) : 1;
  var start = (pageIndex - 1) * size;

  var page = new CommonModels.PageModel();
  // 查询所属channel下的cms_article
  var sql = "SELECT a.*,b.username FROM cms_article a LEFT JOIN core_user b ON a.user_id =b.id order by concat(a.last_update,a.id) desc limit ?,?";
  var param = [start, size];
  // 查询所属channel下的cms_article的总数
  var countSql = "SELECT count(1) as sum FROM cms_article";
  var countParam = [];

  if (req.query.channel_id !== undefined) {
    var channel_id = parseInt(req.query.channel_id);
    sql =
      "SELECT a.*,b.username FROM cms_article a LEFT JOIN core_user b ON a.user_id =b.id  where a.channel_id = ? order by concat(a.last_update,a.id) desc  limit ?,?";
    param = [channel_id, start, size];
    countSql =
      "SELECT count(1) as sum FROM cms_article where channel_id = ? limit 1";
    countParam = [channel_id];
  }
  db.query(sql, param, function(err, result) {
    if (err) {
      console.log("[SELECT ERROR] - ", err.message);
      return;
    }
    page.pageIndex = pageIndex;
    page.pageSize = size;
    page.items = result;
    db.query(countSql, countParam, function(err, result) {
      if (err) {
        console.log("[SELECT ERROR] - ", err.message);
        return;
      }
      page.total = result[0]["sum"];
      res.json(page);
    });
  });
});
// 查询所有channel
router.get("/channel", function(req, res, next) {
  db.query("SELECT * FROM cms_channel where is_visible = 1", function(err, result) {
    if (err) {
      console.log("[SELECT ERROR] - ", err.message);
      return;
    }
    res.json(result);
  });
});

// 获取news详细信息
router.get("/detail/:id", function(req, res, next) {
  db.query(
    "SELECT a.*,b.username FROM cms_article a LEFT JOIN core_user b ON a.user_id =b.id where a.id= ? limit 1",
    [req.params.id],
    function(err, result) {
      if (err) {
        console.log("[SELECT ERROR] - ", err.message);
        return;
      }
      res.json(result.length > 0 ? result[0] : null);
    }
  );
});

module.exports = router;
