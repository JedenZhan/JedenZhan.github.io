<!--
 * @Description: 灯泡
 * @Author: zhangzhenyang
 * @Date: 2020-08-23 16:04:15
 * @LastEditTime: 2020-09-07 20:57:01
 * @LastEditors: zhangzhenyang
-->
<template>
  <div class="container">
    <div
      class="electric-line"
      :style="start && 'background-color: #777'"
    ></div>
    <div
      class="light-bulb-close"
      :style="start && 'background-color: #fff'"
      @click="startAni"
    >
      <div
        class="bulb"
        :style="start && 'background-color: #888'"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Bulb",
  data() {
    return {
      start: false,
    };
  },
  methods: {
    startAni() {
      if (this.start) return;
      this.start = true;
      this.$emit("startAni", this.start);
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  margin-left: 64px;
  width: 200px;
}

.electric-line {
  height: 400px;
  width: 10px;
  background-color: #333;
}

.light-bulb-close {
  width: 100px;
  height: 100px;
  background-color: #777;
  border-radius: 50%;
  transition: all 0.5s;
}

.bulb {
  height: 20px;
  width: 20px;
  background-color: #555;
  margin: 0 auto;
  border-radius: 50%;
}
</style>
