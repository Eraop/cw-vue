var config = require("./config.js");
var tokenUtil = require("./auth/token.js");
var CommonModels = require("./models/CommonModels.js");
var moment = require("moment");

function checkState(req, res, next) {
  return new Promise((resolve, reject) => {
    var token = req.headers["x-access-token"];
    var rememberme = req.headers["x-access-rememberme"];
    var rm = new CommonModels.ReturnModel();
    // 检查session是否有效
    if (!req.session || !req.session.username) {
      rm.code = 401;
      rm.msg = "登录过期";
      resolve(rm);
    } else {
      //检查token是否有效
      tokenUtil.checkToken(token).then(result => {
        if (result && result.success) {
          var decoded = tokenUtil.decodedToken(token);
          let token_expires_in = rememberme
            ? config.token_expires_in_rememberme
            : config.token_expires_in;
          if (
            decoded &&
            decoded.exp * 1000 > new Date() &&
            decoded.exp * 1000 - new Date() < (token_expires_in / 2) * 1000 &&
            decoded.username === req.session.username
          ) {
            token = tokenUtil.createToken(decoded.username, rememberme);
            res.setHeader("x-access-token", token);
            rm.code = 200;
            rm.msg = "token刷新";
            resolve(rm);
          } else {
            token = tokenUtil.createToken(decoded.username, rememberme);
            res.setHeader("x-access-token", token);
            rm.code = 200;
            rm.msg = "信息正确";
            resolve(rm);
          }
        } else {
          rm.code = 401;
          rm.msg = "token信息错误";
          resolve(rm);
        }
      });
    }
  });
}

exports.checkState = checkState;

exports.formatTime = function(value) {
  return moment(value).format("YYYY-MM-DD hh:mm:ss");
};
