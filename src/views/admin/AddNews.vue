 <template>
  <div class="components-container">
    <el-form ref="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <div class="editor-container" v-if="type===0">
          <tinymce-editor :height="300" v-model="content"></tinymce-editor>
        </div>
        <div class="editor-container" v-else-if="type===1">
          <markdown-editor id="contentEditor" ref="contentEditor" v-model="content" :height="300" :zIndex="20"></markdown-editor>
          <!-- <div class="editor-content" v-html="content"></div> -->
        </div>
      </el-form-item>
      <el-form-item>
        <el-button @click="getHtml" class="pull-left" type="primary" icon="el-icon-document">预览</el-button>
        <el-button type="primary" class="pull-right" @click="onSubmit">保存</el-button>
        <el-button class="pull-right">取消</el-button>
      </el-form-item>
      <el-form-item>
        <div class="padding" v-html="html"></div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import MarkdownEditor from "../../components/editor/Markdown";
import TinymceEditor from "../../components/editor/Tinymce";
export default {
  name: "AddNews",
  components: { MarkdownEditor, TinymceEditor },
  data() {
    return {
      type: 1,
      title: "",
      content: "",
      html: ""
    };
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
        ? (this.html = this.content)
        : this.md2html(this.content).then(res => {
            this.html = res;
          });
    },
    onSubmit() {
      Promise.all(this.getHtml).then(res => {
        return this.$http
          .post("/api/admin/news/save", {
            title: this.title,
            html: this.html
          })
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
