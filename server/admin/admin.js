var express = require("express");
const app = express();
var router = express.Router();
var admin_role = require("../admin/role.js");
router.get("/menu", function(req, res) {
  if (req.session && req.session.userid) {
    admin_role.findRolesMenuByUserId(req.session.userid).then(r => {
      res.json(r);
    });
  }
});

module.exports = router;
