<template>
    <div>
        <el-table ref="multipleTable" :data="channels" tooltip-effect="dark" style="width: 100%">
            <el-table-column prop="name" label="名称" width="500">
            </el-table-column>
            <el-table-column prop="name_key" label="简称">
            </el-table-column>
            <el-table-column label="操作" width="200">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit( scope.row.id)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import { Table, TableColumn, Button } from "element-ui";
export default {
    name: "AdminChannel",
    data() {
        return {
            channels: []
        }
    },
    components: {
        ElTable: Table,
        ElTableColumn: TableColumn,
        ElButton: Button
    },
    beforeCreate: function () {
        this.$http.get("/api/news/channel").then(res => {
            if (res.status == 200) {
                this.channels = res.data;
            }
        });
    },
    methods: {
        handleEdit(id) {
            this.$router.push({ name: "admin_news_add", params: { id: id } });
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
    }
}
</script> 
