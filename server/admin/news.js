"use strict";
var db = require("../db.js");
// var CMS_Article = require("../models/CMS_Article.js");

var saveNews = function(CMS_Article) {
  return new Promise((resolve, reject) => {
    if (CMS_Article.id && CMS_Article.id > 0) {
      // 更新
      db.query(
        "UPDATE `cms_article` SET  `last_update` = ?, `channel_id` = ?, `content` = ?, `title` = ?, `title_key` = ?, `user_id` = ?, `viewcount` = ?, `description` = ? WHERE `id` = ?;",
        [
          CMS_Article.last_update,
          CMS_Article.channel_id,
          CMS_Article.content,
          CMS_Article.title,
          CMS_Article.title_key,
          CMS_Article.user_id,
          CMS_Article.viewcount,
          CMS_Article.description,
          CMS_Article.id
        ],
        function(err, result) {
          if (err) {
            console.log("[SELECT ERROR] - ", err.message);
            reject(err);
          }
          resolve(result);
        }
      );
    } else {
      // 新增
      db.query(
        "INSERT INTO `cms_article`( `last_update`, `channel_id`, `content`, `title`, `title_key`, `user_id`, `viewcount`, `description`) VALUES (?,?,?,?,?,?,?,?)",
        [
          CMS_Article.last_update,
          CMS_Article.channel_id,
          CMS_Article.content,
          CMS_Article.title,
          CMS_Article.title_key,
          CMS_Article.user_id,
          CMS_Article.viewcount,
          CMS_Article.description
        ],
        function(err, result) {
          if (err) {
            console.log("[SELECT ERROR] - ", err.message);
            reject(err);
          }
          resolve(result);
        }
      );
    }
  });
};

exports.saveNews = saveNews;

exports.findOne = function(id) {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM cms_article where id= ? limit 1",
      [id],
      function(err, result) {
        if (err) {
          console.log("[SELECT ERROR] - ", err.message);
          reject(err);
        }
        resolve(result.length > 0 ? result[0] : null);
      }
    );
  });
};
