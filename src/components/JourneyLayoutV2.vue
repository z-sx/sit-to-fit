<script setup lang="ts">
import JourneyProgress from './JourneyProgress.vue';


const props = withDefaults(defineProps<{
  hasSkip: boolean
}>(), {
  hasSkip: false
})
</script>
    
<template>
  <div class="root">
    <main>
      <slot></slot>
    </main>
    <aside>
      <JourneyProgress></JourneyProgress>
      <div class="skip" v-if="props.hasSkip">
        Skip the Journey?
        <br>
        Jump directly on our tool!
        <RouterLink to="/tool" class ="button">
          Use Tool
        </RouterLink>
      </div>
    </aside>
  </div>
</template>
    
<style lang="postcss" scoped>
.root {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--gutter);

  & main {
    grid-column: span 8;
  }

  & aside {
    grid-column: span 4;
    margin-right: var(--margin);
    & .skip{
      box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
      border-radius: 2em;
      padding: 14px 16px;
      font-family: 'Open Sans';
      font-size: 18px;
      letter-spacing: 0.04em;
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: var(--gutter);
      position: sticky;
      top: var(--gutter);
      & a{
        display: block;
        margin: 12px auto;  
        box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
        border-radius: 10px;
        text-decoration: none;
        padding: 8px 48px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        color: black;
      }
    }
  }
}
</style>