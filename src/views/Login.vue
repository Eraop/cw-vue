<template>
  <div class="main-login" id="mainLogin">
    <div class="main-login-bg" v-lazy-container="{ selector: 'img' }">
      <img data-src="/static/images/login-bg.jpg" data-loading='/static/images/login-bg_small.jpg'>
    </div>
    <div class="items-group">
      <div class="item">
        <div class="block text">
          <span class="circleLight"></span>
          <!-- login form -->
          <div class="login-form">
            <div class="agile-row">
              <h1>{{isEng?"Sign in":"登录"}}</h1>
              <div class="login-agileits-top">
                <div>
                  <p>{{isEng?"User Name":"用户名"}}</p>
                  <input type="text" ref="name" class="name" name="username" v-bind:placeholder="isEng?'User Name':'用户名'" @keyup.enter="login">
                  <p>{{isEng?"Password":"密码"}}</p>
                  <input type="password" ref="password" class="password" name="Password" placeholder="********" @keyup.enter="login">
                  <label class="anim">
                    <input type="checkbox" class="checkbox">
                    <span> {{isEng?"Remember me":"记住我"}} ?</span>
                  </label>
                  <input type="submit" value="Login" @click="login">
                </div>
              </div>
              <!-- <div class="login-bottom">
                <h6>
                  <a href="#">Forgot password?</a>
                </h6>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
export default {
  name: "Login",
  data() {
    return {
      isEng: true
    };
  },
  beforeCreate() {
    // 是否已登录验证，已登录则跳转
    if (this.$store.state.user.currentUser.UserToken) {
      this.$router.push({ path: '/admin' });
    } else {
      this.$store.dispatch("checkState").then(res => {
        if (res) {
          this.$router.push({ name: "admin" });
        }
      });
      document.getElementsByTagName("body")[0].className = "login-body";
    }
  },
  beforeDestroy: function () {
    document
      .getElementsByTagName("body")[0]
      .removeAttribute("class", "login-body");
  },
  created: function () {
    this.isEng = this.$store.state.user.language == "en-US";
  },
  methods: {
    login() {
      var $this = this;
      $this.$store
        .dispatch("login", {
          user_name: $this.$refs.name.value,
          user_pass: $this.$refs.password.value
        })
        .then(res => {
          if (res.status == 200 && res.data) {
            if (res.data.code === 0) {
              var redirect = $this.$route.query.redirect;
              if (redirect) {
                $this.$router.push({ path: redirect });
              } else {
                $this.$router.push({ name: "admin" });
              }
            } else {
              alert(res.data.msg);
            }
          } else {
            alert("网络异常，稍后再试");
          }
        });
    }
  }
};
</script>

<style lang="scss">
input:-webkit-autofill {
  box-shadow: 0 0 0px 1000px #8b5828 inset;
  -webkit-box-shadow: 0 0 0px 1000px #8b5828 inset;
  -webkit-text-fill-color: #f2f2f2;
}
.main-login {
  .main-login-bg img {
    position: absolute;
    width: 100%;
    height: 100%;
    min-height: 710px;
  }
  .items-group {
    width: 100%;
    height: 100%;
    padding-top: 150px;
    position: relative;

    .item {
      -webkit-transition: 0.5s;
      -moz-transition: 0.5s;
      -o-transition: 0.5s;
      -ms-transition: 0.5s;
      transition: 0.5s;
      visibility: hidden;
      position: relative;
      opacity: 1;
      visibility: visible;

      .block {
        -webkit-box-shadow: 0px 0px 50px #1a1918;
        -moz-box-shadow: 0px 0px 50px #1a1918;
        -o-box-shadow: 0px 0px 50px #1a1918;
        -ms-box-shadow: 0px 0px 50px #1a1918;
        box-shadow: 0px 0px 50px #1a1918;
        width: 400px;
        padding: 3.5em 3em;
        margin: 4em auto;
        color: #fff;
        -webkit-transition: box-shadow 0.5s;
        transition: box-shadow 0.5s;
        overflow: hidden;
        border-radius: 10px;
        -webkit-transform: scale(1.03);
        -moz-transform: scale(1.03);
        -o-transform: scale(1.03);
        -ms-transform: scale(1.03);
        transform: scale(1.03);
        box-sizing: border-box;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        // box-shadow: none;

        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        .login-form {
          p {
            font-size: 0.9em;
            color: #fff;
            margin: 1.8em 0 0.5em;
            letter-spacing: 1px;
          }

          input[type="text"],
          input[type="password"] {
            outline: none;
            font-size: 1em;
            color: #fff;
            padding: 0.6em;
            margin: 0;
            width: 100%;
            border: none;
            -webkit-appearance: none;
            display: block;
            background: #8b5828;
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            -o-border-radius: 2px;
            -ms-border-radius: 2px;
            border-radius: 2px;
          }

          .anim {
            font-size: 0.9em;
            color: #fff;
            cursor: pointer;
            position: relative;
            margin: 2.5em 0;
            display: inline-block;
            letter-spacing: 1px;

            input.checkbox {
              background: #703925;
              cursor: pointer;
              vertical-align: middle;
              margin: 0 3px 3px 4px;
              display: inline-block;
              &:after {
                content: "";
                position: absolute;
                top: 0px;
                left: 0;
                z-index: 1;
                width: 1em;
                height: 1em;
                // border: 1px solid #fff;
                border: 2px solid #d89f14;
                -webkit-transition: 0.4s all;
                -moz-transition: 0.4s all;
                -o-transition: 0.4s all;
                -ms-transition: 0.4s all;
                transition: 0.4s all;
              }
              &:before {
                content: "";
                position: absolute;
                width: 1em;
                height: 1em;
                background: inherit;
              }

              &:checked:after {
                transform: rotate(-45deg);
                height: 0.5rem;
                border-color: #ffd570;
                border-top-color: transparent;
                border-right-color: transparent;
              }
            }
          }
          input[type="submit"] {
            font-size: 1em;
            color: #fff;
            background: #ffc107;
            border: 1px solid #ffc107;
            outline: none;
            cursor: pointer;
            padding: 0.6em 1em;
            -webkit-appearance: none;
            width: 100%;
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            -ms-border-radius: 2px;
            -o-border-radius: 2px;
            border-radius: 2px;

            background: #ffc107ad;
            color: #fff;
          }
          input[type="submit"]:hover {
            color: #fff;
            background: #ffc107;
            transition: 0.5s all;
            -webkit-transition: 0.5s all;
            -moz-transition: 0.5s all;
            -o-transition: 0.5s all;
            -ms-transition: 0.5s all;
          }

          .login-bottom {
            margin-top: 3em;
            text-align: center;

            a {
              font-size: 0.9em;
              letter-spacing: 1px;
              color: #fff;
              -webkit-transition: 0.5s all;
              -moz-transition: 0.5s all;
              -o-transition: 0.5s all;
              -ms-transition: 0.5s all;
              transition: 0.5s all;
              &:hover {
                color: #ffc107;
              }
            }
          }
        }
      }
    }
  }
}
</style>

