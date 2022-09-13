<script setup lang="ts">
</script>

<template>
<div class="flex-col space-y-64 page">
  <div class="flex-col group">
    <div class="flex-col section_1">
      <div class="flex-row section_2">
        <img src="@/assets/home-v2/b84219546e91b41b302dfea8744f4029.png" class="image" />
        <div class="flex-col items-center text-wrapper"><span class="text">Journey</span></div>
        <div class="flex-col text-wrapper_1"><span class="text_1">Physical Ergonomics</span></div>
        <div class="flex-col text-wrapper_1"><span class="text_1">Physical Activities</span></div>
        <div class="flex-col items-center text-wrapper_2"><span class="text_4">Dietary Plans</span></div>
        <div class="flex-col items-center text-wrapper_3"><span class="text_5">Alert Reminder</span></div>
        <div class="flex-row section_3">
          <img src="@/assets/home-v2/a3efa2a0882bed1d9a9b76f4689881a5.png" class="image_1" />
          <span class="text_6">Become New User</span>
        </div>
      </div>
      <div class="flex-row items-start space-x-66 group_1">
        <div class="flex-row space-x-57 group_2">
          <div class="group_3">
            <span class="text_7">
              Sedentary Lifestyle
              <br />
            </span>
            <span class="text_8">
              The fitness and health of today’s workforce in Melbourne are declining at an alarming rate.
            </span>
          </div>
          <span class="text_9">Sitting is the new Smoking!</span>
        </div>
        <span class="text_10">A sedentary lifestyle is not inevitable!</span>
      </div>
    </div>
    <img src="@/assets/home-v2/69f8245343096d52c96a654fea18b271.png" class="image_2" />
  </div>
  <div class="flex-col space-y-73">
    <div class="flex-row space-x-55 group_5">
      <div class="flex-col space-y-52 group_6">
        <div class="group_7">
          <span class="text_11">
            Improve Life Standards
            <br />
          </span>
          <span class="text_12">
            How can we help
            <br />
          </span>
          <span class="text_13">
            Sedentary behaviour can be fixed by changing your lifestyle by involving simple activities.
            <br />
          </span>
          <span class="text_14 text_15">
            Use our Personalised Tool!
            <br />
          </span>
          <span class="text_16">
            How this tool will help you?
            <br />
          </span>
          <span class="text_16">
            Get personalised recommendations
            <br />
            Browse through our catalogue of activities
          </span>
        </div>
        <div class="flex-row justify-evenly section_4">
          <span class="text_19">Use Tool</span>
          <img src="@/assets/home-v2/5579642282c66a7ac9fe39b4ed23d4cc.png" class="image_3" />
        </div>
      </div>
      <img src="@/assets/home-v2/f24cf0fe15df655083d4b6229ab94433.png" class="image_4" />
    </div>
    <div class="flex-col">
      <div class="flex-col items-start space-y-27 group_9">
        <span class="text_14 text_20">Try out our other features:</span>
        <div class="flex-row equal-division">
          <div class="flex-col items-start space-y-39 equal-division-item">
            <div class="flex-row justify-center section_5">
              <img src="@/assets/home-v2/f8939951a220a91d01d5851db0007d97.png" class="image_5" />
              <span class="text_21">Alert Reminder</span>
            </div>
            <div class="flex-row section_6">
              <img src="@/assets/home-v2/b1515c99a668367b4a5b320e6e4ac016.png" class="image_6" />
              <span class="text_22">Dietery Plans</span>
            </div>
          </div>
          <div class="flex-col items-start space-y-43 equal-division-item_1">
            <span class="text_23">Get periodic reminders to fix your posture!</span>
            <span class="text_24">Check out various dietary plans!</span>
          </div>
        </div>
      </div>
      <div class="flex-row space-x-19 group_10">
        <div class="flex-row section_7">
          <img src="@/assets/home-v2/22bca72da1bfffcd1e3b7a9180c397ba.png" class="image_7" />
          <span class="text_25">Physical Activites</span>
        </div>
        <span class="text_26">Decide what to play from a range of activities nearby!</span>
      </div>
      <div class="flex-row space-x-18 group_11">
        <div class="flex-row space-x-27 section_8">
          <img src="@/assets/home-v2/6e40d0bc8ed3bdcea2372fd0536b4d30.png" class="image_8" />
          <span class="text_27">Physical Ergonomics</span>
        </div>
        <span class="text_28">Get the best-suited ergonomic chair for yourself!</span>
      </div>
      <div class="flex-col items-end text-wrapper_4"><span class="text_29">Copyright 2022</span></div>
    </div>
  </div>
</div>
</template>
<style scoped>
.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.justify-start {
  justify-content: flex-start;
}

.justify-center {
  justify-content: center;
}

.justify-end {
  justify-content: flex-end;
}

.justify-evenly {
  justify-content: space-evenly;
}

.justify-around {
  justify-content: space-around;
}

.justify-between {
  justify-content: space-between;
}

.items-start {
  align-items: flex-start;
}

.items-center {
  align-items: center;
}

.items-end {
  align-items: flex-end;
}

.space-y-64 > *:not(:first-child) {
  margin-top: 5.16vw;
}
.page {
  background-color: #d7dfed;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
.group {
  height: 62.5vw;
}
.section_1 {
  padding-bottom: 30.56vw;
  background-image: url('@/assets/home-v2/031fe249956ceec2050557b7f5cbc646.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.section_2 {
  padding: 0.65vw 2.58vw 0.65vw 3.67vw;
  background-color: #ffffff00;
}
.image {
  margin-bottom: 0.4vw;
  width: 5.16vw;
  height: 4.52vw;
}
.text-wrapper {
  margin-left: 5.32vw;
  padding: 2.14vw 0 1.77vw;
  background-color: #ffffff00;
  border-radius: 1.29vw;
  width: 7.66vw;
  height: 5.16vw;
}
.text {
  color: #000000;
  font-size: 1.29vw;
  font-family: Open Sans;
  font-weight: 700;
  line-height: 1.25vw;
}
.text-wrapper_1 {
  padding: 2.1vw 0 1.77vw;
  background-color: #ffffff00;
  border-radius: 1.29vw;
  height: 5.16vw;
}
.text_1 {
  margin-left: 1.41vw;
  margin-right: 1.09vw;
  color: #000000;
  font-size: 1.29vw;
  font-family: Open Sans;
  font-weight: 700;
  line-height: 1.29vw;
}
.text-wrapper_2 {
  padding: 2.1vw 0 1.77vw;
  background-color: #ffffff00;
  border-radius: 1.29vw;
  width: 11.21vw;
  height: 5.16vw;
}
.text_4 {
  color: #000000;
  font-size: 1.29vw;
  font-family: Open Sans;
  font-weight: 700;
  line-height: 1.29vw;
}
.text-wrapper_3 {
  padding: 2.1vw 0;
  background-color: #ffffff00;
  border-radius: 1.29vw;
  width: 12.42vw;
  height: 5.16vw;
}
.text_5 {
  color: #000000;
  font-size: 1.29vw;
  font-family: Open Sans;
  font-weight: 700;
  line-height: 1.01vw;
}
.section_3 {
  margin-left: 4.88vw;
  padding: 1.41vw 1.09vw 1.41vw 1.29vw;
  background-color: #ffffff00;
  border-radius: 1.29vw;
  height: 5.16vw;
}
.image_1 {
  flex-shrink: 0;
  width: 2.34vw;
  height: 2.34vw;
}
.text_6 {
  margin: 0.73vw 0 0.69vw 0.77vw;
  color: #000000;
  font-size: 1.29vw;
  font-family: Open Sans;
  font-weight: 700;
  line-height: 0.93vw;
}
.space-x-66 > *:not(:first-child) {
  margin-left: 5.32vw;
}
.group_1 {
  margin: 3.35vw 4.11vw 0 4.56vw;
}
.space-x-57 > *:not(:first-child) {
  margin-left: 4.6vw;
}
.group_2 {
  flex: 1 1 auto;
}
.group_3 {
  margin-bottom: 1.01vw;
  flex: 1 1 auto;
  line-height: 2.9vw;
  height: 13.19vw;
}
.text_7 {
  color: #010101;
  font-size: 2.82vw;
  font-family: Open Sans;
  font-weight: 700;
  line-height: 3.39vw;
}
.text_8 {
  color: #010101;
  font-size: 2.42vw;
  font-family: Open Sans;
  line-height: 2.9vw;
}
.text_9 {
  margin-top: 3.06vw;
  flex-shrink: 0;
  color: #000000;
  font-size: 2.82vw;
  font-family: Open Sans;
  line-height: 3.39vw;
  text-align: center;
  width: 17.26vw;
}
.text_10 {
  margin-top: 1.94vw;
  flex-shrink: 0;
  color: #000000;
  font-size: 2.82vw;
  font-family: Open Sans;
  line-height: 3.39vw;
  text-align: center;
  width: 17.1vw;
}
.image_2 {
  margin-right: 4.52vw;
  margin-top: -3.87vw;
  flex-shrink: 0;
  align-self: flex-end;
  width: 51.61vw;
  height: 9.03vw;
}
.space-y-73 > *:not(:first-child) {
  margin-top: 5.89vw;
}
.space-x-55 > *:not(:first-child) {
  margin-left: 4.44vw;
}
.group_5 {
  padding-left: 4.6vw;
  padding-right: 4.52vw;
}
.space-y-52 > *:not(:first-child) {
  margin-top: 4.19vw;
}
.group_6 {
  margin-top: 0.6vw;
  flex: 1 1 42.78vw;
}
.group_7 {
  line-height: 1.53vw;
}
.text_11 {
  color: #000000;
  font-size: 2.82vw;
  font-family: Open Sans;
  font-weight: 700;
  line-height: 3.39vw;
}
.text_12 {
  color: #000000;
  font-size: 2.82vw;
  font-family: Open Sans;
  font-weight: 700;
  line-height: 3.39vw;
}
.text_13 {
  color: #000000;
  font-size: 1.45vw;
  font-family: Open Sans;
  line-height: 1.77vw;
}
.text_14 {
  font-style: italic;
}
.text_15 {
  color: #000000;
  font-size: 1.45vw;
  font-family: Open Sans;
  line-height: 1.77vw;
}
.text_16 {
  color: #000000;
  font-size: 1.29vw;
  font-family: Open Sans;
  line-height: 1.53vw;
  word-break: break-all;
}
.section_4 {
  padding: 0.65vw 1.53vw 0.65vw 1.65vw;
  align-self: center;
  background-color: #c8dbfb;
  width: 11.21vw;
  border: solid 0.16vw #ffffff;
}
.text_19 {
  margin: 0.48vw 0;
  color: #000000;
  font-size: 1.29vw;
  font-family: Open Sans;
  line-height: 1.01vw;
}
.image_3 {
  width: 1.94vw;
  height: 1.94vw;
}
.image_4 {
  flex: 1 1 42.78vw;
  width: 43.71vw;
  height: 30vw;
}
.space-y-27 > *:not(:first-child) {
  margin-top: 2.18vw;
}
.group_9 {
  padding: 0 4.03vw;
}
.text_20 {
  margin-left: 0.6vw;
  color: #000000;
  font-size: 2.82vw;
  font-family: Open Sans;
  line-height: 2.82vw;
}
.equal-division {
  width: 79.8vw;
}
.space-y-39 > *:not(:first-child) {
  margin-top: 3.15vw;
}
.equal-division-item {
  padding: 0.93vw 0 1.45vw 0.69vw;
  flex: 1 1 39.88vw;
}
.section_5 {
  padding: 2.22vw 1.94vw;
  background-color: #000000;
  width: 32.26vw;
  position: relative;
}
.image_5 {
  position: absolute;
  left: 1.94vw;
  top: 50%;
  transform: translateY(-50%);
  width: 3.31vw;
  height: 2.9vw;
}
.text_21 {
  color: #ffffff;
  font-size: 2.58vw;
  font-family: Open Sans;
  line-height: 1.98vw;
}
.section_6 {
  margin-left: 8.15vw;
  padding: 1.69vw 1.94vw;
  background-color: #000000;
}
.image_6 {
  width: 3.39vw;
  height: 3.39vw;
}
.text_22 {
  margin: 0.69vw 6.85vw 0 2.18vw;
  color: #ffffff;
  font-size: 2.58vw;
  font-family: Open Sans;
  line-height: 2.58vw;
}
.space-y-43 > *:not(:first-child) {
  margin-top: 3.47vw;
}
.equal-division-item_1 {
  padding: 1.33vw 0;
  flex: 1 1 39.88vw;
  width: 39.88vw;
}
.text_23 {
  margin-left: -5.65vw;
  color: #000000;
  font-size: 2.42vw;
  font-family: Open Sans;
  line-height: 2.9vw;
  word-break: break-all;
  width: 32.34vw;
}
.text_24 {
  margin-left: 2.62vw;
  color: #000000;
  font-size: 2.42vw;
  font-family: Open Sans;
  line-height: 2.9vw;
  width: 29.68vw;
}
.space-x-19 > *:not(:first-child) {
  margin-left: 1.53vw;
}
.group_10 {
  margin-top: 1.45vw;
  align-self: center;
  width: 64.88vw;
}
.section_7 {
  padding: 1.29vw 1.94vw;
  flex: 1 1 32.26vw;
  background-color: #000000;
  height: 6.77vw;
}
.image_7 {
  width: 4.27vw;
  height: 4.19vw;
}
.text_25 {
  margin: 1.09vw 0 0.52vw 2.18vw;
  color: #ffffff;
  font-size: 2.58vw;
  font-family: Open Sans;
  line-height: 2.58vw;
}
.text_26 {
  margin-top: 0.56vw;
  flex: 1 1 32.26vw;
  color: #000000;
  font-size: 2.42vw;
  font-family: Open Sans;
  line-height: 2.9vw;
}
.space-x-18 > *:not(:first-child) {
  margin-left: 1.45vw;
}
.group_11 {
  margin-right: 4.6vw;
  margin-top: 2.9vw;
  align-self: flex-end;
  width: 67.14vw;
}
.space-x-27 > *:not(:first-child) {
  margin-left: 2.18vw;
}
.section_8 {
  padding: 1.73vw 1.45vw 1.73vw 1.77vw;
  flex: 1 1 32.26vw;
  background-color: #000000;
  height: 6.77vw;
}
.image_8 {
  flex-shrink: 0;
  width: 2.34vw;
  height: 3.31vw;
}
.text_27 {
  margin-top: 0.65vw;
  color: #ffffff;
  font-size: 2.58vw;
  font-family: Open Sans;
  line-height: 2.58vw;
}
.text_28 {
  margin-top: 0.56vw;
  flex: 1 1 32.26vw;
  color: #000000;
  font-size: 2.42vw;
  font-family: Open Sans;
  line-height: 2.9vw;
}
.text-wrapper_4 {
  margin-top: 5.16vw;
  padding: 6.85vw 0 4.68vw;
  background-color: #d9d9d9;
}
.text_29 {
  margin-right: 15.08vw;
  color: #000000;
  font-size: 1.29vw;
  font-family: Open Sans;
  line-height: 1.29vw;
}
</style>