import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import ContactUs from "@/views/ContactUs";
import News from "@/views/News";
import NotFound from "@/views/NotFound";
import NewsDetail from "@/views/NewsDetail";
import Login from "@/views/Login";

Vue.use(Router);

export default new Router({
  // mode: "history",
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "首页",
        auth: false
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        title: "登录",
        auth: false,
        hideheader: true  
      }
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        title: "关于我们",
        auth: false
      }
    },
    {
      path: "/contactus",
      name: "contactus",
      component: ContactUs,
      meta: {
        title: "联系我们",
        auth: false
      }
    },
    {
      path: "/news/detail/:id",
      name: "newsdetail",
      component: NewsDetail,
      meta: {
        auth: false
      }
    },
    {
      path: "/news",
      name: "news",
      component: News,
      meta: {
        title: "新闻",
        auth: false
      },
      children: [
        {
          path: "channel/:id",
          name: "news_channel",
          component: News
        }
      ]
    },
    {
      path: "*",
      name: "notfound",
      component: NotFound,
      meta: {
        title: "错误页",
        auth: false
      }
    }
  ]
});
