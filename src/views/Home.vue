<template>
    <div class="main_section_agile" id="home">
		<div class="agileits_w3layouts_banner_nav">
			<div class="container">
			<nav class="navbar navbar-default">
				<div class="navbar-header navbar-left">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<h1><a class="navbar-brand" href="index.html">ERAOP</a></h1>

				</div>
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
					<nav class="link-effect-2" id="link-effect-2">
						<ul class="nav navbar-nav">
							<li class="active"><a href="index.html" class="effect-3">Home</a></li>
							<li><router-link class="effect-3" to="/helloworld">About</router-link></li>
							<li><a href="mail.html" class="effect-3">Mail Us</a></li>
						</ul>
					</nav>
				</div>
			</nav>
			<div class="clearfix"> </div>
			</div>
		</div>
	</div>
</template>
<script>
</script>
<style lang="css" scoped>
.agileits_w3layouts_banner_nav {
  margin: 0 auto;
  width: 100%;
  position: absolute;
  z-index: 99;
  text-align: center;
  padding: 0em;
  background: rgba(0, 0, 0, 0.52);
}
/*-- nav --*/
.navbar-default {
  background: none;
  border: none;
}

.navbar {
  margin-bottom: 0;
}

.navbar-collapse {
  padding: 0;
}

.navbar-right {
  margin-right: 0;
}

.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  color: #ffc107;
  background: none;
}

.navbar-default .navbar-nav > .active > a:before {
  background: #ffc107;
  transform: translateX(0);
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  -o-transform: translateX(0);
  -ms-transform: translateX(0);
}

.navbar-default .navbar-nav > li > a {
  font-weight: 400;
  letter-spacing: 2px;
}

.navbar-nav > li > a {
  margin: 0 1.5em;
  padding: 1.6em 0em;
  text-transform: uppercase;
}

.navbar-default .navbar-nav > li > a:hover {
  color: #ffc107;
}

.navbar-default .navbar-nav > li > a:focus {
  color: #ffc107;
  outline: none;
}

nav.navbar.navbar-default {
  background: none;
  padding: 1em 0 0em 0;
}

.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
  color: #262c38;
  background: none;
}

.navbar-default .navbar-nav > li > a {
  color: #fff;
}

.navbar-default .navbar-nav > .active.open > a:focus {
  background: transparent;
  color: #fff;
}

a.navbar-brand i {
  color: #ffc107;
}

.navbar-header.navbar-left {
  margin-top: 8px;
}

a.navbar-brand {
  padding: 0;
  font-size: 1.2em;
  font-weight: 600;
  line-height: 37px;
  letter-spacing: 1px;
  font-family: "Raleway", sans-serif;
}

.navbar-brand span {
  color: #fff;
  font-weight: 800;
  padding: 0px 10px;
  border: 3px solid #ffc107;
  background: #ffc107;
}

.navbar-default .navbar-brand {
  color: #ffc107;
  font-family: "Raleway", sans-serif;
}

.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
  color: #ffc107;
}

.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
  color: #ffc107;
  background: none;
}

.agile_short_dropdown {
  border-radius: 0;
  background: rgba(0, 0, 0, 0.71);
  text-align: center;
  padding: 0;
  border: none;
}

.agile_short_dropdown li a {
  text-transform: uppercase;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding: 0.8em 0;
  border-bottom: none;
}

.agile_short_dropdown > li > a:hover {
  color: #fff;
  text-decoration: none;
  background-color: #ffc107;
}

.effect-3 {
  overflow: hidden;
}

.effect-3:before {
  left: -1px;
  bottom: 0;
  width: 100%;
  height: 4px;
  background: #ffc107;
  content: "";
  position: absolute;
  transition: transform 0.5s ease;
  transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
  -moz-transform: translateX(-100%);
  -o-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
}

.effect-3:hover:before {
  transform: translateX(0);
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  -o-transform: translateX(0);
  -ms-transform: translateX(0);
}
</style>
