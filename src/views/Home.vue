<template>
  <div id="mainHome">
    <slider-banner></slider-banner>
    <!-- About us -->
    <div class="section-container">
      <div class="container">
        <div class="section-container-head">
          <h3 class="section-container-head-title text-black">
            <span class="text-dark">What </span>I Do
            <span class="text-dark">?</span>
          </h3>
        </div>
        <div class="d-flex">
          <div class="d-flex-left">
            <h4>I'm a software engineer.</h4>
            <p class="details">Faithfulness, honesty and principles, and always do things consistently and pursue better things.</p>
            <ul class="d-flex-left-list">
              <li>
                <div class="col-md-4 d-flex-left-list-img">
                  <img src="/static/images/focus.jpg" alt="" class="img-responsive" />
                </div>
                <div class="col-md-8 in-block">
                  <h5>FOCUS</h5>
                  <p> Java, .Net, Database, Frontend.</p>
                </div>
                <div class="clearfix"> </div>
              </li>
              <li>
                <div class="col-md-4 d-flex-left-list-img">
                  <img src="/static/images/study.jpg" alt="" class="img-responsive" />
                </div>
                <div class="col-md-8 in-block">
                  <h5>STUDY</h5>
                  <p>Study hard, avoid problems, and be willing to learn from others.</p>
                </div>
                <div class="clearfix"> </div>
              </li>
              <li>
                <div class="col-md-4 d-flex-left-list-img">
                  <img src="/static/images/teamwork.jpg" alt="" class="img-responsive" />
                </div>
                <div class="col-md-8 in-block">
                  <h5>TEAM WORK</h5>
                  <p>I like team work, strong team spirit and positive working attitude.</p>
                </div>
                <div class="clearfix"> </div>
              </li>
            </ul>
          </div>
          <div class="d-flex-right">

          </div>
        </div>

      </div>
    </div>
    <!-- //About us -->
    <div class="section-container background-fixed point-section">
      <div class="container">
        <div class="section-container-head">
          <h3 class="section-container-head-title text-black">
            <span>My</span> Projects
          </h3>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="point-grid">
              <h5>2018/05 - 2018/06</h5>
              <h4>Eraop Personal Website</h4>
              <h6>Vuejs + Vuex + Axios + ElementUI + Scss + Webpack</h6>
              <h6>Nodejs + Express + MySQL + Redis + PM2</h6>
              <h6>Json Web Token</h6>
            </div>
          </div>
          <div class="col-md-4">
            <div class="point-grid">
              <h5>2017/12 - 2018/05</h5>
              <h4>Java Web Framework</h4>
              <h6>Java + SpringBoot + Mybatis + MySQL + Tomcat</h6>
              <h6>Thymeleaf + Layer + Bootstrap + jQuery + Scss</h6>
              <h6>Nginx + Keepalived + Redis</h6>
            </div>
          </div>
          <div class="col-md-4">
            <div class="point-grid">
              <h5>2017/01 - 2018/06</h5>
              <h4>YQ System</h4>
              <h6>C# + ASP.NET MVC + Entity Framework</h6>
              <h6>jQuery + Bootstrap + Scss + Knockout</h6>
              <h6>MySQL/Oracle + Redis + IIS</h6>
            </div>
          </div>
          <div class="clearfix"></div>
          <div class="col-md-12 text-center more-link">
            <a>READ MORE</a>
          </div>
        </div>
      </div>
    </div>

    <div class="section-container team-section">
      <div class="container">
        <div class="section-container-head">
          <h3 class="section-container-head-title text-white">Contact
            <span>Me</span>
          </h3>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <div class="team-grid pull-left">
              <!-- <img src="/static/images/1.png" class="img-circle"> -->
              <i class="fa fa-qq fa-fw link-img"></i>
              <h3>QQ</h3>
              <p>493214262</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-4">
            <div class="team-grid pull-left">
              <!-- <img src="/static/images/3.png" class="img-circle"> -->
              <i class="fa fa-envelope fa-fw link-img"></i>
              <h3>Email</h3>
              <p>493214262@qq.com</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-4">
            <div class="team-grid pull-left">
              <!-- <img src="/static/images/2.png" class="img-circle"> -->
              <i class="fa fa-weibo fa-fw link-img"></i>
              <h3>Weibo</h3>
              <p>回忆不曾断点</p>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>

  </div>
</template>
<script scoped>
import sliderBanner from "../components/SliderBanner.vue";

export default {
  name: "Home",
  components: {
    sliderBanner
  }
};
</script>
<style lang="scss" scoped>
.section-container {
  padding: 5em 0;
  .section-container-head {
    margin-bottom: 5em;

    &::after {
      border-top: 2px solid #ffc107;
      display: block;
      width: 81px;
      content: "";
      margin: 8px auto 0;
    }

    .section-container-head-title {
      font-size: 3em;
      // color: #262c38;
      letter-spacing: 1px;
      position: relative;
      font-weight: 600;
      text-align: center;

      span {
        // color: #545151;
        font-weight: 200;
      }
    }
  }
  .d-flex-left {
    padding-right: 30px;
    flex: 1;
    -ms-flex: 1;

    h4 {
      font-size: 28px;
      text-transform: uppercase;
      margin-bottom: 20px;
      color: #ffc107;
      font-weight: 600;
    }
    .detail {
      font-size: 14px;
      color: #777;
    }
    .d-flex-left-list {
      padding: 0;
    }

    .d-flex-left-list li {
      margin: 20px 0px;
      display: block;
      .d-flex-left-list-img {
        padding-left: 0;
      }
      .in-block h5 {
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 10px;
        letter-spacing: 1px;
        color: #000000;
      }
    }
  }
  .d-flex-right {
    background: url(/static/images/me.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    flex: 1;
    -ms-flex: 1;
  }
  .point-grid {
    background: rgba(82, 82, 82, 0.78);
    padding: 4em 0em;
    transition: 0.5s all;
    text-align: center;

    h5 {
      font-style: italic;
      color: #ffc107;
      font-size: 16px;
      letter-spacing: 1px;
    }
    h6 {
      font-style: italic;
      color: #fff;
      font-size: 12px;
      letter-spacing: 1px;
    }
    h4 {
      color: #fff;
      font-size: 20px;
      line-height: 1.8em;
      letter-spacing: 1px;
      margin: 0.5em 0;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
  .team-grid {
    text-align: center;
    padding: 40px 10px;
    // background: #000;
    width: 100%;
    color: #c7c7c7;
    h3 {
      text-transform: uppercase;
      font-size: 19px;
      font-weight: 600;
      margin: 20px 0 0;
    }
    p {
      font-size: 14px;
      margin: 10px 0;
      line-height: 24px;
    }
    .link-img {
      font-size: 80px;
    }
  }
}
.point-section {
  background: url(/static/images/projecs.jpg) no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  padding: 5em 0;
}
.team-section {
  background-color: #373d41;
}
.more-link {
  padding-top: 2em;
  a {
    background: transparent;
    padding: 10px 50px;
    border-radius: 20px;
    color: #716f73;
    text-decoration: none;
    cursor: pointer;
  }
  a:hover {
    background: #716f73;
    padding: 10px 50px;
    border-radius: 20px;
    color: #ffc107;
    text-decoration: none;
    cursor: pointer;
  }
}
</style>

<style lang="scss" scoped>
/*--responsive--*/
@media (max-width: 1280px) {
  .section-container .section-container-head .section-container-head-title {
    font-size: 2.7em;
  }
}
@media (max-width: 1080px) {
  .section-container .section-container-head .section-container-head-title {
    font-size: 2.7em;
  }
  .d-flex-left h4 {
    font-size: 25px;
  }
}
@media (max-width: 991px) {
  .d-flex {
    flex-direction: column-reverse;

    .in-block {
      display: inline-block;
      float: left;
      width: 60%;
    }

    .d-flex-left .d-flex-left-list li .d-flex-left-list-img {
      padding-left: 0;
      float: left;
      width: 30%;
    }

    .d-flex-right {
      height: 300px;
      margin-bottom: 30px;
    }
  }
}
@media (max-width: 767px) {
  .section-container .section-container-head .section-container-head-title {
    font-size: 2.5em;
  }
}
@media (max-width: 568px) {
  .section-container .section-container-head .section-container-head-title {
    font-size: 2.5em;
  }
}
@media (max-width: 480px) {
  .section-container .section-container-head .section-container-head-title {
    font-size: 2.2em;
  }
  .d-flex-left {
    h4 {
      font-size: 23px;
    }

    .in-block {
      width: 53%;
    }
    .d-flex-left-list li .d-flex-left-list-img {
      width: 47%;
    }
  }
}
@media (max-width: 414px) {
  .d-flex .d-flex-left {
    padding-right: 0;
    h4 {
      font-size: 19px;
    }

    .in-block {
      width: 100%;
      margin-top: 1em;
    }
    .d-flex-left-list li .d-flex-left-list-img {
      width: 100%;
      padding: 0 1em;
    }
  }
}
@media (max-width: 384px) {
  .section-container .section-container-head .section-container-head-title {
    font-size: 2em;
  }
}
@media (max-width: 320px) {
  .section-container .section-container-head .section-container-head-title {
    font-size: 1.8em;
    line-height: 1.5em;
  }

  .d-flex .d-flex-left {
    .in-block {
      padding: 0;
    }
    .d-flex-left-list li .d-flex-left-list-img {
      width: 100%;
      padding: 0 1em;
    }
  }
}
/*--//responsive--*/
</style>


