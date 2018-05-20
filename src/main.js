// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
window.jQuery = $;
require("bootstrap");

// 引入组件
import header from "./components/Header.vue";
import footer from "./components/Footer.vue";
import http from './api/index.js';
Vue.prototype.$http = http;
// 声明全局 全局
Vue.component("cw-header", header);
Vue.component("cw-footer", footer);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: {
    App
  },
  template: "<App/>"
});