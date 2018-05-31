"use strict";
var mysql = require("mysql");
// var pool = mysql.createPool({
//   host: "192.168.33.200",
//   user: "root",
//   password: "zxsoft0#",
//   port: "3306",
//   database: "wf"
// });
var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  port: "3306",
  database: "wf_vue"
});
function query(sql, callback) {
  pool.getConnection(function(err, connection) {
    if (err) {
      console.log("[SELECT ERROR] - ", err.message);
      return;
    }
    // Use the connection
    connection.query(sql, function(err, rows) {
      callback(err, rows);
      connection.release(); //释放链接
    });
  });
}

function query(sql, queryString, callback) {
  pool.getConnection(function(err, connection) {
    if (err) {
      console.log("[SELECT ERROR] - ", err.message);
      return;
    }
    // Use the connection
    connection.query(sql, queryString, function(err, rows) {
      callback(err, rows);
      connection.release(); //释放链接
    });
  });
}
exports.query = query;
