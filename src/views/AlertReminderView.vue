<script setup lang="ts">
import BreadCrumb from '@/components/BreadCrumb.vue';
import { computed, reactive, ref, watch } from 'vue';
import ReminderItem from '@/components/ReminderItem.vue';
import Toggle from '@vueform/toggle'
import '@vueform/toggle/themes/default.css'
import { useReminderStore } from '@/stores/alert-reminder';

const store = useReminderStore()

const isNoDisturbToggleDisable = computed(()=>{
  return store.noDisturbConfig.from ==='' || store.noDisturbConfig.to === ''
})
</script>
    
<template>
  <BreadCrumb :nav="['home', 'alert-reminder']"></BreadCrumb>
  <section class="mx-auto w-full h-44 bg-gray-200 flex justify-center items-center">
    <div class="font-sans text-4xl">
      Alert Reminder
    </div>
  </section>
  <div class="w-[58.25rem] flex flex-col gap-8 my-8 mx-auto">
    <div class="font-sans text-xl flex justify-between">
      <span>Do not disturb</span>
      <span>
        From
        <input type="time" class="bg-transparent" 
        v-model="store.noDisturbConfig.from">
      </span>
      <span>
        To
        <input type="time" class="bg-transparent"
        v-model="store.noDisturbConfig.to">
      </span>
      <Toggle v-model="store.noDisturbConfig.toggle" 
      :disabled="isNoDisturbToggleDisable"
      ></Toggle>
    </div>
    <ReminderItem v-for="item, index in store.reminderConfig" :key="item.name" :index="index" class="reminder-item"></ReminderItem>
  </div>
</template>
    
<style lang="postcss" scoped>
.reminder-item {
  box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
  border-radius: 10px;
}
</style>