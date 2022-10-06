<script setup lang="ts">
import { ref } from 'vue';

const links = ref([
  {
    name: 'Home',
    to: 'home'
  },
  {
    name: 'Journey',
    to: 'sedentary-info',
  },
  {
    name: 'Healthy Lifestyle',
    to: 'healthy-lifestyle',
  },
  {
    name: 'Recommendations',
    to: 'cards',
  },
  {
    name: 'Alert Reminder',
    to: 'alert-reminder',
  },
])
</script>
  
<template>
  <header class="z-10 relative max-w-screen-xl mx-auto top-0 left-0 right-0 flex flex-row justify-between align-center px-8 py-2 gap-20 xl:gap-36 h-20">
    <RouterLink class="no-underline" to="/">
      <img alt="Logo" src="@/assets/Logo.svg" />
    </RouterLink>
    <nav class="navigation grow flex flex-row justify-between items-center h-16 gap-1">
      <template v-for="link in links">
        <RouterLink class="button" :to="{name:link.to}">
          {{link.name}}
        </RouterLink>
      </template>
    </nav>
  </header>
</template>
    
<style lang="postcss" scoped>

.button{
  @apply px-6 py-4 gap-2 leading-8 flex flex-row justify-center rounded-xl items-center font-sans text-base font-bold no-underline hover:bg-black/20 transition active:ring;
  &.router-link-active{
    @apply bg-black/10;
  }
}
</style>