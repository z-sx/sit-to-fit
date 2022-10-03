<script setup lang="ts">
import BreadCrumb from '@/components/BreadCrumb.vue'
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
  <BreadCrumb :nav="['home', 'journey', 'feature-info']"></BreadCrumb>
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
    <div class="flex flex-col gap-8 mt-4 max-w-screen-xl p-14 mx-auto">
      <div class="bg-white w-max rounded-xl relative mx-auto card-shadow">
        <img src="@/assets/FeatureInfoView/lifestyle.svg">
        <RouterLink class="absolute flex justify-center items-center h-12 w-40 text-white bottom-3 right-32 rounded-full bg-blue-600 hover:bg-blue-700 focus:ring"
        :to="{name:'healthy-lifestyle'}">Explore</RouterLink>
      </div>
      <div class="bg-white w-max rounded-xl relative mx-auto card-shadow">
        <img src="@/assets/FeatureInfoView/recommend.svg">
        <RouterLink class="absolute flex justify-center items-center h-12 w-40 text-white bottom-3 right-32 rounded-full bg-blue-600 hover:bg-blue-700 focus:ring"
        :to="{name:'recommendation'}">Engage Now</RouterLink>
      </div>
      <div class="bg-white w-max rounded-xl relative mx-auto card-shadow">
        <img src="@/assets/FeatureInfoView/reminder.svg">
        <RouterLink class="absolute flex justify-center items-center h-12 w-40 text-white bottom-3 right-32 rounded-full bg-blue-600 hover:bg-blue-700 focus:ring"
        :to="{name:'alert-reminder'}">Set Your Reminder</RouterLink>
      </div>
    </div>
  </section>
  <section class="flex flex-row max-w-[58.25rem] w-full h-10 mb-16 justify-between mx-auto">
    <RouterLink class="mr-auto bg-gray-400 hover:bg-gray-500 nav-button" :to="{name: 'home'}">
      <img src="@/assets/icons/IconCircleLeft.svg" alt="Exit">
      Exit Journey
    </RouterLink>
    <RouterLink class="ml-auto bg-blue-600 hover:bg-blue-700 nav-button" :to="{name: 'journey'}">
      Retake Journey
      <img src="@/assets/icons/IconRestart.svg" alt="Restart">
    </RouterLink>
  </section>
</template>
    
<style lang="postcss" scoped>
.nav-button {
  @apply h-10 text-white flex items-center p-3 gap-3 focus:ring;
}
.card-shadow{
  box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
}
</style>