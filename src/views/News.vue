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
          <p class="bold">Coming soon...{{res}}</p>
        </div>
        <div class="clearfix"> </div>
        <button class="btn btn-primary" @click="getNews">获取信息</button>
      </div>
    </div>
  </div>
</template>
<script scoped>
export default {
  name: "News",
  data() {
    return {
      res: ""
    }
  },
  methods: {
    getNews() {
      debugger
      return this.$http.get('/news/list', function (res) {
        debugger
        alert(res)
        console.log(res);
        this.res = res;
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.main-banner {
  background: url(/static/images/banner_5.jpg) no-repeat 0px 0px;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  min-height: 350px;
}
.inner-padding {
  padding: 10em 0;

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
</style>
