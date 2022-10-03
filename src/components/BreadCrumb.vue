<script setup lang="ts">
import { defineProps } from 'vue';

const text: Record<string, string> = {
  'home': 'Home',
  'journey': 'Journey',
  'sedentary-info': 'Sedentary Lifestyle',
  'risk-meter': 'Risk Meter Analysis',
  'feature-info': 'Features',
  'healthy-lifestyle': 'Healthy Lifestyle',
  'physical-activities': 'Physical Activities',
  'dietary-plan': 'Dietary Plans',
  'physical-ergonomics': 'Physical Ergonomics',
  'preferences': 'Preferences',
  'recommendation': 'Recommendations',
  'cards': 'Cards',
  'alert-reminder': 'Alert Reminder',
}

const { nav } = defineProps<{
  nav: string[]
}>();

</script>
<template>
  <section class="pl-14 pr-4 bg-gray-200 w-max">
    <template v-for="item, index in nav" :key="index">
      <span v-if="index>0"> / </span>
      <RouterLink :to="{name:item}">{{text[item]}}</RouterLink>
    </template>
  </section>
</template>
<style lang="postcss" scoped>

</style>