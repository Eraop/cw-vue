 <template>
  <div class="components-container">
    <el-form :model="article" ref="ruleForm" label-width="80px" :rules="rules">
      <el-col :span="12">
        <el-form-item label="标题" prop="title">
          <el-input v-model="article.title"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="英文标题" prop="title_key">
          <el-input v-model="article.title_key"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="项目时间" prop="period">
          <el-input v-model="article.period"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="类别" prop="channel_id">
          <el-select v-model="article.channel_id">
            <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="描述" prop="description">
          <div class="editor-container">
            <el-input type="textarea" v-model="article.description"></el-input>
          </div>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="内容" prop="content">
          <div class="editor-container">
            <tinymce-editor :height="500" v-model="article.content"></tinymce-editor>
          </div>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item>
          <el-button type="primary" class="pull-right" @click="submitForm('ruleForm')">保存</el-button>
          <el-button class="pull-right">取消</el-button>
        </el-form-item>
      </el-col>
    </el-form>
  </div>
</template>

<script>
import { Form, Col, Button, FormItem, Option, Select, Input } from "element-ui";
import TinymceEditor from "../../components/editor/Tinymce";
export default {
  name: "AddNews",
  data() {
    return {
      channels: [],
      article: {
        id: "",
        create_date: "",
        last_update: "",
        channel_id: "",
        content: "",
        title: "",
        title_key: "",
        period: "",
        user_id: "",
        viewcount: "",
        description: ""
      },
      rules: {
        title: [
          { required: true, message: "请输入文章标题", trigger: "blur" },
          {
            min: 1,
            max: 200,
            message: "长度在 1 到 200 个字符",
            trigger: "blur"
          }
        ],
        description: [
          { required: true, message: "请输入文章描述", trigger: "blur" }
        ],
        content: [
          { required: true, message: "请输入文章内容", trigger: "blur" }
        ],
        channel_id: [
          { required: true, message: "请选择类别", trigger: "change" }
        ]
      }
    };
  },
  components: {
    TinymceEditor,
    ElCol: Col,
    ElForm: Form,
    ElButton: Button,
    ElFormItem: FormItem,
    ElOption: Option,
    ElSelect: Select,
    ElInput: Input
  },
  watch: {
    $route(to, from) {
      this.$router.go(0);
    }
  },
  beforeCreate: function () {
    if (this.$route.params.id && this.$route.params.id > 0) {
      // 编辑页面
      this.$http
        .get("/api/admin/news/detail/" + this.$route.params.id)
        .then(res => {
          if (res.status == 200) {
            if (res.data && res.data.code == 200) {
              this.article = res.data.data;
            } else if (res.data && res.data.code == 404) {
              alert("文章已经不存在");
            }
          }
        });
    }
    this.$http.get("/api/news/channel").then(res => {
      if (res.status == 200) {
        this.channels = res.data;
      }
    });
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          return this.$http
            .post("/api/admin/news/save", this.article)
            .then(res => {
              if (res.status == 200) {
                if (res.data && res.data.code === 200) {
                  this.$router.push({ name: "admin_news" });
                } else {
                  alert("提交失败");
                }
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script> 