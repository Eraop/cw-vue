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
import AdminNews from "@/views/admin/AdminNews";
import AdminMenu from "@/views/admin/Menu";
import AdminUser from "@/views/admin/User";
import AdminAbout from "@/views/admin/About";
import AddNews from "@/views/admin/AddNews";

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
        hide: true
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
        auth: true
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
        hide: true
      },
      children: [
        {
          path: "menu",
          name: "admin_menu",
          component: AdminMenu,
          meta: {
            title: "菜单列表",
            auth: true,
            hide: true
          }
        },
        {
          path: "about",
          name: "admin_about",
          component: AdminAbout,
          meta: {
            title: "关于我们",
            auth: true,
            hide: true
          }
        },
        {
          path: "news",
          name: "admin_news",
          component: AdminNews,
          meta: {
            title: "新闻列表",
            auth: true,
            hide: true
          }
        },
        {
          path: "news/add",
          name: "admin_news_add",
          component: AddNews,
          meta: {
            title: "新增新闻",
            auth: true,
            hide: true
          }
        },
        {
          path: "menu",
          name: "admin_user",
          component: AdminUser,
          meta: {
            title: "用户列表",
            auth: true,
            hide: true
          }
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

export default router;
