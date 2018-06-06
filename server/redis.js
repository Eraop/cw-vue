var redis = require("redis");
var client = redis.createClient(6379, "127.0.0.1");
var config = require("./config.js");

var redis_client = {
  check: function(key) {
    return new Promise((resolve, reject) => {
      client.ttl(key, function(err, reply) {
        resolve(reply && reply > -2);
      });
    });
  },
  set: function(key, value) {
    client.set(key, value);
    client.expire(key, config.session_expires_in);
  },
  get: function(key) {
    return new Promise((resolve, reject) => {
      client.get(key, function(err, response) {
        resolve(response);
      });
    });
  },
  del: function(key) {
    return new Promise((resolve, reject) => {
      client.del(key, function(err, response) {
        resolve(response);
      });
    });
  },
  refresh: function(key) {
    client.expire(key, config.session_expires_in);
  }
};
module.exports = redis_client;
