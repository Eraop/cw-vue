<template>
  <div class="foot-container" id="footer">
    <p class="copyright" :class="{'bg-white text-darkgray':!isHome,'bg-darkgray text-white':isHome}" >©2018
      <router-link class="effect" :class="{'text-darkgray':!isHome,'text-white':isHome}" :to="{name:'home'}" exact>Eraop</router-link> All Rights Reserved | Design by Eraop</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isHome: true
    };
  },
  watch: {
    $route(to, from) {
      this.isHome = to.name === "home";
    }
  }
};
</script>