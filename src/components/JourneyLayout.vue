<script setup lang="ts">
</script>
    
<template>
<div class="journey-layout">
    <main>
        <slot></slot>
    </main>
    <aside>
        <slot name="sidebar"></slot>
    </aside>
</div>
</template>
    
<style lang="postcss" scoped>
.journey-layout{
    display: flex;
    & main{
        width: 60%;
    }
    & aside{
        width: 40%;
    }
}
</style>