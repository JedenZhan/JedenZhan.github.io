<!--
 * @Description: 密码
 * @Author: zhangzhenyang
 * @Date: 2020-09-04 20:05:42
 * @LastEditTime: 2020-09-07 21:04:41
 * @LastEditors: zhangzhenyang
-->
<template>
  <div
    class=""
    :class="{
      container: true,
      right: right
    }"
  >
    <div class="password-wrapper">
      <input
        class="password"
        type="password"
        placeholder="我们于"
        v-model="password"
        @keyup.enter="confirm"
      >
      <br />
      <button
        @click="confirm"
        class="confirm"
      >点击开启</button>
      <p
        class="wrong-password"
        v-if="wrong"
      >你忘了嘛💢</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "password",
  data() {
    return {
      right: false,
      wrong: false,
      password: "",
      rightWord: "2020-6-27",
    };
  },
  methods: {
    confirm() {
      if (this.password === this.rightWord) {
        this.right = true;
        this.$emit("rightPerson", true);
      } else {
        this.wrong = true;
      }
    },
  },
};
</script>

<style scoped>
.container {
  position: fixed;
  left: 0;
  top: 0;
  height: 1000px;
  width: 100%;
  background-color: #ccc;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 2s;
}

.right {
  height: 0;
}

.password-wrapper {
  width: 500px;
  height: 300px;
  text-align: center;
}

.wrong-password {
  margin-top: 12px;
  color: #000;
}

.password {
  width: 350px;
  height: 50px;
  border-radius: 30px;
  border: 1px solid #444;
  background-color: #ccc;
  outline: none;
  text-align: center;
  font-size: 20px;
  color: #555;
}

.confirm {
  margin-top: 30px;
  outline: none;
  width: 150px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #444;
  color: #444;
  background-color: #ccc;
  cursor: pointer;
}
</style>