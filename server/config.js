// var pool = mysql.createPool({
//   host: "192.168.33.200",
//   user: "root",
//   password: "zxsoft0#",
//   port: "3306",
//   database: "wf"
// });
exports.database = {
  host: "localhost",
  user: "root",
  password: "123456",
  port: "3306",
  database: "wf_vue"
};
exports.redis_options = {
  host: "127.0.0.1",
  port: "6379",
  ttl: 60 * 60 * 24 //Session的有效期为24小时
};
exports.secret_key = "eraop";
exports.expires_in = 60 * 60; //秒
