import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import ContactUs from "@/views/ContactUs";
import News from "@/views/News";

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
        auth: false
      }
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        auth: false
      }
    },
    {
      path: "/contactus",
      name: "contactus",
      component: ContactUs,
      meta: {
        auth: false
      }
    },
    {
      path: "/news",
      name: "news",
      component: News,
      meta: {
        auth: false
      }
    }
  ]
});
