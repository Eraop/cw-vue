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
        <div class="section-container-list">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>序号</th>
                <th>标题</th>
                <th>作者</th>
                <th>创建时间</th>
                <th>编辑时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in list" :key="index">
                <th scope="row">{{index+1}}</th>
                <td>{{item.title}}</td>
                <td>{{item.user_id}}</td>
                <td>{{item.create_date}}</td>
                <td>{{item.last_update}}</td>
                <td>
                  <router-link tag="a" target="_blank" :to="{name:'newsdetail',params:{id:item.id}}">查看</router-link>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="6">
                  <cw-pager :total="total" :current-page='current' :page-size="pageSize" @page-change="pageChange"></cw-pager>
                </td>
              </tr>
            </tfoot>
          </table>
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
      pageSize: 2,
      // 当前的页数
      pageIndex: 1,
      list: []
    }
  },
  created: function () {
    this.getPage(this.pageIndex, this.pageSize);
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
  }, methods: {
    pageChange: function (pageIndex) {
      this.getPage(pageIndex, this.pageSize);
    },
    getPage: function (pageIndex, pageSize) {
      debugger
      var $this = this;
      return $this.$http.get('/news/list?pageIndex=' + pageIndex + "&pageSize=" + this.pageSize).then(function (res) {
        debugger
        if (res.status == 200) {
          $this.list = res.data.items;
          $this.total = res.data.total;
          $this.pageSize = res.data.pageSize;
          $this.pageIndex = res.data.pageIndex;
        }
      });
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
