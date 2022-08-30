<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <Header></Header>
  
  <div class="container">
    <RouterView>
    </RouterView>
  </div>


  <footer></footer>
</template>

<style lang="postcss" scoped>
.container{
  padding-top: 40px;
}
</style>