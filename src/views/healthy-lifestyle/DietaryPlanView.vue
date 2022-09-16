<script setup lang="ts">
import mediterraneanImg from '@/assets/DietaryPlanView/mediterranean.png'
import paleoImg from '@/assets/DietaryPlanView/paleo.png'
import intermittentImg from '@/assets/DietaryPlanView/intermittent.png'
import dukanImg from '@/assets/DietaryPlanView/dukan.png'
import ketogenicImg from '@/assets/DietaryPlanView/ketogenic.png'
const diets = [
  {
    name: 'The Mediterranean diet',
    image: mediterraneanImg,
    description: 'This diet type is considered to be one of the most nutritious diets that promotes wellness, longevity, and disease prevention and is highly sustainable. In particular, it is highly effective to help prevent heart diseases and some types of cancers. ',
  },
  {
    name: 'The Paleo diet',
    image: paleoImg,
    description: 'The Paleo diet strategy consists of following what our hunter-gatherer ancestors consumed thousands of years ago. This diet avoids processed unnatural food items and focuses on unprocessed foods. ',
  },
  {
    name: 'Intermittent fasting',
    image: intermittentImg,
    description: 'The intermittent fasting dieting strategy consists of two periods which are when you are fasting and eating. There can be various forms of intermittent fasting such as the 16/8 in which you fast for 16 hours and consume calories during the 8-hour period per day. ',
  },
  {
    name: 'Dukan diet',
    image: dukanImg,
    description: 'The Dukan diet strategy consists of high protein intake while reducing your carbohydrate and fat intake daily. The purpose of the diet is to focus on consuming lean protein which is usually less in calories and keeps you more full while requiring more energy for your body to digest this, burning extra calories.',
  },
  {
    name: 'Ketogenic diet',
    image: ketogenicImg,
    description: 'The ketogenic diet strategy consists of a low-carbohydrate, high-fat and moderate amount of protein intake per day. As a result of consuming more fat, your body will burn fat as its main source of energy which is called ketosis. The recommended diet for daily carbohydrates is only 20g-50g per day or less. People who have type 2 diabetes can take part in this diet plan to improve their blood sugar levels in the short term.  ',
  },
]
</script>
    
<template>
  <section class="flex flex-col justify-center gap-16 my-16">
    <h1 class="text-4xl font-sans mx-auto">
      Types of diet strategies to mitigate sedentary lifestyle!
    </h1>
    <template v-for="diet in diets" :key="index">
      <div class="flex flex-row mx-auto w-[59.375rem] gap-20">
        <div class="min-w-[28rem] self-center">
          <img :src="diet.image" :alt="diet.name">
        </div>
        <div>
          <h2 class="font-sans text-3xl leading-relaxed">
            {{diet.name}}
          </h2>
          <p class="font-sans">
            {{diet.description}}
          </p>
        </div>
      </div>
    </template>
  </section>
</template>
    
<style lang="postcss" scoped>
</style>