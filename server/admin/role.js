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

exports.findRolesMenuByUserId = function(id, callback) {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT menu_ids FROM `core_role` where id in(SELECT role_id from core_user_role where user_id =?)",
      [id],
      function(err, result) {
        if (err) {
          console.log("[SELECT ERROR] - ", err.message);
          reject(err);
        }
        var ids = [];
        var list;
        result.forEach(element => {
          if (element.menu_ids) {
            ids = ids.concat(element.menu_ids.split(","));
          }
        });
        if (ids.length > 0) {
          db.query("SELECT * FROM `core_menu` where id in (?)", [ids], function(
            err,
            menus
          ) {
            if (err) {
              console.log("[SELECT ERROR] - ", err.message);
              reject(err);
            }
            resolve(menus);
          });
        }else{
          resolve(list);
        }
      }
    );
  });
};
