<script setup lang="ts">
import { onMounted } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
// const center = { lat: 40.689247, lng: -74.044502 };
const center = {lat: -37.8135, lng: 144.966}
</script>
    
<template>
  <GoogleMap 
  api-key="AIzaSyD7iDa0Z3jQrcqB-BOfJxWl03GHE_JhBJY" 
  style="width: 100%; height: 500px" 
  :center="center" 
  :zoom="15">
  </GoogleMap>
</template>
    
<style lang="postcss" scoped>

</style>