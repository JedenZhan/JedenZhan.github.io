<!--
 * @Description: 主文件
 * @Author: zhangzhenyang
 * @Date: 2020-08-23 10:46:07
 * @LastEditTime: 2020-08-23 18:27:33
 * @LastEditors: zhangzhenyang
-->
<template>
  <div>
    <Garden :start="start" />
    <Bulb @startAni="mainStartAni" />
    <div class="copy-right">
      <p>Power by JedenZhan</p>
      <p>we together since 2020/06/27</p>
    </div>
  </div>
</template>

<script>
import Bulb from "./components/bulb.vue";
import Garden from "./components/garden.vue";

export default {
  name: "App",
  components: {
    Garden,
    Bulb,
  },
  data() {
    return {
      start: false,
    };
  },
  methods: {
    mainStartAni(e) {
      this.start = e;
    },
  },
  watch: {
    start(e) {
      console.log(e);
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
