<template>
  <div id="mainNewsDetail">
    <div class="inner-padding">
      <div class="container">
        <div class="section-container-head">
          <h3 class="news-detail-title text-dark bold">{{!this.$common.isCN()?model.title_key:model.title}}</h3>
          <!-- <div class="text-dark margin-v-10 text-right">创建时间：{{model.create_date | formatTime}}</div> -->
        </div>
        <div class="section-container-content">
          <p>项目工期：<span>{{model.period}}</span></p>
          <!-- <p v-html="model.description"></p> -->
          <p v-html="model.content"></p>
        </div>
        <div class="clearfix"> </div>
      </div>
    </div>
  </div>
</template>
<script scoped>
export default {
  name: "NewsDetail",
  data() {
    return {
      model: ""
    };
  },
  created: function () {
    return this.$http
      .get("/api/news/detail/" + this.$route.params.id)
      .then(res => {
        if (res.status == 200) {
          if (res.data !== "") {
            this.model = res.data;
            document.title = this.model.title + " | Eraop";
          } else {
            this.$router.push({ name: "notfound" });
          }
        }
      });
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
  min-height: 350px;
}
.inner-padding {
  padding: 10em 0;

  .section-container-head {
    margin-bottom: 2em;
    &:after {
      border-top: 1px solid #d8d8d8;
      display: block;
      width: 100%;
      content: "";
      margin: 8px auto 0;
    }
  }
}
</style>