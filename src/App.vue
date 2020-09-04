<!--
 * @Description: 主文件
 * @Author: zhangzhenyang
 * @Date: 2020-08-23 10:46:07
 * @LastEditTime: 2020-09-04 20:41:35
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
      <AudioS />
      <div class="copy-right">
        <p>Power by JedenZhan for JialiNing</p>
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
    };
  },
  methods: {
    mainStartAni(e) {
      this.start = e;
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
