<script setup lang="ts">import { computed } from 'vue';
import { useRoute } from 'vue-router';

const steps = [
  {
    text: "Step 1. Start Sedentary Journey",
    link: "sedentary-info",
  },
  {
    text: "Step 2. Risk Meter Analysis",
    link: "risk-meter",
  },
  {
    text: "Step 3. Preventive Measures",
    link: "measure-info"
  }
]
const route = useRoute()
const curr =  computed(() => {
  return steps.findIndex(step => step.link === route.name)
})
const prev = computed(() => {
  return curr.value - 1
})
const next = computed(() => {
  return curr.value + 1
})
</script>
    
<template>
  <div class="progress">
    <div>
      <span>Progress</span>
      <div>
        <RouterLink class="prev" :to="{name: steps[prev]?.link ?? ''}">
          <img src="@/assets/images/IconLeft.svg" alt="Previous page">
        </RouterLink>
        <RouterLink v-for="step in steps" :to="{name: step.link ?? ''}" class="page"></RouterLink>
        <RouterLink class="next" :to="{name: steps[next]?.link ?? ''}">
          <img src="@/assets/images/IconRight.svg" alt="Next page">
        </RouterLink>
      </div>
    </div>
    <RouterLink v-for="step in steps" :to="{name: step.link}">
      {{step.text}}
    </RouterLink>
  </div>
</template>
    
<style lang="postcss" scoped>
.progress {
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: #F4FAFF;
  border-radius: 32px;
  font-family: 'Open Sans';

  &>div {
    display: flex;

    &>span {
      font-weight: 600;
      margin-right: auto;
    }

    &>div {
      display: flex;
      gap: 12px;
      align-items: center;
      & .prev, & .next{
        line-height: 0;
      }
      & img{
        width: 24px;
      }
      & .page {
        width: 20px;
        height: 16px;
        background: #DCF0FF;
        border-radius: 11px;
        &.router-link-active{
          background: #0981F0;;
        }
      }
    }
  }

  &>a {
    text-decoration: none;
    color: black;

    &.router-link-active {
      font-weight: 700;
    }
  }

  &>* {
    margin-bottom: calc(var(--gutter) / 2);
  }
}
</style>