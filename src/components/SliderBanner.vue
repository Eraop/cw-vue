<template>
  <div id="homeCarousel" class="carousel slide carousel-fade" data-ride="carousel">
    <!-- 轮播（Carousel）指标 -->
    <!-- <ol class="carousel-indicators">
      <li data-target="#homeCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#homeCarousel" data-slide-to="1"></li>
      <li data-target="#homeCarousel" data-slide-to="2"></li>
      <li data-target="#homeCarousel" data-slide-to="3"></li>
    </ol> -->
    <!-- 轮播（Carousel）项目 -->
    <div class="carousel-inner">
      <div class="item" v-for="(item,index) in list" :key="index" :class="{active:index===0}">
        <img :src="item.imageUrl" :alt="item.imageTitle">
        <div class="carousel-caption">
          <h3 v-text="item.imageTitle"></h3>
          <p v-text="item.imageDescription"></p>
        </div>
      </div>
    </div>
    <!-- 轮播（Carousel）导航 -->
    <!-- <a class="left carousel-control" href="#homeCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#homeCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a> -->
  </div>
</template>
<script>
var list = [
  // {
  //   imageUrl: "/static/images/banner_2.jpg",
  //   imageTitle: "Exceptional Life Fitness",
  //   imageDescription:
  //     "TrainHard is the right place to start new life as an athletic, strong and healthy person with a strong will."
  // },
  // {
  //   imageUrl: "/static/images/banner_1.jpg",
  //   imageTitle: "Become Strong And Healthy",
  //   imageDescription:
  //     "TrainHard is the right place to start new life as an athletic, strong and healthy person with a strong will."
  // },
  // {
  //   imageUrl: "/static/images/banner_4.jpg",
  //   imageTitle: "Exceptional Life Fitness",
  //   imageDescription:
  //     "TrainHard is the right place to start new life as an athletic, strong and healthy person with a strong will."
  // },
  // {
  //   imageUrl: "/static/images/banner_5.jpg",
  //   imageTitle: "Build Your Body With Us",
  //   imageDescription:
  //     "TrainHard is the right place to start new life as an athletic, strong and healthy person with a strong will."
  // }
    {
    imageUrl: "/static/images/default.jpg",
    imageTitle: "",
    imageDescription:
      ""
  }
];
export default {
  name: "SliderBanner",
  data() {
    return {
      list: list
    };
  }
};
</script>
 <style lang="scss" scoped>
.carousel-inner .item img {
  width: 100%;
  height: 600px;
}

.carousel-caption {
  position: absolute;
  z-index: 9;
  top: 50%;
  left: 0%;
  text-align: center;
  width: 100%;
  h3 {
    font-size: 4em;
    letter-spacing: 3px;
    font-weight: 600;
    text-transform: uppercase;
    text-shadow: 2px 2px 2px rgba(16, 16, 16, 0.57);
    color: #fff;
  }
  p {
    color: #fff;
    text-align: center;
    line-height: 1.8em;
    margin: 1em auto;
    width: 40%;
    font-size: 18px;
  }
}
a.carousel-control {
  &:hover span {
    display: inline;
  }
  span {
    display: none;
  }
}
.carousel-fade .carousel-inner {
  .item {
    opacity: 0.4;
    -webkit-transition-property: opacity;
    -moz-transition-property: opacity;
    -ms-transition-property: opacity;
    -o-transition-property: opacity;
    transition-property: opacity;
  }

  .active,
  .next.left,
  .prev.right {
    opacity: 1;
  }

  .active.left,
  .active.right {
    left: 0;
    opacity: 0;
  }
}
</style>
<style lang="scss" scoped>
/*--responsive--*/
@media (max-width: 1440px) {
  .carousel-caption p {
    width: 46%;
  }
}
@media (max-width: 1280px) {
  .carousel-caption {
    top: 40%;

    h3 {
      font-size: 4.5em;
      letter-spacing: 3px;
    }
    p {
      width: 50%;
    }
  }
  .carousel-inner .item img {
    height: 650px;
  }
}
@media (max-width: 1080px) {
  .carousel-caption {
    top: 41%;

    h3 {
      font-size: 3.8em;
      letter-spacing: 2px;
    }
    p {
      letter-spacing: 4px;
      margin: 1em auto;
      font-size: 1em;
      width: 64%;
    }
  }
  .carousel-inner .item img {
    height: 526px;
  }
}
@media (max-width: 1050px) {
  .carousel-caption {
    top: 41%;

    h3 {
      font-size: 3.8em;
      letter-spacing: 2px;
    }
    p {
      letter-spacing: 4px;
      margin: 1em auto;
      font-size: 1em;
      width: 64%;
    }
  }
}
@media (max-width: 1024px) {
  .carousel-caption {
    top: 39%;

    h3 {
      font-size: 3.5em;
    }
  }
}
@media (max-width: 991px) {
  .carousel-caption {
    top: 37%;
    h3 {
      font-size: 3em;
      letter-spacing: 2px;
    }
    p {
      width: 90%;
    }
  }
}
@media (max-width: 900px) {
  .carousel-caption {
    top: 41%;
  }
}
@media (max-width: 800px) {
  .carousel-caption {
    top: 38%;
  }
}
@media (max-width: 767px) {
  .carousel-caption {
    top: 32%;

    h3 {
      font-size: 3em;
      letter-spacing: 2px;
    }
  }
}
@media (max-width: 667px) {
  .carousel-caption {
    top: 38%;

    h3 {
      font-size: 2.8em;
      letter-spacing: 1px;
    }
    p {
      letter-spacing: 3px;
      margin: 1em 0 0em auto;
      font-size: 1em;
    }
  }
  .carousel-inner .item img {
    height: 428px;
  }
}
@media (max-width: 640px) {
  .carousel-caption {
    top: 38%;
  }
}
@media (max-width: 600px) {
  .carousel-caption {
    h3 {
      font-size: 2.5em;
      letter-spacing: 1px;
    }
  }
}
@media (max-width: 568px) {
  .carousel-caption {
    top: 38%;
    p {
      letter-spacing: 2px;
      margin: 1em auto;
      font-size: 1em;
    }
  }
}
@media (max-width: 480px) {
  .carousel-caption {
    top: 38%;
    h3 {
      font-size: 2.2em;
      letter-spacing: 1px;
    }
    p {
      letter-spacing: 2px;
      margin: 0.3em 0 0em auto;
      font-size: 0.9em;
    }
  }
  .carousel-inner .item img {
    height: 320px;
  }
}
@media (max-width: 440px) {
  .carousel-inner .item img {
    height: 279px;
  }
}
@media (max-width: 414px) {
  .carousel-caption {
    top: 40%;
    h3 {
      font-size: 1.5em;
      letter-spacing: 1px;
    }
  }
}
@media (max-width: 384px) {
  .carousel-caption {
    top: 39%;
  }
}
@media (max-width: 320px) {
  .carousel-caption {
    top: 25%;
  }
  .carousel-inner .item img {
    height: 243px;
  }
}
/*--//responsive--*/
</style>

