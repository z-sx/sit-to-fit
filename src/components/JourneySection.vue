<script setup lang="ts">
</script>
    
<template>
<div>
    <slot></slot>
</div>
</template>
    
<style lang="postcss" scoped>
div{
    --radius: 60px;
    padding: 0.5em calc(var(--radius) / 2) 0.5em var(--margin);
    background: rgba(220, 240, 255, 0.4);
    border-radius: 0px var(--radius) var(--radius) 0px;
    margin-bottom: var(--gutter);
}
</style>