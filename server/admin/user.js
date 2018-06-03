"use strict";
var db = require("../db.js");

var findOne = function(name, password, callback) {
  db.query(
    "SELECT * FROM core_user where enabled and !is_expired and !is_locked and username=? and password=? limit 1",
    [name, password],
    function(err, result) {
      if (err) {
        console.log("[SELECT ERROR] - ", err.message);
      }
      callback(result && result.length > 0 ? result[0] : null);
    }
  );
};

exports.findOne = findOne;