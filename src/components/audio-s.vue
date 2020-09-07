<!--
 * @Description: 音频
 * @Author: zhangzhenyang
 * @Date: 2020-09-04 19:57:46
 * @LastEditTime: 2020-09-07 20:58:26
 * @LastEditors: zhangzhenyang
-->
<template>
  <div class="container">
    <audio
      :src="audioUrl"
      autoplay
    ></audio>
  </div>
</template>

<script>
export default {
  name: "audio-s",
  props: ["audioUrl"],
};
</script>