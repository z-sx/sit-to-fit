<script setup lang="ts">
import HomeButton from '../components/HomeButton.vue';    
</script>

<template>
    <section class="sed">
        <img class="text-1" alt="Sedentary Lifestyle" src="@/assets/images/HomeText1.svg" />
        <img class="image-1" alt="Sitting at work" src="@/assets/images/HomeImage1.svg" />
        <HomeButton>Learn More</HomeButton>
    </section>
    <section class="tool">
        <img class="text-2" alt="Improve Life Standards" src="@/assets/images/HomeText2.svg" />
        <img class="image-2" alt="Stand up" src="@/assets/images/HomeImage2.svg" />
        <HomeButton>Explore Tool</HomeButton>
    </section>
</template>

<style lang="postcss" scoped>
.sed{
    position: relative;
    width: 100%;
}
.text-1 {
    position: relative;
    width: 50vw;
}

.text-2 {
    width: 50vw;
}
</style>