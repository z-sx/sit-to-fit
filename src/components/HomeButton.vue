<script setup lang="ts">
</script>

<template>
    <button>
        <slot></slot>
        <img src="@/assets/images/IconButtonRight.png" alt="icon">
    </button>
</template>

<style lang="postcss" scoped>
button{
    display: flex;
    user-select: none;
    font-size: 20px;
    font-weight: 600;
    line-height: 36px;
    padding: 4px 10px;
    border-radius: 40px;
    border: 1px black solid;
    box-sizing: border-box;
    font-family: 'Average';
    text-align: middle;
    gap: 8px;
    background-color: white;
}
img{
    display: block;
    pointer-events: none;
    width: 24px;
    margin:auto 0;
}
</style>