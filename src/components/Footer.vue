<template>
	<div class="foot-container" id="footer">
		<p class="copyright">©2018
			<router-link class="effect" :to="{name:'home'}" exact>Eraop</router-link> All Rights Reserved | Design by Eraop</p>
	</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["routerName"]
};
</script>