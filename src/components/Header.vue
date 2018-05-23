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
								<router-link class="effect" :to="{name:'home'}" exact>Home</router-link>
							</li>
							<li>
								<router-link class="effect" :to="{name:'about'}">About</router-link>
							</li>
							<li>
								<router-link class="effect" :to="{name:'news'}">News</router-link>
							</li>
							<li>
								<router-link class="effect" :to="{name:'contactus'}">Contact Us</router-link>
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
}
</script>
<style lang="scss">
@import "../assets/css/style.scss";
</style>
<style lang="scss" scoped>
.logo {
  height: 50px;
}
</style>

