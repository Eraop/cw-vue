<template>
	<div class="main-container" id="main">
		<cw-header router-name="home"></cw-header>
		<slider-banner></slider-banner>
		<!-- About us -->
		<div class="section-container">
			<div class="section-container-head">
				<h3 class="section-container-head-title">What We
					<span>Do?</span>
				</h3>
			</div>
			<div class="container">
				<div class="d-flex">
					<div class="d-flex-left">
						<h4>CrossFit and TrainHard GYM </h4>
						<p class="details">Nullam pulvinar vulputate aliquam. Pellentesque venenatis ut mi ac porta. Praesent interdum nibh libero, id malesuada libero aliquet quis. Donec at odio nibh.</p>
						<ul class="d-flex-left-list">
							<li>
								<div class="col-md-4 d-flex-left-list-img">
									<img src="/static/images/1.jpg" alt="" class="img-responsive" />
								</div>
								<div class="col-md-8 in-block">
									<h5>ELEMENTS</h5>
									<p>Suspendisse maximus leo vel facilisis porta. Aliquam posuere mollis auctor. Nunc eget massa eleifend, finibus.</p>
								</div>
								<div class="clearfix"> </div>
							</li>
							<li>
								<div class="col-md-4 d-flex-left-list-img">
									<img src="/static/images/2.jpg" alt="" class="img-responsive" />
								</div>
								<div class="col-md-8 in-block">
									<h5>BOOT CAMP</h5>
									<p>Suspendisse maximus leo vel facilisis porta. Aliquam posuere mollis auctor. Nunc eget massa eleifend, finibus.</p>
								</div>
								<div class="clearfix"> </div>
							</li>
							<li>
								<div class="col-md-4 d-flex-left-list-img">
									<img src="/static/images/3.jpg" alt="" class="img-responsive" />
								</div>
								<div class="col-md-8 in-block">
									<h5>CROSSFIT</h5>
									<p>Suspendisse maximus leo vel facilisis porta. Aliquam posuere mollis auctor. Nunc eget massa eleifend, finibus.</p>
								</div>
								<div class="clearfix"> </div>
							</li>
						</ul>
					</div>
					<div class="d-flex-right">

					</div>
				</div>

			</div>
		</div>
		<!-- //About us -->
	</div>
</template>
<script scoped>
import sliderBanner from "./SliderBanner.vue";

export default {
	name: "Home",
	components: {
		sliderBanner
	}
}
</script>
<style lang="scss" scoped>
.section-container {
  padding: 5em 0;
  .section-container-head {
    font-size: 3em;
    color: #262c38;
    letter-spacing: 1px;
    position: relative;
    font-weight: 600;
    text-align: center;
    margin-bottom: 5em;

    &::after {
      border-top: 2px solid #ffc107;
      display: block;
      width: 81px;
      content: "";
      margin: 8px auto 0;
    }

    .section-container-head-title {
      font-size: 3em;
      color: #262c38;
      letter-spacing: 1px;
      position: relative;
      font-weight: 600;
      text-align: center;

      span {
        color: #545151;
        font-weight: 200;
      }
    }
  }
  .d-flex-left {
    padding-right: 30px;
    flex: 1;
    -ms-flex: 1;

    h4 {
      font-size: 28px;
      text-transform: uppercase;
      margin-bottom: 20px;
      color: #ffc107;
      font-weight: 600;
    }
    .detail {
      font-size: 14px;
      color: #777;
    }
    ul.d-flex-left-list li {
      margin: 20px 0px;
      display: block;
      .d-flex-left-list-img {
        padding-left: 0;
      }
      .in-block h5 {
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 10px;
        letter-spacing: 1px;
        color: #000000;
      }
    }
  }
  .d-flex-right {
    // background: url('../assets/images/wel.jpg') no-repeat;
    background: url(/static/images/wel.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    flex: 1;
    -ms-flex: 1;
  }
}
</style>

<style lang="scss" scoped>
/*--responsive--*/
@media (max-width: 1440px) {
}
@media (max-width: 1366px) {
}
@media (max-width: 1280px) {
  .section-container .section-container-head .section-container-head-title {
    font-size: 2.7em;
  }
}
@media (max-width: 1080px) {
  .section-container .section-container-head .section-container-head-title {
    font-size: 2.7em;
  }
}
@media (max-width: 1050px) {
}
@media (max-width: 1024px) {
}
@media (min-width: 992px) {
}
@media (max-width: 991px) {
}
@media (max-width: 900px) {
}
@media (max-width: 800px) {
}
@media (max-width: 768px) {
}
@media (max-width: 767px) {
  .section-container .section-container-head .section-container-head-title {
    font-size: 2.5em;
  }
}
@media (max-width: 736px) {
}
@media (max-width: 667px) {
}
@media (max-width: 640px) {
}
@media (max-width: 600px) {
}
@media (max-width: 568px) {
  .section-container .section-container-head .section-container-head-title {
    font-size: 2.5em;
  }
}
@media (max-width: 480px) {
  .section-container .section-container-head .section-container-head-title {
    font-size: 2.2em;
  }
}
@media (max-width: 440px) {
}
@media (max-width: 414px) {
}
@media (max-width: 384px) {
  .section-container .section-container-head .section-container-head-title {
    font-size: 2em;
  }
}
@media (max-width: 375px) {
}
@media (max-width: 320px) {
  .section-container .section-container-head .section-container-head-title {
    font-size: 1.8em;
    line-height: 1.5em;
  }
}
/*--//responsive--*/
</style>


