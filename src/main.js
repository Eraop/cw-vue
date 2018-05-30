// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
window.jQuery = $;
require("bootstrap");
require("vue2-animate/dist/vue2-animate.min.css");

// 引入组件
import header from "./components/Header.vue";
import footer from "./components/Footer.vue";
import pager from "./components/Pager.vue";
import loading from "./components/Loading.vue";

//引入自定义配置
import config from "./config.js";

axios.defaults.baseURL = config.API_BASEURL;
axios.defaults.withCredentials = false;
Vue.prototype.$http = axios;
Vue.prototype.PAGE_SIZE = config.PAGE_SIZE;
// 全局组件
Vue.component("cw-header", header);
Vue.component("cw-footer", footer);

Vue.component("cw-pager", pager);
Vue.component("cw-loading", loading);
Vue.config.productionTip = false;

// 全局过滤器
Vue.filter("formatDate", function(value) {
  return moment(value).format("YYYY-MM-DD");
});
Vue.filter("formatTime", function(value) {
  return moment(value).format("YYYY-MM-DD hh:mm:ss");
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title + " - " + config.META_TITLE;
  }
  next();
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: {
    App
  },
  template: "<App/>"
});
