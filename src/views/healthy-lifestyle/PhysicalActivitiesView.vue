<script setup lang="ts">
import BreadCrumb from '@/components/BreadCrumb.vue'
import cyclingImg from '@/assets/PhysicalActivitiesView/cycling.png'
import walkingImg from '@/assets/PhysicalActivitiesView/walking.png'
import dogWalkingImg from '@/assets/PhysicalActivitiesView/dog-walking.png'
import runningImg from '@/assets/PhysicalActivitiesView/running.png'
import ropeImg from '@/assets/PhysicalActivitiesView/rope.png'
import yogaImg from '@/assets/PhysicalActivitiesView/yoga.png'
import houseChoresImg from '@/assets/PhysicalActivitiesView/house-chores.png'
import weightliftingImg from '@/assets/PhysicalActivitiesView/weightlifting.png'
import { ref } from 'vue'

const outdoorActivities = [
  {
    name: 'Cycling',
    image: cyclingImg,
    description: 'Cycling is one of the best exercises you can do to improve your physical fitness while reducing the risks of health problems with a sedentary lifestyle. Cycling can be enjoyed by yourself or can be enjoyed together as a family. Regular physical activities such as cycling can help you prevent or manage diseases such as obesity, diabetes, arthritis, and heart diseases. The city of Melbourne has wonderful scenic cycling tracks around the municipality for you and your family. ',
  },
  {
    name: 'Walking',
    image: walkingImg,
    description: 'Physical activity can be as simple as daily brisk walking which can help you become more healthy and mitigate the effects of your sedentary lifestyle. The faster your walking speed, the longer the distance you walk. Start at a comfortable pace and distance and gradually increase your speed and distance. Alternating between brisk walking and leisure walking can allow you to reap the benefits of interval training which includes improving overall cardiovascular fitness while burning a higher number of calories than leisurely walking.',
  },
  {
    name: 'Dog Walking',
    image: dogWalkingImg,
    description: 'Walking your dog daily to parks and open spaces is a great way to burn extra calories while spending valuable time with your family and dog. Research suggests that those who walk their dogs regularly are able to meet the recommended physical activity requirements to benefit their physical health. Dog walking is often an overlooked option for maintaining your physical health and dog walking has been shown to be a fantastic motivating factor for dog owners to motivate them to go for regular walks with their dogs. ',
  },
  {
    name: 'Running / Jogging',
    image: runningImg,
    description: 'Running and jogging is a very popular forms of physical exercise as they require equipment and they can be done almost anywhere and at a time of your choice. It is considered one of the best cardio exercises for your heart health.  Make sure to wear comfortable running shoes while having your run / jog. '
  }
]

const indoorActivities = [
  {
    name: 'Skipping a rope',
    image: ropeImg,
    description: 'Jump roping is an efficient physical activity you can do in your home and all you need is a little free space and a jump rope! So turn on your favorite tune and start roping!\nBenefits:\n-> Improves cardiovascular fitness and strengths your muscles\n-> Improves your balance and coordination'
  },
  {
    name: 'Yoga',
    image: yogaImg,
    description: 'Doing yoga does more than just tone your muscles and burn calories. Yoga is a full-body-mind physical activity that combines strength, flexibility, meditation, and relaxation. \nBenefits:\n->Improves your strength, balance, and flexibility.\n->Assists in easing pain and improving mobility in people with lower back pain.'
  },
  {
    name: 'House chores',
    image: houseChoresImg,
    description: 'Doing your house chores not only helps you increase your heart rate and get moving but also works for your major muscle groups. Doing regular face-paced house chores can add to your daily calorie burn.\nBenefit:\n->Burn calories while doing your house chores!\n->You can get a full-body workout and build muscle.'
  },
  {
    name: 'Weightlifting',
    image: weightliftingImg,
    description: 'Weightlifting is a wonderful physical activity that you can do in the comfort of your home at a time of your choosing as a way to stay healthy and in good shape. \nBenefit:\n-> Weightlighting helps boosts metabolism and fat loss\n-> It improves posture, sleep, mood and energy levels'
  },
]

const activities = ref(indoorActivities)
const showIndoor = ref(true)

function scrollToTop(){
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
    
<template>
  <BreadCrumb :nav="['home', 'healthy-lifestyle', 'physical-activities']"></BreadCrumb>
  <section class="mx-auto w-full h-44 bg-gray-200 flex justify-center items-center">
    <div class="font-sans text-4xl">
      Physical Activities
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
      <img class="h-[32rem] w-[52rem] object-cover" src="@/assets/PhysicalActivitiesView/Physical-Activities.jpg" alt="Healthy Diet">
    </div>
  </section>
  <section class="flex flex-col justify-center gap-16 my-16">
    <h1 class="text-4xl font-sans mx-auto">
      Choose you activity for a healthy lifestyle
    </h1>
    <div class="flex gap-4 mx-auto">
      <button 
      class="font-sans text-2xl p-4 rounded-xl hover:bg-black/20 transition"
      :class="{'text-active':showIndoor}"
      @click="activities=indoorActivities;showIndoor=!showIndoor"
      >Indoor</button>
      <button 
      class="font-sans text-2xl p-4 rounded-xl hover:bg-black/20 transition"
      :class="{'text-active':!showIndoor}"
      @click="activities=outdoorActivities;showIndoor=!showIndoor"
      >Outdoor</button>
    </div>
    <template v-for="activity in activities" :key="index">
      <div class="item flex flex-row mx-auto max-w-screen-xl px-14 gap-8">
        <div class="image min-w-[40rem] self-center">
          <img class="object-cover w-full h-[22rem]" :src="activity.image" :alt="activity.name">
        </div>
        <div class="content flex gap-2">
          <div class="min-w-[3rem]">
            <img src="@/assets/PhysicalErgonomicsView/IconTickGreen.svg" alt="Point">
          </div>
          <div class="flex flex-col">
            <h2 class="font-sans text-3xl leading-relaxed">
              {{activity.name}}
            </h2>
            <pre class="font-sans break-words whitespace-pre-wrap">{{activity.description}}</pre>
          </div>
        </div>
      </div>
    </template>
  </section>

  <section class="flex flex-col justify-center gap-16 my-16 max-w-screen-xl">
    <div class="flex gap-4 mx-auto w-full px-14 justify-between">
      <div class="opacity-0">back to top</div>
      <RouterLink class="bg-blue-600 hover:bg-blue-700 nav-button" :to="{name: 'recommendation'}">
        Explore Activities
      </RouterLink>
      <button class="bg-gray-400 hover:bg-gray-500 nav-button" @click="scrollToTop()">
        Back To Top
      </button>
    </div>
  </section>
</template>
    
<style lang="postcss" scoped>
.nav-button{
  @apply h-10 text-white flex items-center p-3 gap-3 focus:ring rounded-lg;
}

.text-active{
  @apply font-bold bg-gray-200
}

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