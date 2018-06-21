<template>
  <div id="mainNews" v-cloak>
    <div class="main-banner"></div>
    <div class="inner-padding">
      <div class="container">
        <!-- <div class="section-container-head">
          <h3>Company
            <span>News</span>
          </h3>
        </div> -->
        <div class="section-container-content">
          <div class="row">
            <div id="channel_nav" :class="{'fixed-nav':fixedNav}">
              <ul class="section-container-nav nav nav-pills nav-stacked">
                <li role="presentation">
                  <router-link :to="{name:'news'}" exact>All News</router-link>
                </li>
                <li role="presentation" v-for="(item,index) in channels" :key="index">
                  <router-link :to="{name:'news_channel',params:{id:item.id}}">{{item.name}}</router-link>
                </li>
              </ul>
            </div>
            <div id="channel_news">
              <cw-loading :loading="loading"></cw-loading>
              <div class="section-container-list" v-show="!loading">
                <div v-for="(item,index) in list" :key="index" class="col-xs-12">
                  <router-link :to="{name:'newsdetail',params:{id:item.id}}" target="_blank">
                    <div class="card">
                      <!--Article-->
                      <div class="card-body">
                        <!-- <div class="card-circle" style="background-image: url('/static/images/1.png')"></div> -->
                        <div class="card-title">{{item.title}}</div>
                        <div class="card-description">{{item.description}}</div>
                      </div>
                      <!-- <div class="card-hero">
                    <div class="card-image" style="background-image: url(/static/images/1.jpg);">
                    </div>
                  </div> -->
                      <div class="card-footer">
                        <div class="card-footer-wrapper">
                          <div class="card-tag pull-right">{{item.create_date | formatTime}}</div>
                          <div class="card-medium"></div>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </div>
                <div class="clearfix"></div>
              </div>
              <div class="section-container-page" v-show="!loading">
                <div class="col-xs-12">
                  <cw-pager :total="total" :current-page='pageIndex' :page-size="pageSize" @page-change="pageChange"></cw-pager>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script scoped>
export default {
  name: "News",
  data() {
    return {
      // 记录总条数
      total: 0,
      // 每页显示条数
      pageSize: this.PAGE_SIZE,
      // 当前的页数
      pageIndex: 1,
      channels: [],
      list: [],
      loading: true,
      fixedNav: false
    };
  },
  beforeCreate: function() {
    // this.getChannels();
    this.$http.get("/api/news/channel").then(res => {
      if (res.status == 200) {
        this.channels = res.data;
      }
    });
  },
  created: function() {
    this.getPage();
  },
  watch: {
    $route(to, from) {
      this.getPage();
    }
  },
  mounted: function() {
    // 开启滚动监听
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    pageChange: function(pageIndex) {
      this.pageIndex = pageIndex;
      this.getPage();
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    getPage: function() {
      this.loading = true;
      return this.$http
        .get("/api/news/list", {
          params: {
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
            channel_id: this.$route.params.id
          }
        })
        .then(res=>{
          if (res.status == 200) {
            this.list = res.data.items;
            this.total = res.data.total;
            this.pageSize = res.data.pageSize;
            this.pageIndex = res.data.pageIndex;
            setTimeout(() =>{
              this.loading = false;
            }, 1000);
          }
        });
    },
    // 滚动监听  滚动触发的效果写在这里
    handleScroll: function() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var width =
        document.body.clientWidth ||
        document.body.offsetWidth ||
        document.body.scrollWidth;
      if (scrollTop >= 140 && width >= 768) {
        this.fixedNav = true;
      } else {
        this.fixedNav = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.fixed-nav {
  position: fixed;
  top: 100px;
  z-index: 999;
  width: 100%;
}
.main-banner {
  background: url(/static/images/banner_5.jpg) no-repeat 0px 0px;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  min-height: 200px;
}
.inner-padding {
  padding: 3em 0;

  .section-container-head {
    margin-bottom: 5em;
    h3 {
      font-size: 3em;
      color: #262c38;
      letter-spacing: 1px;
      position: relative;
      font-weight: 600;
      text-align: center;

      &::after {
        border-top: 2px solid #ffc107;
        display: block;
        width: 81px;
        content: "";
        margin: 8px auto 0;
      }
      span {
        color: #545151;
        font-weight: 200;
      }
    }
  }

  .section-container-nav {
    a:focus,
    a:hover {
      text-decoration: none;
      background-color: #fffadf;
      border-radius: 0;
    }
    a.active {
      color: #fff;
      background-color: #ffc107;
      border-radius: 0;
    }
  }
}
@media (max-width: 767px) {
  #channel_nav {
    width: 100%;
    word-wrap: break-word;
    float: left;
    padding: 0 15px;
  }
  #channel_news {
    margin-left: 0;
  }

  .nav-stacked > li {
    float: left;
  }
}
@media (min-width: 768px) {
  #channel_nav {
    width: 200px;
    word-wrap: break-word;
    float: left;
  }
  #channel_news {
    margin-left: 200px;
  }
}
.card {
  display: inline-block;
  position: relative;
  background-color: white;
  vertical-align: top;
  text-align: left;
  // height: 480px;
  width: 100%;
  margin: 20px 0;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  white-space: normal;
  -webkit-transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  -moz-transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  color: #4b4f56;
  &:hover {
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.16);
    // transform: translate(0, -1px);
    transition-delay: 0s !important;
    &::before {
      content: "";
      position: absolute;
      top: 100%;
      width: 100%;
      height: 20px;
    }
  }

  .card-body {
    position: relative;
    clear: both;
    float: left;
    width: 100%;
    overflow: visible;
    padding: 10px 20px;
    z-index: 2;

    .card-circle {
      height: 48px;
      width: 48px;
      border-radius: 100px;
      background-color: white;
      margin-bottom: 12px;
      display: inline-block;
      line-height: 66px;
      text-align: center;
      width: 48px;
      height: 48px;
      background-size: 48px 48px;
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }
    .card-title {
      font-size: 24px;
      font-weight: 400;
      line-height: 32px;
      margin-bottom: 12px;
      color: #1d2129;
    }
    .card-description {
      display: block;
      display: -webkit-box;
      font-size: 14px;
      font-weight: 400;
      text-align: left;
      line-height: 20px;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #4b4f56;
    }
  }

  .card-hero {
    background-color: white;
    background-size: contain;
    background-position: top;
    background-repeat: no-repeat;
    position: relative;
    clear: both;
    float: left;
    overflow: auto;
    width: 100%;
    padding: 10px 20px;

    .card-image {
      width: 100%;
      height: 140px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  .card-footer {
    font-size: 11px;
    text-transform: uppercase;
    position: relative;
    padding-left: 20px;
    padding-right: 20px;
    bottom: 0px;
    clear: both;
    margin: 0 auto;
    width: 100%;
    .card-footer-wrapper {
      height: 46px;
      line-height: 46px;
      border-top: 1px solid #e9ebee;
    }
  }
}
</style>
