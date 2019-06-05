var express = require("express");
const app = express();
var router = express.Router();
var bodyParser = require("body-parser");
//获取JSON解析器中间件
var jsonParser = bodyParser.json();
//url-encoded解析器
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

// var redis_client = require("../redis.js");
var admin_user = require("../admin/user.js");
var admin_role = require("../admin/role.js");
var CommonModels = require("../models/CommonModels.js");
var LoginUser = require("../models/LoginUser.js");
var tokenUtil = require("../auth/token.js");
var common = require("../common.js");
router.post("/login", jsonParser, function(req, res, next) {
  var rm = new CommonModels.ReturnModel();
  admin_user.findOne(req.body.name, req.body.password, function(data) {
    var user = data;
    if (user) {
      rm.code = 0;
      rm.msg = "登录成功";
      var token = tokenUtil.createToken(user.username);
      // var sid = req.sessionID;

      req.session.username = user.username;
      req.session.useravatar = user.avatar;
      req.session.token = token;
      req.session.userid = user.id;

      // 获取角色
      admin_role
        .findRolesByUserId(user.id)
        .then(data => {
          var roles = "";
          data.forEach(element => {
            roles += (roles === "" ? "" : ",") + element.name;
          });
          req.session.roles = roles;
          rm.data = {
            username: user.username,
            useravatar: user.avatar,
            userroles: roles,
            token: token
            // sid: sid
          };
          // 存储redis
          // redis_client.set(sid + ":username", user.username);
          res.json(rm);
        })
        .catch(err => {
          console.log(err);
          rm.code = -1;
          rm.msg = "用户权限异常，请联系管理员";
          res.json(rm);
        });
    } else {
      rm.code = 1;
      rm.msg = "账号或密码错误";
      res.json(rm);
    }
  });
});

router.get("/logout", function(req, res, next) {
  var rm = new CommonModels.ReturnModel();
  if (req.session) {
    req.session.destroy();
  }
  rm.code = 0;
  rm.msg = "退出成功";
  res.json(rm);
});

router.get("/checkState", function(req, res, next) {
  common.checkState(req, res, next).then(result => {
    res.json(result);
  });
});

router.get("/yqtools/check", function(req, res, next) {
  var rm = new CommonModels.ReturnModel();
  admin_user.findYqtoolsOne(req.query.name, function(data) {
    if (data != undefined && data.state == 0) {
      rm.msg = "权限正常";
      rm.code = 0;
      rm.data = data;
    } else {
      rm.msg = "没有权限";
      rm.code = -1;
    }
    res.json(rm);
  });
});

module.exports = router;
