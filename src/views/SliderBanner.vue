<template>
    <div id="myCarousel" class="carousel slide">
        <!-- 轮播（Carousel）指标 -->
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <!-- 轮播（Carousel）项目 -->
        <div class="carousel-inner">
            <div class="item active">
                <img src="/static/images/banner1.jpg" alt="First slide">
                <div class="carousel-caption">
                    <h3>Become Strong And Healthy </h3>
                    <p>TrainHard is the right place to start new life as an athletic, strong and healthy person with a strong will.</p>
                </div>
            </div>
            <div class="item">
                <img src="/static/images/banner2.jpg" alt="Second slide">
                <div class="carousel-caption">
                    <h3>Exceptional Life Fitness </h3>
                    <p>TrainHard is the right place to start new life as an athletic, strong and healthy person with a strong will.</p>
                </div>
            </div>
            <div class="item">
                <img src="/static/images/banner3.jpg" alt="Third slide">
                <div class="carousel-caption">
                    <h3>Build Your Body With Us </h3>
                    <p>TrainHard is the right place to start new life as an athletic, strong and healthy person with a strong will.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SliderBanner"
}
</script>
 <style lang="scss" scoped>
.carousel-inner {
  .item {
    img {
      width: 100%;
    }
  }
}
.carousel-caption {
  position: absolute;
  z-index: 9;
  top: 45%;
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
</style>

