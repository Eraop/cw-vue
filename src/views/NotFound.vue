<template>
    <div id="notFound">
        <div class="container text-center">
            <h1 class="text-warning">404</h1>
            <p class="margin-v-15">
                <strong>(╥╯^╰╥) 页面被人偷走......</strong>
            </p>
            <div id="suggestions">
                <router-link :to="{name:'home'}">Eraop</router-link> &mdash;
                <span>@Eraop</span>
            </div>
            <router-link :to="{name:'home'}">
                <img class="logo" src="/static/images/logo.png" alt="Eraop">
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
  padding-top: 10%;

  h1 {
    font-size: 10em;
  }
  .logo {
    margin: 15px;
    height: 80px;
  }
}
</style>
