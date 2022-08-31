<script setup lang="ts">
const {to} = defineProps<{
    to: string
}>()
</script>

<template>
    <RouterLink :to="to">
        <slot></slot>
        <img src="@/assets/images/IconButtonRight.png" alt="icon">
    </RouterLink>
</template>

<style lang="postcss" scoped>
a{
    text-decoration: none;
    color: black;
    display: flex;
    user-select: none;
    font-size: 20px;
    font-weight: 600;
    line-height: 36px;
    padding: 4px 10px;
    border-radius: 40px;
    border: 1px black solid;
    box-sizing: border-box;
    font-family: 'Average', serif;
    text-align: middle;
    gap: 8px;
    background-color: white;
    height:48px;
    &:hover{
        background-color: var(--color-hover);
    }
    &:active{
        background-color: var(--color-press);
    }
    &:focus{
      box-shadow: var(--color-focus);
    }
}
img{
    display: block;
    pointer-events: none;
    max-height: 80%;
    margin:auto 0;
}
</style>