"use strict";
var mysql = require("mysql");
var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  port: "3306",
  database: "wf"
});

function query(sql, callback) {
  pool.getConnection(function(err, connection) {
    if (err) {
      reject(err);
      return;
    }
    // Use the connection
    connection.query(sql, function(err, rows) {
      callback(err, rows);
      connection.release(); //释放链接
    });
  });
}
exports.query = query;
