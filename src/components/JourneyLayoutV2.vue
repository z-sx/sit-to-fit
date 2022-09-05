<script setup lang="ts">
import JourneyProgress from './JourneyProgress.vue';

</script>
    
<template>
  <div class="root">
    <main>
      <slot></slot>
    </main>
    <aside>
      <JourneyProgress></JourneyProgress>
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
  }
}
</style>