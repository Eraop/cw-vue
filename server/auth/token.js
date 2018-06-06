/*
 * @Author: Eraop 
 * @Date: 2018-06-01 15:22:50 
 * @Last Modified by: Eraop
 * @Last Modified time: 2018-06-06 09:50:51
 */
var jwt = require("jsonwebtoken");
var config = require("../config.js");

var tokenUtil = {
  createToken: function(username) {
    // 这是加密的key（密钥）
    return jwt.sign(
      {
        username: username
      },
      config.secret_key,
      { expiresIn: config.token_expires_in }
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
  },
  decodedToken: function(token) {
    return jwt.decode(token, config.secret_key);
  }
};
module.exports = tokenUtil;
