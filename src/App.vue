<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <Header></Header>
  
  <RouterView v-slot="{ Component, route }">
    <Transition name="view">
      <component class="container" :is="Component" :key="route.path" />
    </Transition>
  </RouterView>

  <footer></footer>
</template>

<style lang="postcss" scoped>
.view-enter-active,
.view-leave-active {
  transition: opacity 0.3s ease-out;
}

.view-enter-from,
.view-leave-to {
  opacity: 0;
}
.container{
  margin-top: 40px;
}
</style>