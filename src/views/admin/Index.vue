<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :span="10" class="logo" :class="isCollapse?'logo-collapse-width':'logo-width'">
        {{isCollapse?'CW':sysName}}
      </el-col>
      <!-- <el-col :span="10">
        <div class="tools" @click.prevent="collapse">
          <i class="fa fa-align-justify"></i>
        </div>
      </el-col> -->
      <el-col :span="4" class="userinfo">
        <el-dropdown trigger="hover">
          <span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
    <el-col :span="24" class="main">
      <aside>

        <!--导航菜单-->
        <el-menu :default-active="$route.name" class="el-menu-vertical-demo">
          <el-menu-item v-for="(item,index) in menus" :index="item.link" :key="index">
            <router-link tag="span" :to="{name:item.link}" @click.native='checkUrl(item.link)'>
              <i :class="item.icon"></i>
              {{item.name}}
            </router-link>
          </el-menu-item>
        </el-menu>
      </aside>
      <section class="content-container">
        <div class="grid-content bg-purple-light">
          <el-col :span="24" class="breadcrumb-container">
            <!-- <strong class="title">{{$route.meta.title}}</strong> -->
            <el-breadcrumb separator="/" class="breadcrumb-inner">
              <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                {{ item.meta.title }}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      menus: [],
      sysName: "CW-VUE",
      isCollapse: false,
      sysUserName: "",
      sysUserAvatar: "",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  created: function () {
    return this.$http.get("/api/admin/menu").then(res => {
      if (res.status == 200) {
        if (res.data !== "") {
          this.menus = res.data;
        }
      }
    });
  },
  methods: {
    checkUrl: function (url) {
      // if (url === this.$route.name) {
      //   this.$router.go(0);
      // }
    },
    onSubmit() {
      console.log("submit!");
    },
    handleopen() {
      //console.log('handleopen');
    },
    handleclose() {
      //console.log('handleclose');
    },
    handleselect: function (a, b) { },
    //退出登录
    logout: function () {
      this.$confirm("确认退出吗?", "提示", {
        type: "warning"
      })
        .then(() => {
          this.$store.dispatch("logout").then(res => {
            if (res.data.code === 0) {
              this.$router.push({ name: "login" });
            }
          });
        })
        .catch(() => { });
    },
    //折叠导航栏
    collapse: function () {
      this.isCollapse = !this.isCollapse;
    },
    showMenu(i, status) {
      this.$refs.menuCollapsed.getElementsByClassName(
        "submenu-hook-" + i
      )[0].style.display = status ? "block" : "none";
    }
  },
  mounted() {
    this.sysUserName = this.$store.state.user.currentUser.UserName || "";
    this.sysUserAvatar = this.$store.state.user.currentUser.UserAvatar || "";
  }
};
</script>


<style scoped lang="scss">
@import "../../assets/css/admin.scss";
</style>