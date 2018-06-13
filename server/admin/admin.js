var express = require("express");
const app = express();
var router = express.Router();
var admin_role = require("../admin/role.js");
var admin_news = require("../admin/news.js");
var bodyParser = require("body-parser");
var CMS_Article = require("../models/CMS_Article.js");
var common = require("../common.js");
var CommonModels = require("../models/CommonModels.js");
//获取JSON解析器中间件
var jsonParser = bodyParser.json();
router.get("/menu", function(req, res) {
  if (req.session && req.session.userid) {
    admin_role.findRolesMenuByUserId(req.session.userid).then(r => {
      res.json(r);
    });
  }
});
router.post("/news/save", jsonParser, function(req, res) {
  var rm = new CommonModels.ReturnModel();
  var model = new CMS_Article();
  model.id = req.body.id;
  model.title = req.body.title;
  model.title_key = req.body.title_key;
  model.create_date = common.formatTime(new Date());
  model.last_update = common.formatTime(new Date());
  model.user_id = req.session.userid;
  model.description = req.body.description;
  model.content = req.body.content;
  model.channel_id = req.body.channel_id;
  model.viewcount = req.body.viewcount === "" ? 0 : req.body.viewcount;
  admin_news
    .saveNews(model)
    .then(t => {
      rm.code = 200;
      rm.data = t;
      res.json(rm);
    })
    .catch(err => {
      rm.code = 404;
      rm.data = null;
      res.json(rm);
    });
});

// 获取news详细信息
router.get("/news/detail/:id", function(req, res, next) {
  var rm = new CommonModels.ReturnModel();

  admin_news
    .findOne(req.params.id)
    .then(t => {
      rm.code = 200;
      rm.data = t;
      res.json(rm);
    })
    .catch(err => {
      rm.code = 404;
      rm.data = null;
      res.json(rm);
    });
});
module.exports = router;
