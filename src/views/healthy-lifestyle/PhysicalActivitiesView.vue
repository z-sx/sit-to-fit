<script setup lang="ts">
import cyclingImg from '@/assets/PhysicalActivitiesView/cycling.png'
import walkingImg from '@/assets/PhysicalActivitiesView/walking.png'
import dogWalkingImg from '@/assets/PhysicalActivitiesView/dog-walking.png'
import runningImg from '@/assets/PhysicalActivitiesView/running.png'

const activities = [
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
</script>
    
<template>
  <section class="flex flex-col justify-center gap-16 my-16">
    <h1 class="text-4xl font-sans mx-auto">
      Choose you activity for a healthy lifestyle!
    </h1>
    <template v-for="activity in activities" :key="index">
      <div class="flex flex-row mx-auto w-[59.375rem] gap-20">
        <div class="min-w-[28rem] self-center">
          <img :src="activity.image" :alt="activity.name">
        </div>
        <div>
          <h2 class="font-sans text-3xl leading-normal">
            {{activity.name}}
          </h2>
          <p class="font-sans">
            {{activity.description}}
          </p>
        </div>
      </div>
    </template>
  </section>
</template>
    
<style lang="postcss" scoped>

</style>