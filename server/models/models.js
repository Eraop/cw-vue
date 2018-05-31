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

module.exports = {
  ReturnModel,
  PageModel
};
