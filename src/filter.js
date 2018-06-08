import Vue from "vue";
import moment from "moment";

// 全局过滤器
Vue.filter("formatDate", function(value) {
  return moment(value).format("YYYY-MM-DD");
});
Vue.filter("formatTime", function(value) {
  return moment(value).format("YYYY-MM-DD hh:mm:ss");
});
