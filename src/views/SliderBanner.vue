<template>
    <div id="homeCarousel" class="carousel slide" data-ride="carousel">
        <!-- 轮播（Carousel）指标 -->
        <ol class="carousel-indicators">
            <li data-target="#homeCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#homeCarousel" data-slide-to="1"></li>
            <li data-target="#homeCarousel" data-slide-to="2"></li>
            <li data-target="#homeCarousel" data-slide-to="3"></li>
            <li data-target="#homeCarousel" data-slide-to="4"></li>
        </ol>
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
        <a class="left carousel-control" href="#homeCarousel" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#homeCarousel" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>
<script>
var list = [{
    imageUrl: 'static/images/banner_2.jpg',
    imageTitle: 'Exceptional Life Fitness',
    imageDescription: 'TrainHard is the right place to start new life as an athletic, strong and healthy person with a strong will.'
}, {
    imageUrl: 'static/images/banner_1.jpg',
    imageTitle: 'Become Strong And Healthy',
    imageDescription: 'TrainHard is the right place to start new life as an athletic, strong and healthy person with a strong will.'
}, {
    imageUrl: 'static/images/banner_3.jpg',
    imageTitle: 'Build Your Body With Us',
    imageDescription: 'TrainHard is the right place to start new life as an athletic, strong and healthy person with a strong will.'
}, {
    imageUrl: 'static/images/banner_4.jpg',
    imageTitle: 'Exceptional Life Fitness',
    imageDescription: 'TrainHard is the right place to start new life as an athletic, strong and healthy person with a strong will.'
}, {
    imageUrl: 'static/images/banner_5.jpg',
    imageTitle: 'Build Your Body With Us',
    imageDescription: 'TrainHard is the right place to start new life as an athletic, strong and healthy person with a strong will.'
}]
export default {
    name: "SliderBanner",
    data() {
        return {
            list: list
        }
    }
}
</script>
 <style lang="scss" scoped>
.carousel-inner {
  .item {
    img {
      width: 100%;
      height: 800px;
    }
  }
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
</style>

