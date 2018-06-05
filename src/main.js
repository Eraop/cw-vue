// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Vuex from "vuex";
import App from "./App";
import router from "./router";
import axios from "axios";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
window.jQuery = $;
require("bootstrap");

// 引入组件
import header from "./components/Header.vue";
import footer from "./components/Footer.vue";
import pager from "./components/Pager.vue";
import loading from "./components/Loading.vue";

//引入自定义配置
import config from "./config.js";
//vuex
import store from "./store/store.js";

axios.defaults.baseURL = config.API_BASEURL;
axios.defaults.withCredentials = true;

//添加请求拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.user.currentUser.UserToken) {
      // 判断是否存在token,如果存在的话,则每个http header都加上token
      config.headers["x-access-token"] = store.state.user.currentUser.UserToken;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

//添加响应拦截器
axios.interceptors.response.use(
  function(res) {
    console.log(res);
    //对响应数据做些事
    if (res.data && res.data.code === 401) {
      store.commit("setUser", {
        user_name: "",
        user_token: ""
      });
      router.replace({
        path: "login",
        query: { redirect: router.currentRoute.fullPath }
      });
    } else if (
      res.headers &&
      res.headers["x-access-token"] &&
      res.headers["x-access-token"] !== store.state.user.currentUser.UserToken
    ) {
      // 后台刷新了token
      store.commit("setToken", {
        user_token: res.headers["x-access-token"]
      });
    }
    return res;
  },
  function(error) {
    //请求错误时做些事
    return Promise.reject(error);
  }
);
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
  if (to.meta.auth) {
    // 判断该路由是否需要登录权限
    // 通过vuex state获取当前的token是否存在
    if (store.state.user.currentUser.UserToken) {
      if (to.meta.title) {
        document.title = to.meta.title + " - " + config.META_TITLE;
      }
      next();
    } else {
      next({
        name: "login",
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    }
  } else {
    next();
  }
  /* 路由发生变化修改页面title */
  // if (to.meta.title) {
  //   document.title = to.meta.title + " - " + config.META_TITLE;
  // }
  // next();
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: {
    App
  },
  template: "<App/>"
});
