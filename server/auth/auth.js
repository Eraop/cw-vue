var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
//获取JSON解析器中间件
var jsonParser = bodyParser.json();

//url-encoded解析器
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

var admin_user = require("../admin/user.js");
var CommonModels = require("../models/CommonModels.js");
var tokenUtil = require("../auth/token.js");
router.post("/login", jsonParser, function(req, res, next) {
  var rm = new CommonModels.ReturnModel();
  admin_user.findOne(req.body.name, req.body.password, function(data) {
    var user = data;
    if (user) {
      rm.code = 0;
      rm.msg = "登录成功";
      var token = tokenUtil.createToken(user.username);
      rm.data = {
        username: user.username,
        token: token
      };
      // TODO 获取角色
      req.session.loginUser = user.username;
      req.session.regenerate(function(err) {
        if (err) {
          rm.code = -1;
          rm.msg = "系统异常，稍后再试";
        }
      });
    } else {
      rm.code = 1;
      rm.msg = "账号或密码错误";
    }
    res.json(rm);
  });
});

module.exports = router;
