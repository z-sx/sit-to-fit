<script setup lang="ts">
import { ref } from 'vue';

const links = ref([
  {
    name: 'Journey',
    to: '/journey',
  },
  {
    name: 'Healthy Lifestyle',
    to: '/healthy-lifestyle',
  },
  {
    name: 'Recommendations',
    to: '/recommendations',
  },
  {
    name: 'Alert Reminder',
    to: '/alert-reminder',
  },
  {
    name: 'Notifications',
    to: '/notifications',
  },
])
</script>
  
<template>
  <header class="z-10 relative max-w-screen-lg mx-auto top-0 left-0 right-0 flex flex-row justify-between align-center px-8 py-2 gap-12 h-20">
    <RouterLink class="no-underline" to="/">
      <img alt="Logo" src="@/assets/Logo.svg" />
    </RouterLink>
    <nav class="navigation flex flex-row justify-center items-center h-16 grow-0 gap-1">
      <template v-for="link in links">
        <RouterLink class="button" :to="link.to">
          {{link.name}}
        </RouterLink>
      </template>
    </nav>
    <RouterLink class="button " to="/become-new-user">
      <img src="@/assets/icons/IconSmile.svg" alt="Smile Icon">
      Become new user
    </RouterLink>
  </header>
</template>
    
<style lang="postcss" scoped>

.button{
  @apply p-4 gap-2 leading-8 flex flex-row justify-center rounded-xl items-center font-sans text-base font-bold no-underline;
}
</style>