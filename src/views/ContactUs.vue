<template>
    <div id="mainContactUs">
        <div class="main-banner"></div>
        <div class="inner-padding">
            <div class="container">
                <div class="section-container-head">
                    <h3>Mail
                        <span>Us</span>
                    </h3>
                </div>
                <div class="section-container-content text-center">
                    <div class="agile_wthree_inner_grids">
                        <div class="contact-form agile_inner_grids">
                            <form action="#" method="post">
                                <div class="fields-grid">
                                    <div class="form-group agile-form-group-top">
                                        <input type="text" name="Full Name" required="">
                                        <label>Full Name</label>
                                        <span></span>
                                    </div>
                                    <div class="form-group agile-form-group-top">
                                        <input type="text" name="Phone" required="">
                                        <label>Phone</label>
                                        <span></span>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" name="Email" required="">
                                        <label>Email</label>
                                        <span></span>
                                    </div>
                                    <div class="clearfix"> </div>
                                </div>
                                <div class="form-group textarea-grid">
                                    <textarea name="Message" required=""></textarea>
                                    <label>Message</label>
                                    <span></span>
                                </div>
                                <button class="btn" type="submit" @click="sendEmail">SEND</button>
                            </form>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
</template>
<script scoped>
export default {
    name: "ContactUs",
    methods: {
        sendEmail() {
            // var json = this.$http.get("https://baidu.com");
        }
    }
}
</script>
<style lang="scss" scoped>
.main-banner {
  background: url(/static/images/banner_3.jpg) no-repeat 0px 0px;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  min-height: 350px;
}
.inner-padding {
  padding: 10em 0;
  .section-container-head {
    margin-bottom: 5em;
    h3 {
      font-size: 3em;
      color: #262c38;
      letter-spacing: 1px;
      position: relative;
      font-weight: 600;
      text-align: center;

      &::after {
        border-top: 2px solid #ffc107;
        display: block;
        width: 81px;
        content: "";
        margin: 8px auto 0;
      }
      span {
        color: #545151;
        font-weight: 200;
      }
    }
  }
  .contact-form {
    .btn {
      outline: none;
      color: #ffffff;
      padding: 0.8em 3em;
      font-size: 1.1em;
      margin: 1em 0 0 0;
      -webkit-appearance: none;
      background: #ffc107;
      border: none;
      -webkit-transition: 0.5s all;
      -moz-transition: 0.5s all;
      -o-transition: 0.5s all;
      -ms-transition: 0.5s all;
      transition: 0.5s all;
      &:hover {
        background: #111;
      }
    }
    input,
    textarea {
      font-size: 1em;
      color: #26272b;
      padding: 1em 1em;
      border: 0;
      width: 100%;
      border-bottom: 1px solid #b9b9b9;
      background: none;
      -webkit-appearance: none;
      outline: none;
      font-family: "Open Sans", sans-serif;

      &:focus ~ label,
      &:valid ~ label {
        color: #ffc107;
      }
    }
  }
  .form-group {
    margin: 2em 0 2em 0em;
    position: relative;
    label {
      padding: 0.5em 0em;
      position: absolute;
      top: -1.3em;
      color: #2c2c2d;
      left: 0;
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      transition: all 0.3s;
      pointer-events: none;
      font-weight: 600;
      font-size: 1em;
      display: block;
      line-height: 1em;
      letter-spacing: 2px;
    }
    span {
      display: block;
      width: 0;
      height: 2px;
      background: #ffc107;
      position: absolute;
      bottom: 0;
      left: 0;
      -webkit-transition: all 0.125s;
      -moz-transition: all 0.125s;
      transition: all 0.125s;
    }
  }
  .textarea-grid {
    float: none !important;
    width: 100% !important;
    margin-left: 0 !important;
  }
}
</style>

