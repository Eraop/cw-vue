var redis = require("redis");
var client = redis.createClient(6379, "127.0.0.1");

var redis_client = {
  set: function(key, value) {
    client.set(key, value, redis.print);
  },
  get: function(key) {
    return new Promise((resolve, reject) => {
      client.get(key, function(err, response) {
        resolve(response);
      });
    });
  }
};
module.exports = redis_client;
