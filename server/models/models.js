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
