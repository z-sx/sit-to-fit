<script setup lang="ts">
import {defineProps, onUnmounted, ref, toRefs, watch } from 'vue'
import Toggle from '@vueform/toggle'
import '@vueform/toggle/themes/default.css'

export interface ReminderConfig {
  name: string
  content: string
  options: number[]
  period: number
  toggle: boolean
  title: string
  body: (mins: number) => string
}

const props = defineProps<{
  config: ReminderConfig
}>()
const {config} = toRefs(props)

const intervalId = ref(0)
const updateIntervalId = ref(0)
const startTime = ref(0)
const progress = ref(0)

watch([()=>config.value.period, ()=>config.value.toggle], ([period, toggle]) => {
  clearInterval(intervalId.value)
  clearInterval(updateIntervalId.value)
  progress.value = 0
  if (toggle) {
    const ms = period * 60 * 1000
    startTime.value = Date.now()
    intervalId.value = window.setInterval(() => {
      new Notification(config.value.title, {body: config.value.body(period)})
    }, ms)
    updateIntervalId.value = window.setInterval(() => {
      progress.value = (Date.now() - startTime.value)%(config.value.period * 60 * 1000)
    }, 300)
    Notification.requestPermission()
  }
})

onUnmounted(() => {
  clearInterval(intervalId.value)
  clearInterval(updateIntervalId.value)
})
</script>
    
<template>
  <div class="flex flex-col gap-4 p-8 bg-white">
    <div class="flex">
      <h3 class="font-sans text-2xl">
        {{config.title}}
      </h3>
      <Toggle class="ml-auto" v-model="config.toggle"></Toggle>
    </div>
    <div>
      <span>
        {{config.content}}
      </span>
      <select v-model="config.period">
        <option v-for="option in config.options" :key="option" :value="option">
          {{option}} Minutes
        </option>
      </select>
    </div>
    <progress :max="config.period * 60 * 1000" :value="progress"></progress>
  </div>
</template>
    
<style lang="postcss" scoped>
progress{
  border-width: revert;
  border-color: revert;
  border-style: revert;
  width: 100%;
}
</style>