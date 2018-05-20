<template>
  <div id="mainAbout">
    <div class="main-banner"></div>
    <div class="inner-padding">
      <div class="container">
        <div class="section-container-head">
          <h3>About
            <span>Us</span>
          </h3>
        </div>
        <div class="section-container-content text-center">
          <h3 class="text-warning bold margin-v-15">Who We Are</h3>
          <p class="bold">Masagni dolores eoquie int Basmodi temporant, ut laboreas dolore magnam aliquam kuytase uaeraquis autem vel eum iure reprehend.Unicmquam eius, Basmodi temurer sehsMunim.Masagni dolores eoquie int Basmodi temporant, ut laboreas dolore magnam aliquam kuytase uaeraquis autem vel eum iure reprehend.</p>
        </div>
        <div class="clearfix"> </div>
      </div>
    </div>
  </div>
</template>
<script scoped>
export default {
  name: "About"
}
</script>
<style lang="scss" scoped>
.main-banner {
  background: url(/static/images/banner_5.jpg) no-repeat 0px 0px;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  min-height: 350px;
}
.inner-padding   {
  padding: 10em 0;

  .section-container-head {
    margin-bottom: 5em;
    h3 {
      font-size: 3em;
      color: #262c38;
      letter-spacing: 1px;
      position: relative;
      font-weight: 600;
      text-align: center;

      &::after {
        border-top: 2px solid #ffc107;
        display: block;
        width: 81px;
        content: "";
        margin: 8px auto 0;
      }
      span {
        color: #545151;
        font-weight: 200;
      }
    }
  }
}
</style>
