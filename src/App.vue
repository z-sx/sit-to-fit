<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderV2 from './components/HeaderV2.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <HeaderV2></HeaderV2>

  <RouterView>
  </RouterView>
  <Footer></Footer>
</template>

<style lang="postcss" scoped>

</style>