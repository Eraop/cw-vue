"use strict";
var db = require("../db.js");

exports.findRolesByUserId = function(id, callback) {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM `core_role` where id in (SELECT role_id from core_user_role where user_id = ?)",
      [id],
      function(err, result) {
        if (err) {
          console.log("[SELECT ERROR] - ", err.message);
          reject(err);
        }
        resolve(result);
      }
    );
  });
};
