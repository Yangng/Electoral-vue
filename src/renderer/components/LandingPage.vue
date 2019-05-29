<template>
  <div id="wrapper">
    <!-- <img id="logo" src="~@/assets/logo.png" alt="electron-vue"> -->
    <main>
      <div class="top-center-bottom">
        <div class="top">
          <div class="hader" style="-webkit-app-region: drag">

            <div class="header_title">
              <img src="../assets/yinle.png" alt="" class="logos">
              <span class="logo_title">律动音乐</span>
            </div>

            <div class="header_center">
              <div class="page_route">
                <span class="page_up"> <i class="fa fa-angle-left"></i> </span>
                <span class="page_down"><i class="fa fa-angle-right"></i></span>
              </div>
              <div class="header_search">
                <input type="text" placeholder="搜索音乐，视频，歌词，电台">
                <i class="fa fa-search"></i>
              </div>
            </div>

            <div class="header_right">
              <ul>
                <li>
                  <img src="../assets/picks.gif" alt="">
                  <div class="user_name"><span>请登录</span><i class="fa fa-caret-down" style="margin-left:5px;"></i></div>
                </li>
                <li>
                  <i class="fa fa-mortar-board"></i>
                </li>
                <li>
                  <i class="fa fa-gear"></i>
                </li>
                <li>
                  <i class="fa fa-envelope-o"></i>
                </li>
              </ul>
              <div class="major">
                <i class="fa fa-bars" @click="winhide"></i>
                <i class="fa fa-window-minimize" @click="minimize"></i>
                <i class="fa fa-window-restore" @click="maximize"></i>
                <i class="fa fa-close" @click="winclose"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="center">
          <div class="content_left">
            <div class="menu_bill">
              <ul class="recommend">
                <span class="reco_title">推荐</span>
                <li>
                  <i class="fa fa-music"></i> 发现音乐
                </li>
                <li>
                  <i class="fa fa-bullseye"></i> 私人FM
                </li>
                <li>
                  <i class="fa fa-video-camera"></i> 视频
                </li>
                <li>
                  <i class="fa fa-users"></i> 朋友
                </li>
              </ul>
               <ul class="recommend">
                <span class="reco_title">我的音乐</span>
                <li>
                  <i class="fa fa-music"></i> 本地音乐
                </li>
                <li>
                  <i class="fa fa-download"></i> 下载管理
                </li>
                <li>
                  <i class="fa fa-cloud"></i> 我的音乐云盘
                </li>
                <li>
                  <i class="fa fa-feed"></i> 我的电台
                </li>
                 <li>
                  <i class="fa fa-shopping-bag"></i> 我的收藏
                </li>
              </ul>
            </div>
            <div class="music_detil">
              <img src="../assets/123.gif" alt="" class="cover">
              <ul class="music_message">
                <li class="music_title">1111111111111111</li>
                <li class="music_singer">222222222222222</li>
              </ul>
              <ul class="collect">
                <li>
                  <i class="fa fa-heart-o"></i>
                </li>
                <li>
                  <i class="fa fa-paper-plane-o">
                  </i>
                </li>
              </ul>
            </div>
          </div>
          <div class="content_moddle">
            <router-view></router-view>
          </div>
        </div>
        <div class="bottom">
          <div class="audio"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { audios } from '../assets/audio.js';
const ipc = require('electron').ipcRenderer;
import audio1 from '../assets/1111.mp3';
import audio2 from '../assets/2222.mp3';
export default {
  name: 'landing-page',
  data() {
    return {
      isPlaying: false,
      musiclist: [
        audio1,
        audio2
      ]
    }
  },
  mounted() {
    audios(this.musiclist);
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link)
    },
    winclose() {
      ipc.send('window-close');
    },
    maximize() {
      ipc.send('window-max');
    },
    minimize() {
      ipc.send('window-min');
    },
    winhide() {
      win.hide()
    },
    play() {
      var audio = document.querySelector('#audio');
      if (!this.isPlaying) {
        audio.play();
        this.isPlaying = true;
      } else {
        audio.pause();
        this.isPlaying = false;
      }
    }
  }
}
</script>
<style scoped>
@import url("../assets/audio.css");
* {
  box-sizing: border-box;
}
body,
html {
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
}

#wrapper,
main {
  height: 100%;
}

.hader {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 50px;
  background: #c62f2f;
}

.header_title {
  height: 100%;
  line-height: 80px;
  padding-left: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  float: left;
}

.header_center {
  width: 33%;
  height: 100%;
  float: left;
  margin-left: 142px;
}

.header_right {
  height: 100%;
  float: right;
}

.header_right ul {
  display: inline-block;
  margin: 0px;
  height: 100%;
}

.header_right ul li {
  float: left;
  list-style: none;
  margin: 16px 10px 0px 17px;
  color: #e29595;
  cursor: pointer;
  font-size: 18px;
  -webkit-app-region: no-drag;
}

.header_right ul li:hover {
  color: #fff;
}

.header_right ul li:first-child {
  margin: 10px 10px 0px 0px;
}

.user_name {
  float: left;
  margin-top: 6px;
  margin-left: 8px;
  font-size: 15px;
  max-width: 120px;
  overflow: hidden;
  /*超出部分隐藏*/
  text-overflow: ellipsis;
  /* 超出部分显示省略号 */
  white-space: nowrap;
  /*规定段落中的文本不进行换行 */
}

.header_right ul li img {
  width: 30px;
  border-radius: 50%;
  float: left;
  -webkit-app-region: no-drag;
}

.logos {
  width: 30px;
  margin: 13px 5px 0px 0px;
  float: left;
}

.logo_title {
  height: 100%;
  line-height: 54px;
  float: left;
}

.page_route {
  width: 49px;
  height: 22px;
  border: 1px solid #fff;
  position: relative;
  top: 16px;
  border-radius: 5px;
  float: left;
}

.page_route span:first-child {
  border-right: 1px solid #fff;
}

.page_route span {
  float: left;
  width: 49%;
  height: 100%;
  line-height: 17px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  -webkit-app-region: no-drag;
}

.header_search {
  width: 80%;
  height: 30px;
  line-height: 30px;
  position: relative;
  top: 11px;
  left: 10px;
  background: #fff;
  float: left;
  border-radius: 16px;
}

.header_search input {
  width: 80%;
  height: 100%;
  border-radius: 16px;
  margin-left: -1px;
  position: relative;
  top: -1px;
  border: none;
  outline: none;
  padding: 0px 10px;
  -webkit-app-region: no-drag;
}

.major {
  float: right;
  margin-top: 17px;
  border-left: 1px solid #a82828;
  margin-left: 16px;
  margin-right: 12px;
}

.major i {
  color: #e29595;
  margin-left: 21px;
  -webkit-app-region: no-drag;
  cursor: pointer;
  font-size: 12px;
}

.major i:hover {
  color: #fff;
}

.content_left {
  float: left;
  width: 210px;
  height: 100%;
  background: #f5f5f7;
  border-right: 1px solid #ddd;
}

.menu_bill {
  position: absolute;
  top: 0px;
  bottom: 55px;
  width: 210px;
  float: left;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0px 10px;
}

.recommend li {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  color: #5c5c5c;
  cursor: pointer;
}
.recommend li:hover {
  color: #000;
}

.recommend li i {
  margin-left: 10px;
  margin-right: 5px;
  font-size: 15px;
}

.reco_title {
  display: inline-block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 13px;
  color: #5c5c5c;
}

.top-center-bottom > div {
  position: absolute;
}

.top-center-bottom .top {
  top: 0;
  height: 50px;
  width: 100%;
}

.top-center-bottom .bottom {
  bottom: 0;
  height: 50px;
  width: 100%;
  border-top: 1px solid #ddd;
}

.top-center-bottom .center {
  bottom: 50px;
  top: 50px;
  width: 100%;
}

.music_controller {
  width: 210px;
  height: 100%;
  float: left;
}

.music_controller li {
  float: left;
  width: 33%;
  height: 100%;
  text-align: center;
}

.ralute {
  display: inline-block;
  width: 35px;
  margin-top: 8px;
  height: 35px;
  line-height: 35px;
  color: #fff;
  background: #d93737;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
}

.pulue {
  width: 40px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  margin-top: 4px;
}

.seek_bar {
  float: left;
  height: 100%;
}

.header_search i {
  float: right;
  margin: 6px 10px 0px 0px;
}

.music_detil {
  width: 210px;
  height: 55px;
  border-top: 1px solid #ddd;
  position: absolute;
  left: 0px;
  bottom: 0px;
  padding: 5px 5px;
}

.cover {
  width: 40px;
  float: left;
}

.music_message {
  float: left;
  max-width: 120px;
  margin: 6px 0px 0px 12px;
  font-size: 14px;
}

.music_message li:last-child {
  margin-top: 3px;
  color: #aaa;
}
.collect {
  float: left;
  color: #666666;
  margin: 5px 0px 0px 15px;
  font-size: 14px;
}
.collect li:last-child {
  margin: 5px 0 0 0;
}

.collect li {
  cursor: pointer;
}

.content_moddle {
  float: left;
  width: calc(100vw - 210px);
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

.content_moddle::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.content_moddle::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #aaa;
}
.content_moddle::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  /* -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2); */
  border-radius: 10px;
  /* background: #EDEDED; */
}
</style>
