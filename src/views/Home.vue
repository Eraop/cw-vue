<template>
	<div class="main-container" id="main">
		<cw-header router-name="home"></cw-header>
		<slider-banner></slider-banner>
	</div>
</template>
<script scoped>
import sliderBanner from "./SliderBanner.vue";

export default {
	name: "Home",
	components: {
		sliderBanner
	}
}
</script>