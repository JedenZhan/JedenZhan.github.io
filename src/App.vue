<!--
 * @Description: 主文件
 * @Author: zhangzhenyang
 * @Date: 2020-08-23 10:46:07
 * @LastEditTime: 2020-09-07 20:57:57
 * @LastEditors: zhangzhenyang
-->
<template>
  <div>
    <Password @rightPerson="welcome" />
    <div
      class="main"
      v-if="show"
    >
      <Garden :start="start" />
      <Bulb @startAni="mainStartAni" />
      <AudioS :audioUrl="audioUrl" />
      <div class="copy-right">
        <p>Power by JedenZhan for JiaLiNing</p>
        <p>we together since 2020/06/27</p>
      </div>
    </div>
  </div>
</template>

<script>
import Bulb from "./components/bulb.vue";
import Garden from "./components/garden.vue";
import AudioS from "./components/audio-s.vue";
import Password from "./components/password.vue";

export default {
  name: "App",
  components: {
    Garden,
    Bulb,
    AudioS,
    Password,
  },
  data() {
    return {
      start: false,
      show: false,
      audioUrl: "",
    };
  },
  methods: {
    mainStartAni(e) {
      this.start = e;
      this.audioUrl = "http://mp3.9ku.com/hot/2010/03-10/430257.mp3";
    },
    welcome(e) {
      this.show = e;
    },
  },
  watch: {
    start(e) {
      if (e) {
        document.body.style.backgroundColor = "#ffe";
      }
    },
  },
};
</script>

<style>
.copy-right {
  position: fixed;
  bottom: 36px;
  width: 100%;
  text-align: center;
  color: #ccc;
}
</style>
