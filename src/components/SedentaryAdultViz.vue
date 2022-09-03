<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue';
// resize the viz when its width is changed
const el = ref<HTMLIFrameElement | null>(null);
const resizeObserver = new ResizeObserver(() => {
  const width = el.value!.getBoundingClientRect().width
  const height = width * 0.6
  el.value!.style.height = `${height}px`;
})
onMounted(() => {
  resizeObserver.observe(el.value!)
})
onBeforeUnmount(() => {
  resizeObserver.unobserve(el.value!)
})

</script>
    
<template>
  <iframe ref="el"
    src="https://sit-to-fit.s3.ap-southeast-2.amazonaws.com/sedentary-adult-activity/index.html"
    frameborder="0" lazy></iframe>
</template>
    
<style>
iframe {
  width: 100%;
}
</style>