 <template>
  <div class="components-container">
    <el-form ref="form" label-width="80px">
      <el-col :span="12">
        <el-form-item label="标题">
          <el-input v-model="article.title"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="类别">
          <el-select v-model="article.channel_id" placeholder="请选择">
            <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="24">

        <el-form-item label="内容">
          <div class="editor-container" v-if="type===0">
            <tinymce-editor :height="300" v-model="article.content"></tinymce-editor>
          </div>
          <div class="editor-container" v-else-if="type===1">
            <markdown-editor id="contentEditor" ref="contentEditor" v-model="article.content" :height="300" :zIndex="20"></markdown-editor>
          </div>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item>
          <el-button @click="getHtml" class="pull-left" type="primary" icon="el-icon-document">预览</el-button>
          <el-button type="primary" class="pull-right" @click="onSubmit">保存</el-button>
          <el-button class="pull-right">取消</el-button>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item>
          <div class="padding" v-html="html"></div>
        </el-form-item>
      </el-col>
    </el-form>
  </div>
</template>

<script>
import { Form, Col, Button, FormItem, Option, Select, Input } from "element-ui";
import MarkdownEditor from "../../components/editor/Markdown";
import TinymceEditor from "../../components/editor/Tinymce";
export default {
  name: "AddNews",
  data() {
    return {
      type: 0,
      channels: [],
      html: "",
      article: {
        title: "",
        content: "",
        channel_id: 1
      }
    };
  },
  components: {
    MarkdownEditor,
    TinymceEditor,
    ElForm: Form,
    ElButton: Button,
    ElFormItem: FormItem,
    ElOption: Option,
    ElSelect: Select,
    ElInput: Input
  },
  beforeCreate: function () {
    this.$http.get("/api/news/channel").then(res => {
      if (res.status == 200) {
        this.channels = res.data;
      }
    });
  },
  methods: {
    md2html(d) {
      return new Promise((resolve, reject) => {
        import("showdown").then(showdown => {
          const converter = new showdown.Converter();
          resolve(converter.makeHtml(d));
        });
      });
    },
    getHtml() {
      this.type === 0
        ? (this.html = this.article.content)
        : this.md2html(this.article.content).then(res => {
          this.html = res;
        });
    },
    onSubmit() {
      Promise.all(this.getHtml()).then(res => {
        return this.$http
          .post("/api/admin/news/save", article)
          .then(res => {
            if (res.status == 200) {
              this.$router.push({ name: "admin_news" });
            }
          });
      });
    }
  }
};
</script> 