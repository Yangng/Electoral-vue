<template>
  <div class="indsert">
      <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      </ul>
    <div id="certify">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../../static/certify01.png" />
          </div>
          <div class="swiper-slide"><img src="../../../static/certify02.png" />
          </div>
          <div class="swiper-slide"><img src="../../../static/certify03.png" />
          </div>
          <div class="swiper-slide"><img src="../../../static/certify04.png" />
          </div>
          <div class="swiper-slide"><img src="../../../static/certify05.png" />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
    <div class="recommend">
      推荐歌单
      <span class="more">更多&gt;</span>
    </div>
    <ul class="song_list">
      <li>
        <div class="tit_imges">
          <p class="days"> {{day}}</p>
          <div class="newdate">{{date}}</div>
        </div>
        <p class="music_conts">每日歌曲推荐</p>
      </li>
      <li>
        <div class="tit_imges">
          <img src="../assets/images/1 (1).jpg" alt="">
        </div>
        <p class="music_conts">华语搞笑|一不小心歌名就抬杠系列</p>

      </li>
      <li>
        <div class="tit_imges">
          <img src="../assets/images/1 (2).jpg" alt="">
        </div>
        <p class="music_conts">每日歌曲推荐111111111</p>

      </li>
      <li>
        <div class="tit_imges">
          <img src="../assets/images/1 (3).jpg" alt="">
        </div>
        <p class="music_conts">每日歌曲推荐111111111</p>

      </li>
      <li>
        <div class="tit_imges">
          <img src="../assets/images/1 (4).jpg" alt="">
        </div>
        <p class="music_conts">每日歌曲推荐111111111</p>

      </li>
      <li>
        <div class="tit_imges">
          <img src="../assets/images/1 (5).jpg" alt="">
        </div>
        <p class="music_conts">每日歌曲推荐111111111</p>

      </li>
      <li>
        <div class="tit_imges">
          <img src="../assets/images/1 (6).jpg" alt="">
        </div>
        <p class="music_conts">每日歌曲推荐111111111</p>

      </li>
      <li>
        <div class="tit_imges">
          <img src="../assets/images/1 (7).jpg" alt="">
        </div>
        <p class="music_conts">每日歌曲推荐111111111111</p>

      </li>
      <li>
        <div class="tit_imges">
          <img src="../assets/images/1 (8).jpg" alt="">
        </div>
        <p class="music_conts">每日歌曲推荐111111111111</p>

      </li>
      <li>
        <div class="tit_imges">
          <img src="../assets/images/1 (9).jpg" alt="">
        </div>
        <p class="music_conts">每日歌曲推荐11111111111111</p>
      </li>
    </ul>
    <div class="exclusive">
      独家放送
      <span class="more">更多&gt;</span>
    </div>
    <ul class="exclus_list">
      <li>
        <div class="exclus_list_content">
          <img src="../assets/images/1 (15).jpg" alt="">
        </div>
        <p>超燃让我们奏响人类最终的补完！</p>
      </li>
      <li>
        <div class="exclus_list_content">
          <img src="../assets/images/1 (14).jpg" alt="">
        </div>
        <p>超燃让我们奏响人类最终的补完！</p>
      </li>
      <li>
        <div class="exclus_list_content">
          <img src="../assets/images/1 (13).jpg" alt="">
        </div>
        <p>超燃让我们奏响人类最终的补完！</p>
      </li>
    </ul>
    <!-- <div class="exclusive">
      最新音乐
      <span class="more">更多&gt;</span>
    </div>
    <div class="newest_music">
      <div class="new_list">
        <div class="new_left">
          <span class="order">01</span>
          <img class="imgmusic" src="../assets/images/1 (1).jpg" alt="">
          <div class="music_detile">
            <p>1111111111111</p>
            <p>111111</p>
          </div>
        </div>
        <div class="new_right">
          <span class="order">06</span>
          <img class="imgmusic" src="../assets/images/1 (2).jpg" alt="">
          <div class="music_detile">
            <p>111111111111</p>
            <p>111111</p>
          </div>
        </div>
      </div>
      <div class="new_list">
        <div class="new_left">
          <span class="order">02</span>
          <img class="imgmusic" src="../assets/images/1 (3).jpg" alt="">
          <div class="music_detile">
            <p>1111111111111</p>
            <p>111111</p>
          </div>
        </div>
        <div class="new_right">
          <span class="order">07</span>
          <img class="imgmusic" src="../assets/images/1 (4).jpg" alt="">
          <div class="music_detile">
            <p>111111111111111</p>
            <p>111111</p>
          </div>
        </div>
      </div>
      <div class="new_list">
        <div class="new_left">
          <span class="order">03</span>
          <img class="imgmusic" src="../assets/images/1 (5).jpg" alt="">
          <div class="music_detile">
            <p>111111111111111</p>
            <p>111111</p>
          </div>
        </div>
        <div class="new_right">
          <span class="order">08</span>
          <img class="imgmusic" src="../assets/images/1 (6).jpg" alt="">
          <div class="music_detile">
            <p>11111111111111</p>
            <p>111111</p>
          </div>
        </div>
      </div>
      <div class="new_list">
        <div class="new_left">
          <span class="order">04</span>
          <img class="imgmusic" src="../assets/images/1 (7).jpg" alt="">
          <div class="music_detile">
            <p>111111111111</p>
            <p>111111</p>
          </div>
        </div>
        <div class="new_right">
          <span class="order">09</span>
          <img class="imgmusic" src="../assets/images/1 (8).jpg" alt="">
          <div class="music_detile">
            <p>11111111111111</p>
            <p>111111</p>
          </div>
        </div>
      </div>
      <div class="new_list">
        <div class="new_left">
          <span class="order">05</span>
          <img class="imgmusic" src="../assets/images/1 (9).jpg" alt="">
          <div class="music_detile">
            <p>1111111111111111</p>
            <p>111111</p>
          </div>
        </div>
        <div class="new_right">
          <span class="order">10</span>
          <img class="imgmusic" src="../assets/images/1 (10).jpg" alt="">
          <div class="music_detile">
            <p>11111111111111111111</p>
            <p>111111</p>
          </div>
        </div>
      </div>
    </div> -->
    <div class="exclusive">
      推荐MV
      <span class="more">更多&gt;</span>
    </div>
    <ul class="mvmusic">
      <li>
        <div class="mvcover">
          <img src="../assets/images/1 (12).jpg" alt="">
        </div>
        <p>11111111111111111111dg</p>
        <p>dsdsad</p>
      </li>
      <li>
        <div class="mvcover">
          <img src="../assets/images/1 (13).jpg" alt="">
        </div>
        <p>11111111111111111111dg</p>
        <p>dsdsad</p>
      </li>
      <li>
        <div class="mvcover">
          <img src="../assets/images/1 (14).jpg" alt="">
        </div>
        <p>11111111111111111111dg</p>
        <p>dsdsad</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  data() {
    return {
      day: "",
      dayarr: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
      date: "",
    }
  },
  created() {
    let myDate = new Date();
    this.day = this.dayarr[myDate.getDay()];
    console.log(this.day)
    this.date = myDate.getDate();
  },
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
      watchSlidesProgress: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      loopedSlides: 5,
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        progress: function (progress) {
          for (let i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i);
            var slideProgress = this.slides[i].progress,
              modify = 1;
            if (Math.abs(slideProgress) > 1) {
              modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
            }
            let translate = slideProgress * modify * 260 + 'px';
            let scale = 1 - Math.abs(slideProgress) / 5;
            let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
            slide.transform('translateX(' + translate + ') scale(' + scale + ')');
            slide.css('zIndex', zIndex);
            slide.css('opacity', 1);
            if (Math.abs(slideProgress) > 3) {
              slide.css('opacity', 0);
            }
          }
        },
        setTransition: function (transition) {
          for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i)
            slide.transition(transition);
          }

        }
      }
    })
  }
}
</script>

<style scoped>
body,
html {
  width: 100%;
  height: 100%;
}

.indsert {
  padding: 10px;
}

.swiper-container {
  width: 100%;
  height: 300px;
}

#certify .swiper-container {
  padding-bottom: 60px;
}

#certify .swiper-slide {
  width: 540px;
  height: 300px;
  background: #fff;
  box-shadow: 0 8px 30px #ddd;
}

#certify .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
}

#certify .swiper-slide p {
  line-height: 98px;
  padding-top: 0;
  text-align: center;
  color: #636363;
  font-size: 1.1em;
  margin: 0;
}

#certify .swiper-pagination {
  width: 100%;
  bottom: 20px;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 5px;
  border: 3px solid #fff;
  background-color: #d5d5d5;
  width: 10px;
  height: 10px;
  opacity: 1;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet-active {
  border: 3px solid #00aadc;
  background-color: #fff;
}

#certify .swiper-button-prev {
  left: 1px;
  width: 45px;
  height: 45px;
  background: url("../../../static/wm_button_icon.png") no-repeat;
  background-position: 0 0;
  background-size: 100%;
}

#certify .swiper-button-prev:hover {
  background-position: 0 -46px;
  background-size: 100%;
}

#certify .swiper-button-next {
  right: 1px;
  width: 45px;
  height: 45px;
  background: url("../../../static/wm_button_icon.png") no-repeat;
  background-position: 0 -93px;
  background-size: 100%;
}

#certify .swiper-button-next:hover {
  background-position: 0 -139px;
  background-size: 100%;
}

.recommend {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ddd;
}

.more {
  float: right;
  color: #aaa;
  font-size: 12px;
  margin-right: 10px;
}

.song_list {
  width: 100%;
  overflow: hidden;
}

.song_list li {
  float: left;
  width: 16%;
  overflow: hidden;
  margin: 10px 2% 0px 2%;
  text-align: center;
  cursor: pointer;
  position: relative;
}

.song_list li img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.song_list li .music_conts {
  text-align: left;
  margin: 0px;
  margin-top: 5px;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 2px;
}

.days {
  padding: 14px 0px 0px 0px;
  margin: 0px;
  font-size: 12px;
  color: #aaa;
}

.newdate {
  font-size: 75px;
  color: #e4393c;
  font-weight: bold;
  margin-top: 10px;
}

.tit_imges {
  border: 1px solid #ddd;
  height: 140px;
}

.exclusive {
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-top: 20px;
  border-bottom: 1px solid #ddd;
}

.exclus_list {
  width: 100%;
  overflow: hidden;
}

.exclus_list li {
  float: left;
  width: 31%;
  overflow: hidden;
  margin: 10px 10px 0px 10px;
}

.exclus_list_content {
  width: 100%;
  height: 150px;
  border: 1px solid #ddd;
}

.exclus_list_content img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.newest_music {
  width: 100%;
  border: 1px solid #ddd;
  margin-top: 10px;
}

.new_list {
  width: 100%;
  height: 50px;
}

.new_left {
  border-right: 1px solid #ddd;
}

.new_left,
.new_right {
  float: left;
  width: 50%;
  height: 100%;
  border-bottom: 1px solid #ddd;
  line-height: 50px;
}

.newest_music .new_list:nth-child(even) {
  background: #f5f5f7;
}

.newest_music .new_list:nth-child(odd) {
  background: #fff;
}

.order {
  float: left;
  width: 50px;
  height: 100%;
  text-align: center;
  line-height: 50px;
  color: #aaa;
  font-size: 14px;
}

.imgmusic {
  width: 40px;
  height: 40px;
  margin-top: 5px;
  float: left;
  object-fit: cover;
}

.music_detile {
  float: left;
  height: 100%;
}

.music_detile p {
  margin: 0px;
  float: left;
  width: 100%;
  height: 50%;
  line-height: 24px;
  padding: 0px 10px;
  font-size: 14px;
  cursor: pointer;
}

.music_detile p:last-child {
  color: #aaa;
}

.mvmusic {
  width: 100%;
  overflow: hidden;
}

.mvmusic li {
  float: left;
  width: 31%;
  overflow: hidden;
  /* border:1px solid #ddd; */
  margin: 10px;
}

.mvcover {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.mvcover img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
</style>
