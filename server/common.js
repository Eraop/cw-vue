var config = require("./config.js");
var tokenUtil = require("./auth/token.js");
var CommonModels = require("./models/CommonModels.js");

function checkState(req, res, next) {
  return new Promise((resolve, reject) => {
    var token = req.headers["x-access-token"];
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
          if (
            decoded &&
            decoded.exp * 1000 > new Date() &&
            decoded.exp * 1000 - new Date() <
              (config.token_expires_in / 2) * 1000 &&
            decoded.username === req.session.username
          ) {
            token = tokenUtil.createToken(decoded.username);
            res.setHeader("x-access-token", token);
            rm.code = 200;
            rm.msg = "token刷新";
            resolve(rm);
          } else {
            token = tokenUtil.createToken(decoded.username);
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
