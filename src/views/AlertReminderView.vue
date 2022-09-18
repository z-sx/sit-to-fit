<script setup lang="ts">
// @ts-nocheck
import Toggle from '@vueform/toggle'
import '@vueform/toggle/themes/default.css'
import { ref, watch } from 'vue';

const period = ref<string>('20')
const toggle = ref<boolean>(false)
let intervalId = 0
// Notification.requestPermission()

watch([period, toggle], () => {
  clearInterval(intervalId)
  if (toggle.value){
    const ms = parseInt(period.value) * 60 * 1000
    intervalId = setInterval(sendNotification, ms)
    Notification.requestPermission()
  }
})

function sendNotification(){
  new Notification(
    "Time to drink water", 
    {body: `Remind you to drink water at every ${period.value} minutes`}
  )
}
</script>
    
<template>
  <section class="flex flex-col items-center gap-16 my-16">
    <h1 class="text-4xl font-sans">
      Alert Reminder Settings
    </h1>

    <ul class="w-[58.25rem]">
      <li class="flex flex-row p-8 bg-white">
        <span>
          Remind you to drink water at every:
        </span>
        <select v-model="period">
          <option value="20">20 Minutes</option>
          <option value="40">40 Minutes</option>
          <option value="60">60 Minutes</option>
        </select>
        <Toggle class="ml-auto" v-model="toggle"></Toggle>
      </li>
    </ul>
  </section>
</template>
    
<style lang="postcss" scoped>
</style>