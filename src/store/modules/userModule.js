import Vue from "vue";
import axios from "axios";

export default {
  state: {
    currentUser: {
      get UserName() {
        return localStorage.getItem("currentUser_name");
      },
      get UserToken() {
        return localStorage.getItem("currentUser_token");
      }
    }
  },
  mutations: {
    setUser(state, { user_name, user_token }) {
      // 在这里把用户名和token保存起来
      localStorage.setItem("currentUser_name", user_name);
      localStorage.setItem("currentUser_token", user_token);
    },
    setToken(state, { user_token }) {
      localStorage.setItem("currentUser_token", user_token);
    }
  },
  actions: {
    login(context, { user_name, user_pass }) {
      return new Promise((resolve, reject) => {
        // 发送请求做权限认证
        axios
          .post("/api/auth/login", {
            name: user_name,
            password: user_pass
          })
          .then(res => {
            if (res.status == 200 && res.data) {
              if (res.data.code === 0) {
                if (res.data.data.token) {
                  // 后端API验证通过
                  // 调用上面mutations里定义的方法
                  context.commit("setUser", {
                    user_name: res.data.data.username,
                    user_token: res.data.data.token
                  });
                }
              }
            }
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};
