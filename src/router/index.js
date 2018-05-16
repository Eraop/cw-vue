import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Home from "@/views/Home";
import About from "@/views/About"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/helloworld",
      name: "helloworld",
      component: HelloWorld
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
