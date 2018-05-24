<template>
    <div id="mainNewsDetail">
        <div class="inner-padding">
            <div class="container">
                <div class="section-container-head text-center">
                    <h3 class="news-detail-title text-dark bold">{{model.title}} </h3>
                    <div class="text-dark margin-v-10">创建时间：{{model.create_date}}</div>
                </div>
                <div class="section-container-content text-center">
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
        }
    },
    created: function () {
        var $this = this;
        return $this.$http.get('/news/detail/' + $this.$route.params.id).then(function (res) {
            if (res.status == 200) {
                if (res.data !== "") {
                    $this.model = res.data;
                }
                else {
                    $this.$router.push({ name: "notfound" });
                }
            }
        });
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
    margin-bottom: 2em;
    &:after {
      border-top: 1px solid #343a40;
      display: block;
      width: 100%;
      content: "";
      margin: 8px auto 0;
    }
  }
}
</style>