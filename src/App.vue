<template>
  <div class="main-container" id="app">
    <cw-header v-if="!this.$route.meta.hide"></cw-header>
    <div class="body-container">
      <router-view/>
    </div>
    <cw-footer v-if="!this.$route.meta.hide"></cw-footer>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style lang="scss">
@import "./assets/css/style.scss"; 
</style>
