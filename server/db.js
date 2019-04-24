"use strict";
var mysql = require("mysql");
var config = require("./config.js");

var pool = mysql.createPool(config.database);
function query(sql, callback) {
  pool.query(sql, function(err, rows) {
    console.log("[SELECT SUCCESS] - ", sql);
    callback(err, rows);
  });
  // pool.getConnection(function(err, connection) {
  //   if (err) {
  //     console.log("[SELECT ERROR] - ", err.message);
  //     return;
  //   }
  //   // Use the connection
  //   connection.query(sql, function(err, rows) {
  //     // connection.release(); //释放链接
  //     connection.end();
  //     // pool.releaseConnection(connection);
  //     console.log("[SELECT SUCCESS] - ", sql);
  //     callback(err, rows);
  //   });
  // });
}

function query(sql, queryString, callback) {
  // pool.getConnection(function(err, connection) {
  //   if (err) {
  //     console.log("[SELECT ERROR] - ", err.message);
  //     return;
  //   }
  //   // Use the connection
  //   connection.query(sql, queryString, function(err, rows) {
  //     // connection.release(); //释放链接
  //     connection.end();
  //     // pool.releaseConnection(connection);
  //     console.log("[SELECT SUCCESS] - ", sql);
  //     callback(err, rows);
  //   });
  // });
  pool.query(sql, queryString, function(err, rows) {
    console.log("[SELECT SUCCESS] - ", sql);
    callback(err, rows);
  });
}
exports.query = query;
