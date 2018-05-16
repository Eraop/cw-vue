<template>
	<div class="main-container" id="main">
		<cw-header router-name="Home"></cw-header>
		<slider-banner></slider-banner>
	</div>
</template>
<script>
import sliderBanner from "./SliderBanner.vue";
 
export default {
	name: "Home",
	components: {
		sliderBanner
	}
}
</script>