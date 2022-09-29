<script setup lang="ts">
import lifestyleImg from '@/assets/FeatureInfoView/IconLifestyle.svg'
import recommendationImg from '@/assets/FeatureInfoView/IconRecommendation.svg'
import reminderImg from '@/assets/FeatureInfoView/IconReminder.svg'
import JourneyProgress from '../../components/JourneyProgress.vue'
const features = [{
  title: 'Healthy Lifestyle',
  route: 'healthy-lifestyle',
  image: lifestyleImg,
  desc: 'Learn about how to have a healthy lifestyle',
}, {
  title: 'Recommendation System',
  route: 'recommendation',
  image: recommendationImg,
  desc: 'Discover activities you can do nearby your area or at home!',
}, {
  title: 'Alert Reminder',
  route: 'alert-reminder',
  image: reminderImg,
  desc: 'Get periodic reminders to mitigate your sedentary lifestyle!',
}]
</script>
    
<template>
  <section class="mx-auto w-full h-44 bg-gray-200 flex flex-col justify-end items-center mb-4">
    <div class="font-serif text-4xl">
      Features
    </div>
    <JourneyProgress class="mt-8"></JourneyProgress>
  </section>
  <section class="mt-14">
    <div class="mx-auto flex items-center justify-center gap-8">
      <div class="h-0.5 w-32 bg-black"></div>
      <h2 class="italic text-3xl font-sans font-semibold w-max">Try out our features</h2>
      <div class="h-0.5 w-32 bg-black"></div>
    </div>
    <div class="flex flex-col gap-4 mt-4 max-w-screen-xl p-14 mx-auto">
      <template v-for="feature in features" :key="feature.title">
        <div class="flex p-8 bg-gray-100 rounded-3xl gap-11 items-center">
          <RouterLink class="flex bg-black basis-96 h-32 flex-shrink-0 rounded-[48px] gap-4 items-center px-4"
            :to="{name:feature.route}">
            <img class="w-20 justify-center object-contain" :src="feature.image" :alt="feature.title">
            <span class="text-white font-sans text-3xl">
              {{feature.title}}
            </span>
          </RouterLink>
          <span class="font-sans text-3xl">
            {{feature.desc}}
          </span>
        </div>
      </template>
    </div>
  </section>
  <section class="flex flex-row max-w-[58.25rem] w-full h-10 mb-16 justify-between mx-auto">
    <RouterLink class="mr-auto bg-gray-400 nav-button" :to="{name: 'home'}">
      <img src="@/assets/icons/IconCircleLeft.svg" alt="Exit">
      Exit Journey
    </RouterLink>
    <RouterLink class="ml-auto bg-indigo-400 nav-button" :to="{name: 'journey'}">
      Retake Journey
      <img src="@/assets/icons/IconCircleRight.svg" alt="Continue">
    </RouterLink>
  </section>
</template>
    
<style lang="postcss" scoped>
.nav-button {
  @apply h-10 text-white flex items-center p-3 gap-3;
}
</style>