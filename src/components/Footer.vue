<template>
  <div class="foot-container" id="footer">
    <div
      class="copyright"
      :class="{'bg-white text-darkgray':!isHome,'bg-darkgray text-white':isHome}"
    >
      ©{{getYear}}
      <router-link
        class="effect"
        :class="{'text-darkgray':!isHome,'text-white':isHome}"
        :to="{name:'home'}"
        exact
      >Eraop</router-link>
      {{$t('message.foot.copyright')}}
      <br>
      <span>{{$t('message.foot.record')}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isHome: true
    };
  },
  computed: {
    getYear: function() {
      var date = new Date();
      return date.getFullYear();
    }
  },
  watch: {
    $route(to, from) {
      this.isHome = to.name === "home";
    }
  }
};
</script>