"use strict";
// 分页Model
class PageModel {
  constructor(currentPage, pageSize, total, items) {
    this.currentPage = currentPage;
    this.pageSize = pageSize;
    this.total = total;
    this.items = items;
  }
}
// 统一的返回对象
class ReturnModel {
  constructor(code, msg, data) {
    this.code = code;
    this.msg = msg;
    this.data = data;
  }
}
// var ReturnResult  = {
//   SUCCESS = new ReturnModel(200,"",""),
//   FAILED = new ReturnModel(404,"用户名或密码错误",""),
//   INVALID_AUTH = new ReturnModel(401,"未授权","")
// }
module.exports = {
  ReturnModel,
  PageModel
};
