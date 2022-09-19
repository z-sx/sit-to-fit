<script setup lang="ts">
import type { ReminderConfig } from '@/components/ReminderItem.vue';
import { ref, watch, reactive } from 'vue';
import ReminderItem from '@/components/ReminderItem.vue';

const configs = reactive<ReminderConfig[]>([
  {
    name: "Water Reminder",
    content: "Remind you to drink water at every:",
    options: [20, 40, 60],
    period: 20,
    toggle: false,
    title: "Time to drink water",
    body: mins => `Remind you to drink water at every ${mins} minutes`
  },
  {
    name: "Take a break",
    content: "Remind you to take break at every:",
    options: [20, 50, 80],
    period: 20,
    toggle: false,
    title: "Time to take break",
    body: mins => `Remind you to take break at every ${mins} minutes`
  }
])

</script>
    
<template>
  <section class="flex flex-col items-center gap-16">
    <section class="mx-auto w-full h-60 bg-gray-200 flex justify-center">
      <div class="font-sans text-4xl pt-20">
        Alert Reminder
      </div>
    </section>
    <h1 class="text-4xl font-sans">
      Alert Reminder Settings
    </h1>

    <div class="w-[58.25rem] flex flex-col gap-16">
      <ReminderItem 
      v-for="config in configs" :key="config.name" 
      :config="config"
      class="reminder-item"></ReminderItem>
    </div>
  </section>
</template>
    
<style lang="postcss" scoped>
.reminder-item {
  box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
  border-radius: 10px;
}
</style>