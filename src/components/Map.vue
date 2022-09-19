<script setup lang="ts">
import { GoogleMap, Marker } from "vue3-google-map";
const {center} = defineProps<{
  center: {
    lat: number,
    lng: number,
  }
}>()

</script>
    
<template>
  <GoogleMap 
  api-key="AIzaSyD7iDa0Z3jQrcqB-BOfJxWl03GHE_JhBJY" 
  style="width: 100%; height: 260px" 
  :center="center" 
  :zoom="15">
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>
    
<style lang="postcss" scoped>
</style>
