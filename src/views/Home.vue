<template>
	<div class="main-container" id="home">
		<div class="head-container">
			<nav class="navbar navbar-default">
				<div class="navbar-header navbar-left">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<h1>
						<a class="navbar-brand" href="index.html">ERAOP</a>
					</h1>

				</div>
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
					<nav class="link-effect-2" id="link-effect-2">
						<ul class="nav navbar-nav">
							<li class="active">
								<a href="index.html" class="effect">Home</a>
							</li>
							<li>
								<router-link class="effect" to="/about">About</router-link>
							</li>
							<li>
								<a href="mail.html" class="effect">Mail Us</a>
							</li>
						</ul>
					</nav>
				</div>
			</nav>
			<div class="clearfix"> </div>
		</div>
		<router-view class="body-container"></router-view>
	</div>
</template>
<script>
export default {
	name: "Home"
}
</script>
<style lang="scss">
@import "../assets/css/style.scss";
</style>
