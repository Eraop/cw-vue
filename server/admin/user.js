"use strict";
var db = require("../db.js");

var getUser = function(name, password) {
  db.query(
    "SELECT * FROM core_user where enabled and !is_expired and !is_locked and username=? and password=? limit 1",
    [name, password],
    function(err, result) {
      if (err) {
        console.log("[SELECT ERROR] - ", err.message);
        return;
      }
      return result;
    }
  );
};

exports.getUser = getUser;
