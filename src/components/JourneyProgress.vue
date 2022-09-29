<script setup lang="ts">import { computed } from 'vue';
import { useRoute } from 'vue-router';

const steps = [
  {
    text: "Start Sedentary Journey",
    link: "sedentary-info",
  },
  {
    text: "Risk Meter Analysis",
    link: "risk-meter",
  },
  {
    text: "Features",
    link: "feature-info"
  }
]
const route = useRoute()
const curr = computed(() => {
  return steps.findIndex(step => step.link === route.name)
})
const prev = computed(() => {
  return curr.value - 1
})
const next = computed(() => {
  return curr.value + 1
})
</script>
    
<template>
  <div class="flex bg-color h-14 items-center gap-4 p-3 rounded-xl w-[48rem]">
    <span class="font-sans font-semibold">Progress</span>
    <div class="flex gap-4 items-center justify-between grow">
      <RouterLink class="prev" :to="{name: steps[prev]?.link ?? ''}">
        <img class="w-6" src="@/assets/images/IconLeft.svg" alt="Previous page">
      </RouterLink>
      <RouterLink 
      class="flex items-center gap-2"
      v-for="step in steps" :to="{name: step.link ?? ''}">
        <div class="w-5 h-4 bg-cyan-100 opacity-80 rounded-full"></div>
        <span class="font-serif text-base">{{step.text}}</span>
      </RouterLink>
      <RouterLink class="next" :to="{name: steps[next]?.link ?? ''}">
        <img class="w-6" src="@/assets/images/IconRight.svg" alt="Next page">
      </RouterLink>
    </div>
  </div>
</template>
    
<style lang="postcss" scoped>
.bg-color{
  background-color: rgb(221,231,246);
}
.router-link-active{
  &>div{
    @apply bg-blue-600; 
  }
  &>span{
    @apply font-bold;
  }
}
</style>