<script setup lang="ts">
import HomeButton from '../components/HomeButton.vue'; 
</script>

<template>
    <div class="home-container">
        <section class="sed">
            <img class="text-1" alt="Sedentary Lifestyle" src="@/assets/images/HomeText1.svg" />
            <img class="image-1" alt="Sitting at work" src="@/assets/images/HomeImage1.svg" />
            <HomeButton class="button" to="/sedentary-lifestyle">Learn More</HomeButton>
        </section>
        <section class="tool">
            <img class="text-2" alt="Improve Life Standards" src="@/assets/images/HomeText2.svg" />
            <img class="image-2" alt="Stand up" src="@/assets/images/HomeImage2.svg" />
            <HomeButton class="button" to="/tool">Explore Tool</HomeButton>
        </section>
    </div>
</template>

<style lang="postcss" scoped>
.home-container{
    height: 70vw;
    padding-top:40px;
    overflow: hidden;
}
.sed{
    position: relative;
    width: 100%;
    height: 30vw;
    & .text-1{
        position: absolute;
        right: -10px;
        width: 50vw;
    }
    & .image-1{
        position: absolute;
        width: 30vw;
        left: 10vw;
        top: -20px;
    }
    & .button{
        position: absolute;
        bottom: -10px;
        right: 15vw;
    }
}
.tool{
    position: relative;
    width: 100%;
    height: 30vw;
    & .text-2{
        position: absolute;
        left: -10px;
        width: 50vw;
    }
    & .image-2{
        position: absolute;
        width: 40vw;
        right: 5vw;
        bottom: 0px;
    }
    & .button{
        position: absolute;
        left: 15vw;
        bottom: -10px;
    }
}

</style>