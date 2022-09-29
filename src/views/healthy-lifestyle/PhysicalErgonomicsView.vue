<script setup lang="ts">
import { computed, ref } from 'vue';
import g1 from '@/assets/PhysicalErgonomicsView/g-1.jpg'
import g2 from '@/assets/PhysicalErgonomicsView/g-2.jpg'
import g3 from '@/assets/PhysicalErgonomicsView/g-3.jpg'
import g4 from '@/assets/PhysicalErgonomicsView/g-4.jpg'
import b1 from '@/assets/PhysicalErgonomicsView/b-1.jpg'
import b2 from '@/assets/PhysicalErgonomicsView/b-2.jpg'
import b3 from '@/assets/PhysicalErgonomicsView/b-3.jpg'
import b4 from '@/assets/PhysicalErgonomicsView/b-4.jpg'
import tick from '@/assets/PhysicalErgonomicsView/IconTickGreen.svg'
import cross from '@/assets/PhysicalErgonomicsView/IconCrossRed.svg'

const postures = {
  good: [{
    name: "Body in alignment",
    image: g1,
    desc: 'While sitting in your office chair, sit up straight and align your ears, shoulders, and hips in one vertical line. Make good use of your office chair by using the back support of the chair to ease the load on your back muscles. Avoid learning to one side or crossing your legs unevenly while sitting.'
  },{
    name: 'Ergonomic office chairs',
    image: g2,
    desc: "Make use of the ergonomic chair's supportive features such as lumbar back supports or a small pillow to take the load off your back muscles. Use the footrests to take the load off your leg muscle and allow better blood circulation. Positioning your chair so that your resting eye position is natural to your screen can help avoid leaning or straining of the neck. ",
  },{
    name: "Wear supportive footwear",
    image: g3,
    desc: "Proper comfortable footwear should be worn when sitting for long hours in your char while working. Footwear such as high-heeled shoes should be avoided while sitting in your chair working as it can affect your body's center of gravity and potentially change the alignment of your entire body. ",
  },{
    name: "Monitor, chair and keyboard postion",
    image: g4,
    desc: "The keyboard and mouse should be positioned in a way that is the most relaxing position possible so that there is less strain on your fingers, wrists, arms and shoulders. Your monitor should be slightly bellow eye level and straight ahead and not facing on one side. The height of your office chair should allow you to have your feet resting firmly on the ground while your thighs are parallel to the floor.",
  }],
  bad: [{
    name: "Poor blood circulation",
    image: b1,
    desc: "Sitting with poor posture for long periods of time can compromise your blood circulation. This may as a result cause varicose veins and can be very painful experience. Continuous poor posture can also lead to high blood pressure. "
  },{
    name: "Back, Neck, and Shoulder Pain",
    image: b2,
    desc: "Bad posture can potentially lead you to throw your spine out of alignment and cause muscle pain in the back, neck, and shoulders. Lower back pain can be caused by slouching too much or sitting up too straight which can lead to a painful experience. "
  },{
    name: "Digestive Issues",
    image: b3,
    desc: "Sitting down and slouching compresses your abdominal organs such as your digestive tract. As a result, this can lead to heartburn, slower digestion, and can lead to nutritional deficiency. Bad sitting posture can also lead to a slower metabolism due to the compressed digestive tract.",
  },{
    name: "Fatigue",
    image: b4,
    desc: "Your body has to work harder if you are sitting on your office chair with poor posture. Poor posture will cause fatigue due to your body being out of alignment which causes more pressure on your muscles and doing work that they may not be designed to do. This can cause you to feel tired after a full day of work. "
  }]
}
const contentKey = ref<"good"|"bad">("bad")
const isBad = computed(()=>contentKey.value === "bad")
</script>
    
<template>
  <section class="mx-auto w-full h-44 bg-gray-200 flex justify-center items-center">
    <div class="font-sans text-4xl">
      Physical Ergonomics
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
      <img class="h-[32rem] w-[52rem] object-cover" src="@/assets/PhysicalErgonomicsView/Physical-Ergonomics.jpg" alt="Physical Ergonomics">
    </div>
  </section>
  <section class="flex flex-col justify-center gap-16 my-16">
    <div class="flex gap-4 mx-auto">
      <button 
      class="font-sans text-2xl" 
      :class="{'font-bold':isBad}"
      @click="contentKey = 'bad'"
      >Bad Posture</button>
      <button 
      class="font-sans text-2xl" 
      :class="{'font-bold':!isBad}"
      @click="contentKey = 'good'"
      >Good Posture</button>
    </div>
    <template v-for="posture, index in postures[contentKey]" :key="index">
      <div class="item flex flex-row mx-auto max-w-screen-xl px-14 gap-8">
        <div class="image min-w-[40rem] self-center">
          <img class="object-cover w-full h-[22rem]" :src="posture.image" :alt="posture.name">
        </div>
        <div class="content flex gap-2">
          <div class="min-w-[3rem]">
            <img :src="isBad?cross:tick" alt="Point">
          </div>
          <div class="flex flex-col">
            <h2 class="font-sans text-3xl leading-relaxed">
              {{posture.name}}
            </h2>
            <pre class="font-sans break-words whitespace-pre-wrap">{{posture.desc}}</pre>
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