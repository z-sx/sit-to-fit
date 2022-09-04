<script setup lang="ts">
</script>
    
<template>
  <h1>
    <slot></slot>
  </h1>
</template>
    
<style lang="postcss" scoped>
h1 {
  display: inline-block;
  font-family: 'open sans';
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  padding: 1em var(--margin);
  margin-bottom: var(--gutter);
  background-color: rgba(134, 127, 127, 0.35);
  border-radius: 0 48px 48px 0;
  letter-spacing: 0.04em;
}
</style>