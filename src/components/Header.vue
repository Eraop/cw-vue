<template>
	<div class="head-container" id="header">
		<div class="container">
			<nav class="navbar navbar-default">
				<div class="navbar-header navbar-left">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<h1>
						<a class="navbar-brand" href="index.html">Eraop</a>
					</h1>
				</div>
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
					<nav class="col-xs-12">
						<ul class="nav navbar-nav">
							<li :class="routerName=='home'?'active':''">
								<router-link class="effect" to="/">Home</router-link>
							</li>
							<li :class="routerName=='about'?'active':''">
								<router-link class="effect" to="/about">About</router-link>
							</li>
							<li :class="routerName=='contactus'?'active':''">
								<router-link class="effect" to="/contactus">Contact Us</router-link>
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
	data() {
		return {
		}
	},
	props: ["routerName"]
}
</script>
<style lang="scss">
@import "../assets/css/style.scss";
</style>
