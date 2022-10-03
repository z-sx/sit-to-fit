<script setup lang="ts">
import BreadCrumb from '@/components/BreadCrumb.vue'
import mediterraneanImg from '@/assets/DietaryPlanView/mediterranean.png'
import paleoImg from '@/assets/DietaryPlanView/paleo.png'
import intermittentImg from '@/assets/DietaryPlanView/intermittent.png'
import dukanImg from '@/assets/DietaryPlanView/dukan.png'
import ketogenicImg from '@/assets/DietaryPlanView/ketogenic.png'
const diets = [
  {
    name: 'The Mediterranean diet',
    image: mediterraneanImg,
    description: 'This diet type is considered to be one of the most nutritious diets that promotes wellness, longevity, and disease prevention and is highly sustainable. In particular, it is highly effective to help prevent heart diseases and some types of cancers. \nA perfect Balanced Diet.',
  },
  {
    name: 'The Paleo diet',
    image: paleoImg,
    description: 'The Paleo diet strategy consists of following what our hunter-gatherer ancestors consumed thousands of years ago. This diet avoids processed unnatural food items and focuses on unprocessed foods. \nEffective in Muscle Buidling.',
  },
  {
    name: 'Intermittent fasting',
    image: intermittentImg,
    description: 'The intermittent fasting dieting strategy consists of two periods which are when you are fasting and eating. There can be various forms of intermittent fasting such as the 16/8 in which you fast for 16 hours and consume calories during the 8-hour period per day. \nEffective in Fat Loss regime.',
  },
  {
    name: 'Dukan diet',
    image: dukanImg,
    description: 'The Dukan diet strategy consists of high protein intake while reducing your carbohydrate and fat intake daily. The purpose of the diet is to focus on consuming lean protein which is usually less in calories and keeps you more full while requiring more energy for your body to digest this, burning extra calories.\nEffective in Muscle Building.',
  },
  {
    name: 'Ketogenic diet',
    image: ketogenicImg,
    description: 'The ketogenic diet strategy consists of a low-carbohydrate, high-fat and moderate amount of protein intake per day. As a result of consuming more fat, your body will burn fat as its main source of energy which is called ketosis. The recommended diet for daily carbohydrates is only 20g-50g per day or less. People who have type 2 diabetes can take part in this diet plan to improve their blood sugar levels in the short term.  \nEffective in Fat Loss regime.',
  },
]
</script>
    
<template>
  <BreadCrumb :nav="['home', 'healthy-lifestyle', 'dietary-plan']"></BreadCrumb>
  <section class="mx-auto w-full h-44 bg-gray-200 flex justify-center items-center">
    <div class="font-sans text-4xl">
      Dietary Planning
    </div>
  </section>
  <section class="flex mx-auto max-w-screen-xl px-14 mt-4 mb-8 gap-8">
    <div class="flex flex-col grow bg-slate-100 p-4 gap-4">
      <div>
        <h2 class="text-3xl font-sans font-bold">Explore</h2>
      </div>
      <div class="flex flex-col gap-4">
        <RouterLink class="shadow bg-white rounded-xl p-4 font-sans font-bold hover:bg-green-700 hover:text-white" :to="{name:'physical-activities'}">Physical Activities</RouterLink>
        <RouterLink class="shadow bg-white rounded-xl p-4 font-sans font-bold hover:bg-green-700 hover:text-white" :to="{name:'dietary-plan'}">Dietary Planning</RouterLink>
        <RouterLink class="shadow bg-white rounded-xl p-4 font-sans font-bold hover:bg-green-700 hover:text-white" :to="{name:'physical-ergonomics'}">Physical Ergonomics</RouterLink>
      </div>
    </div>
    <div class="">
      <img class="h-[32rem] w-[52rem] object-cover" src="@/assets/DietaryPlanView/Healthy-Diet.jpg" alt="Healthy Diet">
    </div>
  </section>
  <section class="flex flex-col justify-center gap-16 my-16">
    <h1 class="text-4xl font-sans mx-auto">
      Types of diet strategies to mitigate sedentary lifestyle!
    </h1>
    <template v-for="diet in diets" :key="index">
      <div class="item flex flex-row mx-auto max-w-screen-xl px-14 gap-8">
        <div class="image min-w-[40rem] self-center">
          <img class="object-cover w-full h-[22rem]" :src="diet.image" :alt="diet.name">
        </div>
        <div class="content flex gap-2">
          <div class="min-w-[3rem]">
            <img src="@/assets/PhysicalErgonomicsView/IconTickGreen.svg" alt="Point">
          </div>
          <div class="flex flex-col">
            <h2 class="font-sans text-3xl leading-relaxed">
              {{diet.name}}
            </h2>
            <pre class="font-sans break-words whitespace-pre-wrap">{{diet.description}}</pre>
          </div>
        </div>
      </div>
    </template>
  </section>
</template>
    
<style lang="postcss" scoped>
.item:nth-of-type(2n+1) {
  &>.image {
    order: 2
  }
}

.item:nth-of-type(2n) {
  &>.image {
    @apply pl-14;

    & img {
      @apply object-cover h-[280px];
    }
  }
}
.router-link-active{
  @apply text-white bg-green-800;
}
</style>