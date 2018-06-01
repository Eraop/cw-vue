/*
 * @Author: Eraop 
 * @Date: 2018-06-01 15:22:50 
 * @Last Modified by: Eraop
 * @Last Modified time: 2018-06-01 17:21:05
 */
var jwt = require("jsonwebtoken");
var config = require("../config.js");

exports.createToken = function(content) {
  // 这是加密的key（密钥）
  return jwt.sign(
    {
      data: content
    },
    config.secret_key,
    { expiresIn: config.expires_in }
  );
};
