<script setup lang="ts">
import { defineProps, onUnmounted, reactive, ref, toRef, toRefs, watch } from 'vue'
import Toggle from '@vueform/toggle'
import '@vueform/toggle/themes/default.css'
import { useReminderStore } from '@/stores/alert-reminder';
import { storeToRefs } from 'pinia';
import { $, } from 'vue/macros';

const props = defineProps<{
  index: number
}>()
const index = $(toRefs(props).index)

const config = $(storeToRefs(useReminderStore()).reminderConfig)
const noDisturbConfig = $(storeToRefs(useReminderStore()).noDisturbConfig)

const intervalId = ref(0)
const updateIntervalId = ref(0)
const startTime = ref(0)
const progress = ref(0)
const ms = ref(0)


watch([() => config[index].period, () => config[index].toggle], ([period, toggle]) => {
  resetNotification(period, toggle)
})
resetNotification(config[index].period, config[index].toggle)

function resetNotification(period: number, toggle: boolean){
  clearInterval(intervalId.value)
  clearInterval(updateIntervalId.value)
  progress.value = 0
  if (toggle) {
    ms.value = period * 60 * 1000
    startTime.value = Date.now()
    intervalId.value = window.setInterval(() => {
      const now = new Date();
      const hourMin = `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}`
      console.log(hourMin, noDisturbConfig)
      if (noDisturbConfig.toggle &&
        (noDisturbConfig.from <= hourMin && noDisturbConfig.to >= hourMin) ||
        (noDisturbConfig.from > noDisturbConfig.to && noDisturbConfig.from >= hourMin) ||
        (noDisturbConfig.from > noDisturbConfig.to && noDisturbConfig.to <= hourMin)
      ) return
      new Notification(config[index].title, { body: `Remind you to ${config[index].activity} at every ${period} minutes ` })
    }, ms.value)
    updateIntervalId.value = window.setInterval(() => {
      progress.value = (Date.now() - startTime.value) % ms.value
    }, 300)
    Notification.requestPermission()
  }
}

onUnmounted(() => {
  clearInterval(intervalId.value)
  clearInterval(updateIntervalId.value)
})
</script>
    
<template>
  <div class="flex flex-col gap-4 p-8 bg-white">
    <div class="flex">
      <h3 class="font-sans text-2xl">
        {{config[index].title}}
      </h3>
      <Toggle class="ml-auto" v-model="config[index].toggle"></Toggle>
    </div>
    <div>
      <span>
        {{config[index].content}}
      </span>
      <select v-model="config[index].period">
        <option v-for="option in config[index].options" :key="option" :value="option">
          {{option}} Minutes
        </option>
      </select>
    </div>
    <progress v-show="config[index].toggle" :max="ms" :value="progress"></progress>
  </div>
</template>
    
<style lang="postcss" scoped>
progress {
  border-width: revert;
  border-color: revert;
  border-style: revert;
  width: 100%;
}
</style>