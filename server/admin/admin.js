var express = require("express");
const app = express();
var router = express.Router();
var admin_role = require("../admin/role.js");
var bodyParser = require("body-parser");
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
  console.log(req.body);
  var title = req.body.title;
  var content = req.body.html;
});

module.exports = router;
