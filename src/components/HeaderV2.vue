<script setup lang="ts">
import router from '@/router';
import { computed, ref } from 'vue';

const links = ref([
  {
    name: 'Home',
    to: 'home',
    active: ['home']
  },
  {
    name: 'Journey',
    to: 'sedentary-info',
    active: ['sedentary-info', 'risk-meter', 'feature-info'],
  },
  {
    name: 'Healthy Lifestyle',
    to: 'healthy-lifestyle',
    active: ['healthy-lifestyle', 'physical-activities', 'dietary-plan', 'physical-ergnomics']
  },
  {
    name: 'Recommendations',
    to: 'cards',
    active: ['cards', 'preferences']
  },
  {
    name: 'Alert Reminder',
    to: 'alert-reminder',
    active: ['alert-reminder']
  },
])
const routeName = computed(()=>{
  if(typeof router.currentRoute.value.name === 'string'){
    return router.currentRoute.value.name
  }else{
    return ''
  }
})
</script>
  
<template>
  <header class="z-10 relative max-w-screen-xl mx-auto top-0 left-0 right-0 flex flex-row justify-between align-center px-8 py-2 gap-20 xl:gap-36 h-20">
    <RouterLink class="no-underline" to="/">
      <img alt="Logo" src="@/assets/Logo.svg" />
    </RouterLink>
    <nav class="navigation grow flex flex-row justify-between items-center h-16 gap-1">
      <template v-for="link in links">
        <RouterLink class="button" 
        :class="{'active': link.active.includes(routeName)}"
        :to="{name:link.to}">
          {{link.name}}
        </RouterLink>
      </template>
    </nav>
  </header>
</template>
    
<style lang="postcss" scoped>

.button{
  @apply px-6 py-4 gap-2 leading-8 flex flex-row justify-center rounded-xl items-center font-sans text-base font-bold no-underline hover:bg-black/20 transition active:ring;
  &.active{
    @apply bg-black/10 font-extrabold;
  }
}
</style>