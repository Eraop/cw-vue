<template>
  <div id="mainNews">
    <div class="main-banner"></div>
    <div class="inner-padding">
      <div class="container">
        <div class="section-container-head">
          <h3>Company
            <span>News</span>
          </h3>
        </div>
        <div class="section-container-content text-center">
          <h3 class="text-warning bold margin-v-15"></h3>
        </div>
        <div class="clearfix"> </div>
        <div class="row">
          <div class="col-md-2">
            <ul v-for="(item,index) in channels" :key="index" class="col-xs-12">
              <li>{{item.name}}</li>
            </ul>
          </div>
          <div class="col-md-10">
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
            <div class="section-container-page">
              <div class="col-xs-12">
                <cw-pager :total="total" :current-page='pageIndex' :page-size="pageSize" @page-change="pageChange"></cw-pager>
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
      loading: true
    };
  },
  beforeCreate: function() {
    var $this = this;
    // this.getChannels();
    this.$http.get("/api/news/channel").then(function(res) {
      if (res.status == 200) {
        $this.channels = res.data;
      }
    });
  },
  created: function() {
    this.getPage(this.pageIndex, this.pageSize);
  },
  mounted: function() {},
  methods: {
    pageChange: function(pageIndex) {
      this.getPage(pageIndex, this.pageSize);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    getPage: function(pageIndex, pageSize) {
      this.loading = true;
      var $this = this;
      return $this.$http
        .get("/api/news/list", {
          params: {
            pageIndex: $this.pageIndex,
            pageSize: $this.pageSize,
            channel: $this.$route.params.channel
          }
        })
        .then(function(res) {
          if (res.status == 200) {
            $this.list = res.data.items;
            $this.total = res.data.total;
            $this.pageSize = res.data.pageSize;
            $this.pageIndex = res.data.pageIndex;
            setTimeout(function() {
              $this.loading = false;
            }, 1000);
          }
        });

      // return $this.$http.get('/news/list', {
      //   params: {
      //     pageIndex: this.current,
      //     pageSize: this.pageSize
      //   }
      // }).then(function (res) {
      //   debugger
      //   if (res.status == 200) {
      //     $this.list = res.data.items;
      //     $this.total = res.data.total;
      //     $this.pageSize = res.data.pageSize;
      //     $this.current = res.data.pageIndex;
      //   }
      // });
    }
  }
};
</script>
<style lang="scss" scoped>
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
    transform: translate(0, -1px);
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
