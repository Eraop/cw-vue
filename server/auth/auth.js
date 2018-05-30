"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var router = express.Router();
//获取JSON解析器中间件
var jsonParser = bodyParser.json();
//url-encoded解析器
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var admin_user = require("../admin/user.js");

router.post("/login", urlencodedParser, function(req, res, next) {
  var sess = req.session;
  var user = admin_user.getUser(req.body.name, req.body.password);

  if (user) {
    req.session.regenerate(function(err) {
      if (err) {
        return res.json({ ret_code: 2, ret_msg: "登录失败" });
      }
      req.session.loginUser = user.name;
      res.json({ ret_code: 0, ret_msg: "登录成功" });
    });
  } else {
    res.json({ ret_code: 1, ret_msg: "账号或密码错误" });
  }
});


module.exports = router;