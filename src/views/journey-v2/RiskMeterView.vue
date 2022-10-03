<script setup lang="ts">
import SedentaryRiskViz from "../../components/SedentaryRiskViz.vue";
import JourneyProgress from '../../components/JourneyProgress.vue'
</script>
    
<template>
  <section class="mx-auto w-full h-44 bg-gray-200 flex flex-col justify-end items-center mb-4">
    <div class="font-serif text-4xl">
      Risk Meter Analysis
    </div>
    <JourneyProgress class="mt-8"></JourneyProgress>
  </section>
  <section class="my-14">
    <div class="mx-auto flex items-center justify-center gap-8">
      <div class="h-0.5 w-32 bg-black"></div>
      <h2 class="italic text-3xl font-sans font-semibold w-max">
        Check your Sedentary behaviour risk
      </h2>
      <div class="h-0.5 w-32 bg-black"></div>
    </div>
    <div class="max-w-screen-md mx-auto mt-8 rounded-3xl overflow-hidden">
      <SedentaryRiskViz></SedentaryRiskViz>
    </div>
  </section>
  <section class="flex flex-row max-w-[58.25rem] w-full h-10 mb-16 justify-between mx-auto">
    <RouterLink class="mr-auto bg-gray-400 hover:bg-gray-500 nav-button" :to="{name: 'home'}">
      <img src="@/assets/icons/IconCircleLeft.svg" alt="Exit">
      Exit Journey
    </RouterLink>
    <RouterLink class="ml-auto bg-blue-600 hover:bg-blue-700 nav-button" :to="{name: 'feature-info'}">
      Try Our Features
      <img src="@/assets/icons/IconCircleRight.svg" alt="Continue">
    </RouterLink>
  </section>
</template>
    
<style lang="postcss" scoped>
.nav-button {
  @apply h-10 text-white flex items-center p-3 gap-3 focus:ring;
}
</style>