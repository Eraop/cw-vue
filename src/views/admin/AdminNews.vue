<template>
  <div>
    <div>
      <button type="button" class="btn btn-primary" @click="addNews">
        <i class="fa fa-plus"></i> 新增</button>
    </div>
    <cw-loading :loading="loading"></cw-loading>
    <el-table ref="multipleTable" :data="list" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" v-show="!loading">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column label="发布时间" width="200">
        <template slot-scope="scope">{{ scope.row.create_date | formatTime }}</template>
      </el-table-column>
      <el-table-column prop="username" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="title" label="标题">
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row.id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row.id,$event)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px" v-show="!loading">
      <cw-pager :total="total" :current-page='pageIndex' :page-size="pageSize" @page-change="pageChange"></cw-pager>
    </div>

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import {
  Row,
  Col,
  Table,
  TableColumn,
  Button,
  MessageBox,
  Message,
  Loading
} from "element-ui";
var $confirm = MessageBox.confirm;
var $msgbox = MessageBox;
var $alert = MessageBox.alert;
var $message = Message;
export default {
  name: "AdminNews",
  data() {
    return {
      // 记录总条数
      total: 0,
      // 每页显示条数
      pageSize: this.PAGE_SIZE,
      // 当前的页数
      pageIndex: 1,
      list: [],
      loading: true,
      multipleSelection: []
    };
  },
  components: {
    ElRow: Row,
    ElCol: Col,
    ElTable: Table,
    ElTableColumn: TableColumn,
    ElButton: Button,
    ElMessageBox: MessageBox,
    ElMessage: Message,
    ElLoading: Loading
  },
  created: function() {
    this.getPage();
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
            pageSize: this.pageSize
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.list = res.data.items;
            this.total = res.data.total;
            this.pageSize = res.data.pageSize;
            this.pageIndex = res.data.pageIndex;
            setTimeout(() => {
              this.loading = false;
            }, 1000);
          }
        });
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(id) {
      this.$router.push({ name: "admin_news_edit", params: { id: id } });
    },
    handleDelete(id, event) {
      $confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$http.get("/api/admin/news/deleteOne?id=" + id).then(res => {
          if (res.status == 200) {
            this.getPage();
            $message({
              type: "success",
              message: "删除成功"
            });
          } else {
            $message.error("删除失败，稍后再试");
          }
        });
      });
    },
    addNews() {
      this.$router.push({ name: "admin_news_add" });
    }
  }
};
</script> 
