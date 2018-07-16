<template>
	<div class="head-container" id="header">
		<div class="container">
			<nav class="navbar navbar-default">
				<div class="navbar-header navbar-left">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<h1>
						<router-link class="navbar-brand" :to="{name:'home'}">
							<img class="logo" src="/static/images/logo.png" alt="Eraop">
						</router-link>
					</h1>
				</div>
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse navbar-right" id="nav">
					<nav class="col-xs-12">
						<ul class="nav navbar-nav">
							<li>
								<router-link class="effect" :to="{name:'home'}" exact>{{$t("message.head.home")}}</router-link>
							</li>
							<li>
								<router-link class="effect" :to="{name:'news'}">{{$t("message.head.blog")}}</router-link>
							</li>
							<li>
								<router-link class="effect" :to="{name:'about'}">{{$t("message.head.about")}}</router-link>
							</li>
							<!-- <li>
								<router-link class="effect" :to="{name:'contactus'}">Contact Us</router-link>
							</li> -->
							<li>
								<router-link class="effect" :to="{name:'login'}">{{$t("message.head.login")}}</router-link>
							</li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle effect" data-toggle="dropdown">
									<i class="fa fa-globe"></i> {{$t("message.language")}}
									<b class="caret"></b>
								</a>
								<ul class="dropdown-menu dropdowm-language">
									<li>
										<a @click="changeLanguage('zh-CN')">简体中文</a>
									</li>
									<li>
										<a @click="changeLanguage('en-US')">English</a>
									</li>
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</nav>
		</div>
	</div>
</template>
<script>
export default {
	methods: {
		changeLanguage(lang) {
			if (this.$store.state.user.language !== lang) {
				this.$store.commit("setLanguage", { language: lang });
				location.reload();
			}
		}
	}
};
</script> 
<style lang="scss" scoped>
.logo {
  height: 50px;
}

.navbar-default .navbar-nav > .open {
  a {
    color: #fff;
  }

  .dropdowm-language {
    border-radius: 0;
    background: #404040b5;
    text-align: center;
    padding: 0;
    border: none;

    li a {
      text-transform: uppercase;
      color: #fff;
      font-size: 12px;
      font-weight: 600;
      padding: 0.8em 0;
      border-bottom: none;
      transition: 0.5s ease-in;
      -webkit-transition: 0.5s ease-in;
      -moz-transition: 0.5s ease-in;
      -o-transition: 0.5s ease-in;
      -ms-transition: 0.5s ease-in;
      cursor: pointer;
    }
    > li > a:hover {
      color: #fff;
      text-decoration: none;
      background-color: #ffc107;
    }
  }
}
</style>

