<script setup lang="ts">
</script>

<template>
    <div class="home-container">
        <section class="sed">
            <img class="text-1" alt="Sedentary Lifestyle" src="@/assets/images/HomeText1.svg" />
            <img class="image-1" alt="Sitting at work" src="@/assets/images/HomeImage1.svg" />
            <RouterLink class="button" to="/sedentary-lifestyle">
                Learn More
                <img src="@/assets/images/IconButtonRight.png" alt="icon">
            </RouterLink>
        </section>
        <section class="tool" disabled>
            <img class="text-2" alt="Improve Life Standards" src="@/assets/images/HomeText2.svg" />
            <img class="image-2" alt="Stand up" src="@/assets/images/HomeImage2.svg" />
            <RouterLink class="button" to="/tool">
                Explore Tool
                <img src="@/assets/images/IconButtonRight.png" alt="icon">
            </RouterLink>
        </section>
    </div>
</template>

<style lang="postcss" scoped>
.home-container{
    height: 900px;
    overflow: hidden;
}
.sed{
    position: relative;
    width: 100%;
    height: 432px;
    /* & .text-1{
        position: absolute;
        right: -10px;
        width: 50vw;
    } */
    & .text-1{
        position: absolute;
        right: -10px;
        width: 720px;
    }
    /* & .image-1{
        position: absolute;
        width: 30vw;
        left: 10vw;
        top: -20px;
    } */
    & .image-1{
        position: absolute;
        width: 432px;
        left: 144px;
        top: -20px;
    }
    & .button{
        position: absolute;
        bottom: -20px;
        right: 216px;
    }
}
.tool{
    position: relative;
    width: 100%;
    height: 432px;

    /* & .text-2{
        position: absolute;
        left: -10px;
        width: 50vw;
    } */
    & .text-2{
        position: absolute;
        left: -10px;
        width: 720px;
    }
    /* & .image-2{
        position: absolute;
        width: 40vw;
        right: 5vw; 
        bottom: 0px;
    } */
    & .image-2{
        position: absolute;
        width: 576px;
        right: 72px; 
        bottom: 0px;
    }
    /* & .button{
        position: absolute;
        left: 15vw;
        bottom: -10px;
    } */
    & .button{
        position: absolute;
        left: 216px;
        bottom: -20px;
    }
}
a.button{
    text-decoration: none;
    color: black;
    display: flex;
    user-select: none;
    font-size: 32px;
    font-weight: 600;
    padding: 12px 24px;
    border-radius: 40px;
    border: 1px black solid;
    box-sizing: border-box;
    font-family: 'Average', serif;
    text-align: middle;
    gap: 8px;
    height:80px;
    & img{
        display: block;
        pointer-events: none;
        max-height: 80%;
        margin:auto 0;
    }
}

</style>