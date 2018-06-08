 <template>
    <div class="components-container">
        <el-form ref="form" label-width="80px">
            <el-form-item label="标题">
                <el-input v-model="title"></el-input>
            </el-form-item>
            <el-form-item label="内容">
                <div class="editor-container">
                    <markdown-editor id="contentEditor" ref="contentEditor" v-model="content" :height="300" :zIndex="20"></markdown-editor>
                </div>
            </el-form-item>
            <el-form-item>
                <el-button @click="markdown2Html" class="pull-left" type="primary" icon="el-icon-document">To HTML</el-button>
                <el-button type="primary" class="pull-right" @click="onSubmit">保存</el-button>
                <el-button class="pull-right">取消</el-button>
            </el-form-item>

        </el-form>
        <el-row>
            <div class="padding" v-html="html"></div>
        </el-row>
    </div>
</template>

<script>
import MarkdownEditor from "../../components/MarkdownEditor";
const content = `
![mahua](http://mahua.jser.me/mahua-logo.jpg)
##MaHua是什么?
一个在线编辑markdown文档的编辑器

向Mac下优秀的markdown编辑器mou致敬

##MaHua有哪些功能？

* 方便的导入导出功能
    *  直接把一个markdown的文本文件拖放到当前这个页面就可以了
    *  导出为一个html格式的文件，样式一点也不会丢失
* 有数量也有质量的题,编辑器和预览区域
* 完美兼容Github的markdown语法
* 预览区域代码高亮
* 所有选项自动记忆

##有问题反馈
在使用中有任何问题，欢迎反馈给我，可以用以下联系方式跟我交流

* 邮件(dev.hubo#gmail.com, 把#换成@)
* QQ: 287759234
* weibo: [@草依山](http://weibo.com/ihubo)
* twitter: [@ihubo](http://twitter.com/ihubo)

##捐助开发者
在兴趣的驱动下,写一个免费的东西，有欣喜，也还有汗水，希望你喜欢我的作品，同时也能支持一下。
当然，有钱捧个钱场（右上角的爱心标志，支持支付宝和PayPal捐助），没钱捧个人场，谢谢各位。

##感激
感谢以下的项目,排名不分先后

* [mou](http://mouapp.com/) 
* [ace](http://ace.ajax.org/)
* [jquery](http://jquery.com)

##关于作者
 `;
export default {
  name: "AddNews",
  components: { MarkdownEditor },
  data() {
    return {
      title: "",
      content: content,
      html: ""
    };
  },
  methods: {
    markdown2Html() {
      import("showdown").then(showdown => {
        const converter = new showdown.Converter();
        this.html = converter.makeHtml(this.content);
      });
    },
    onSubmit() {
      return this.$http
        .post("/api/news/save", { title: this.title, html: this.html })
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
  }
};
</script>
