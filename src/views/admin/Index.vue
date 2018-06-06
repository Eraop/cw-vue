<template>

  <div class="wrapper">
    <div class="sidebar" data-color="orange">
      <div class="logo">
        <a href="#" class="logo-text">
          Creative Tim
        </a>
      </div>
      <div class="logo logo-mini">
        <a href="#" class="logo-text">
          Ct
        </a>
      </div>
      <div class="sidebar-wrapper ps-container ps-theme-default" data-ps-id="71ee49ef-518e-ac64-3fe1-e6eb02f8ff49">
        <div class="user">
          <div class="photo">
            <img src="picture/default-avatar.png">
          </div>
          <div class="info">
            <a data-toggle="collapse" href="#collapseExample" class="collapsed">
              Tania Andrew
              <b class="caret"></b>
            </a>
            <div class="collapse" id="collapseExample">
              <ul class="nav">
                <li>
                  <a href="#">My Profile</a>
                </li>
                <li>
                  <a href="#">Edit Profile</a>
                </li>
                <li>
                  <a href="#">Settings</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <ul class="nav">
          <li class="active">
            <a>
              <i class="pe-7s-graph"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a data-toggle="collapse" href="#componentsExamples">
              <i class="pe-7s-plugin"></i>
              <span>Components
                <b class="caret"></b>
              </span>
            </a>
            <div class="collapse" id="componentsExamples">
              <ul class="nav">
                <li>
                  <a>Buttons</a>
                </li>
                <li>
                  <a>Grid System</a>
                </li>
                <li>
                  <a>Icons</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 3px;">
          <div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div>
        </div>
        <div class="ps-scrollbar-y-rail" style="top: 0px; right: 3px;">
          <div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 0px;"></div>
        </div>
      </div>
      <div class="sidebar-background" style="background-image: url(../assets/img/full-screen-image-3.jpg) "></div>
    </div>

    <div class="main-panel ps-container ps-theme-default ps-active-y" data-ps-id="298d7e7e-18ae-9bee-1e39-5b82c65d7415">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-minimize">
            <button id="minimizeSidebar" class="btn btn-warning btn-fill btn-round btn-icon">
              <i class="fa fa-ellipsis-v visible-on-sidebar-regular"></i>
              <i class="fa fa-navicon visible-on-sidebar-mini"></i>
            </button>
          </div>
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Dashboard PRO</a>
          </div>
          <div class="collapse navbar-collapse">

            <form class="navbar-form navbar-left navbar-search-form" role="search">
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-search"></i>
                </span>
                <input value="" class="form-control" placeholder="Search..." type="text">
              </div>
            </form>

            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="charts.html">
                  <i class="fa fa-line-chart"></i>
                  <span>Stats</span>
                </a>
              </li>

              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="fa fa-gavel"></i>
                  <p class="hidden-md hidden-lg">
                    Actions
                    <b class="caret"></b>
                  </p>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="#">Create New Post</a>
                  </li>
                  <li>
                    <a href="#">Manage Something</a>
                  </li>
                  <li>
                    <a href="#">Do Nothing</a>
                  </li>
                  <li>
                    <a href="#">Submit to live</a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">Another Action</a>
                  </li>
                </ul>
              </li>

              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="fa fa-bell-o"></i>
                  <span class="notification">5</span>
                  <p class="hidden-md hidden-lg">
                    Notifications
                    <b class="caret"></b>
                  </p>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="#">Notification 1</a>
                  </li>
                  <li>
                    <a href="#">Notification 2</a>
                  </li>
                  <li>
                    <a href="#">Notification 3</a>
                  </li>
                  <li>
                    <a href="#">Notification 4</a>
                  </li>
                  <li>
                    <a href="#">Another notification</a>
                  </li>
                </ul>
              </li>

              <li class="dropdown dropdown-with-icons">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="fa fa-list"></i>
                  <p class="hidden-md hidden-lg">
                    More
                    <b class="caret"></b>
                  </p>
                </a>
                <ul class="dropdown-menu dropdown-with-icons">
                  <li>
                    <a href="#">
                      <i class="pe-7s-mail"></i> Messages
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="pe-7s-help1"></i> Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="pe-7s-tools"></i> Settings
                    </a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">
                      <i class="pe-7s-lock"></i> Lock Screen
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-danger">
                      <i class="pe-7s-close-circle"></i>
                      Log out
                    </a>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <div class="content">
        <div class="container-fluid">

        </div>
      </div>

      <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 3px;">
        <div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div>
      </div>
      <div class="ps-scrollbar-y-rail" style="top: 0px; height: 943px; right: 3px;">
        <div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 533px;"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created: function() {
    return this.$http.get("/api/admin/menu").then(res => {
      if (res.status == 200) {
        if (res.data !== "") {
        } else {
          this.$router.push({ name: "notfound" });
        }
      }
    });
  }
};
</script>

<style lang="scss">
@import "../../assets/css/admin.scss";
</style>

<style>
@import "../../../static/css/pe-icon-7-stroke.css";
</style>
