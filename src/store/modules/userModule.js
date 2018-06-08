import Vue from "vue";
import axios from "axios";

export default {
  state: {
    currentUserState: false,
    currentUser: {
      get UserName() {
        return localStorage.getItem("currentUser_name");
      },
      get UserAvatar() {
        return localStorage.getItem("currentUser_avatar");
      },
      get UserRoles() {
        return localStorage.getItem("currentUser_roles");
      },
      get UserToken() {
        return localStorage.getItem("currentUser_token");
      }
      // get SID() {
      //   return localStorage.getItem("currentUser_sid");
      // }
    }
  },
  mutations: {
    setState(state, { user_state }) {
      state.currentUserState = user_state;
    },
    setUser(state, { user_name, user_token, user_avatar, user_roles }) {
      state.currentUserState = true;
      // 在这里把用户名和token保存起来
      localStorage.setItem("currentUser_name", user_name);
      localStorage.setItem("currentUser_avatar", user_avatar);
      localStorage.setItem("currentUser_roles", user_roles);
      localStorage.setItem("currentUser_token", user_token);
      // localStorage.setItem("currentUser_sid", user_sid);
    },
    setToken(state, { user_token }) {
      localStorage.setItem("currentUser_token", user_token);
    },
    removeUser(state) {
      state.currentUserState = false;
      localStorage.removeItem("currentUser_name");
      localStorage.removeItem("currentUser_avatar");
      localStorage.removeItem("currentUser_roles");
      localStorage.removeItem("currentUser_token");
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
                // 后端API验证通过
                // 调用上面mutations里定义的方法
                context.commit("setUser", {
                  user_name: res.data.data.username,
                  user_avatar: res.data.data.useravatar,
                  user_roles: res.data.data.userroles,
                  user_token: res.data.data.token
                  // user_sid: res.data.data.sid
                });
                resolve(res);
              }
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    logout(context) {
      return new Promise((resolve, reject) => {
        axios
          .get("/api/auth/logout")
          .then(res => {
            if (res.status == 200 && res.data) {
              if (res.data.code === 0) {
                context.commit("removeUser");
                resolve(res);
              }
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    checkState(context) {
      return new Promise((resolve, reject) => {
        if (context.state && context.state.currentUserState) {
          axios
            .get("/api/auth/checkState")
            .then(res => {
              resolve(true);
            })
            .catch(error => {
              resolve(false);
            });
        } else {
          resolve(false);
        }
      });
    }
  }
};
