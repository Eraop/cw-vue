<template>
    <div>
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column label="发布时间" width="120">
                <template slot-scope="scope">{{ scope.row.create_date }}</template>
            </el-table-column>
            <el-table-column prop="userid" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="description" label="描述" show-overflow-tooltip>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  name: "AdminNews",
  data() {
    return {
      tableData: [],
      multipleSelection: []
    };
  },
  created: function() {
    return this.$http.get("/api/news/list").then(res => {
      if (res.status == 200) {
        if (res.data !== "") {
          this.tableData = res.data;
        }
      }
    });
  },
  methods: {
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
    }
  }
};
</script>