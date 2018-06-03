/*
 * @Author: Eraop 
 * @Date: 2018-06-01 15:22:50 
 * @Last Modified by: Eraop
 * @Last Modified time: 2018-06-03 11:04:43
 */
var jwt = require("jsonwebtoken");
var config = require("../config.js");

var tokenUtil = {
  createToken: function(content) {
    // 这是加密的key（密钥）
    return jwt.sign(
      {
        data: content
      },
      config.secret_key,
      { expiresIn: config.expires_in }
    );
  },
  checkToken: function(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, config.secret_key, function(err, decoded) {
        if (err) {
          resolve({ success: false, message: "token错误" });
        } else {
          resolve({
            success: true,
            message: "token正确",
            data: decoded
          });
        }
      });
    });
  }
};
module.exports = tokenUtil;
