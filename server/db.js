// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require("mongoose");
// 连接数据库
mongoose.connect("mongodb://localhost/eraop");

// 为这次连接绑定事件
const db = mongoose.connection;
// 数据库链接错误监听
db.once('error', () => console.log('Mongo connection error'));
// 数据库链接成功监听
db.once('open', () => console.log('Mongo connection successed'));
// 数据库关闭监听
db.once('close', () => console.log('Mongo connection faild'));
/************** 定义模式loginSchema **************/
const sysUsersSchema = mongoose.Schema({
  id: Schema.Types.ObjectId,
  username: String,
  password: String,
  createtime: Date,
  state: Number
});

/************** 定义模型Model **************/
const Models = {
    SysUsers: mongoose.model("SysUsers", sysUsers)
};

module.exports = Models;
