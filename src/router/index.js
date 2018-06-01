import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import ContactUs from "@/views/ContactUs";
import News from "@/views/News";
import NotFound from "@/views/NotFound";
import NewsDetail from "@/views/NewsDetail";
import Login from "@/views/Login";
import AdminIndex from "@/views/admin/Index";

Vue.use(Router);

const router = new Router({
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
      path: "/admin",
      name: "admin",
      component: AdminIndex,
      meta: {
        title: "后台管理",
        auth: true,
        hideheader: true
      },
      children: [
        {
          path: "menu",
          name: "admin_menu",
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

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    // 判断该路由是否需要登录权限
    // 通过vuex state获取当前的token是否存在
    debugger;
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

export default router;
