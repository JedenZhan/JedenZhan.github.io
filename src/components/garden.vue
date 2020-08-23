<!--
 * @Description: 心形花瓣
 * @Author: zhangzhenyang
 * @Date: 2020-08-23 10:46:07
 * @LastEditTime: 2020-08-23 16:53:33
 * @LastEditors: zhangzhenyang
-->
<template>
  <div id="loveHeart">
    <canvas id="garden"></canvas>
    <div class="words">
      <div class="messages">
        <div class="elapseClock" :style="formatedTime && 'opacity: 1'">
          <span class="digit">{{ formatedTime.day }}</span>Days
          <span class="digit">{{ formatedTime.hour }}</span>Hours
          <span class="digit">{{ formatedTime.min }}</span>Minutes
          <span class="digit">{{ formatedTime.second }}</span>Seconds
        </div>
        <div class="loveu" :style="showLoveu && 'opacity: 1'">
          已经在一起
        </div>
        <div class="signature" :style="showLoveu && 'opacity: 1'">
          - 镇🐑
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { $, formatTime } from "../utils";
import { Garden } from "../utils/Gardens";

export default {
  name: "Garden",
  props: {
    start: Boolean,
  },
  data() {
    return {
      offsetX: 0,
      offsetY: 0,
      together: 0, // 一起时间
      formatedTime: false, // 格式化过的时间
      showLoveu: false,
      garden: "",
    };
  },

  methods: {
    init() {
      this.setPosition();
      this.setTime();
      this.setGarden();

      // 条件控制
      this.startHeartAnimation();
    },
    setPosition() {
      const loveHeart = $("loveHeart");
      this.offsetX = loveHeart.offsetWidth / 2;
      this.offsetY = loveHeart.offsetHeight / 2 - 55;
    },
    setTime() {
      const together = new Date();
      together.setFullYear(2020, 5, 27);
      together.setHours(20);
      together.setMinutes(0);
      together.setSeconds(0);
      together.setMilliseconds(0);

      this.together = together;
    },

    setGarden() {
      const loveHeart = $("loveHeart"),
        garden = $("garden"),
        gardenCanvas = garden;

      gardenCanvas.width = loveHeart.offsetWidth;
      gardenCanvas.height = loveHeart.offsetHeight;

      const gardenCtx = gardenCanvas.getContext("2d");
      gardenCtx.globalCompositeOperation = "lighter";

      this.garden = new Garden(gardenCtx, gardenCanvas);

      setInterval(() => {
        this.garden.render();
      }, Garden.options.growSpeed);
    },
    getHeartPoint(angle) {
      var t = angle / Math.PI;
      var x = 19.5 * (16 * Math.pow(Math.sin(t), 3));
      var y =
        -20 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      return new Array(this.offsetX + x, this.offsetY + y);
    },
    startHeartAnimation() {
      let angle = 10;
      const interval = 50,
        heart = new Array(),
        animationTimer = setInterval(() => {
          const bloom = this.getHeartPoint(angle);
          let draw = true;
          for (let i = 0; i < heart.length; i++) {
            let p = heart[i];
            let distance = Math.sqrt(Math.pow(p[0] - bloom[0], 2) + Math.pow(p[1] - bloom[1], 2));
            if (distance < Garden.options.bloomRadius.max * 1.3) {
              draw = false;
              break;
            }
          }
          if (draw) {
            heart.push(bloom);
            this.garden.createRandomBloom(bloom[0], bloom[1]);
          }
          if (angle >= 30) {
            clearInterval(animationTimer);
            this.showTime();
            setTimeout(() => {
              this.showLoveu = true;
            }, 1000);
          } else {
            angle += 0.2;
          }
        }, interval);
    },
    showTime() {
      const miniSec = this.together.getTime();
      this.formatedTime = true;
      setInterval(() => {
        const during = new Date().getTime() - miniSec;
        this.formatedTime = formatTime(during);
      }, 1000);
    },
  },
  watch: {
    start(e) {
      if (e) {
        this.init();
      }
    },
  },
};
</script>

<style scoped>
#loveHeart {
  float: right;
  position: relative;
  margin: 24px 48px;
  width: 670px;
  height: 625px;
}

#garden {
  width: 100%;
  height: 100%;
}

.messages {
  position: absolute;
  width: 100%;
  top: 240px;
}
.words {
  font-size: 24px;
  color: #666;
  text-align: center;
}

.elapseClock {
  position: absolute;
  width: 100%;
  opacity: 0;
  animation: all 0.5s;
}

.loveu {
  margin-top: -44px;
  text-align: left;
  padding-left: 110px;
  opacity: 0;
  animation: all 0.5s;
}

.signature {
  margin-top: 64px;
  text-align: right;
  padding-right: 120px;
  opacity: 0;
}

.elapseClock .digit {
  font-size: 36px;
}

.animation-show {
  opacity: 1;
}
</style>
