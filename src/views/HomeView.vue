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
.button {
  text-decoration: none;
  color: black;
  display: flex;
  user-select: none;
  font-weight: 600;
  border-radius: 40px;
  border: 1px black solid;
  box-sizing: border-box;
  font-family: 'Average', serif;
  text-align: middle;
  gap: 8px;

  & img {
    display: block;
    pointer-events: none;
    max-height: 80%;
    margin: auto 0;
  }
}
@media (min-width: 0px) {
  
  .home-container {
    height: 140vw;
  }
  .sed, .tool{
    height: 70vw;
    overflow-x: hidden;
  }
  .button{
    font-size: 4vw;
    height: 9vw;
    padding: 1vw 2.5vw;
  }
  .sed {
    & .text-1 {
      right: -2vw;
      width: 100vw;
    }

    & .image-1 {
      width: 28vw;
      left: 3vw;
      bottom: -10px;
    }

    & .button {
      bottom: 8vw;
      right: 8vw;
    }
  }

  .tool {
    & .text-2 {
      left: -2vw;
      width: 100vw;
    }

    & .image-2 {
      width: 40vw;
      right: -10px;
      bottom: 30px;
    }

    & .button {
      bottom: 8vw;
      left: 8vw;
    }
  }
}

@media (min-width: 600px) {
  .home-container {
    height: 900px;
  }
  .sed, .tool{
    height: 460px;
  }
  .button{
    font-size: 24px;
    height: 64px;
    padding: 12px 16px;
  }
  .sed {
    & .text-1 {
      right: -10px;
      width: 600px;
    }

    & .image-1 {
      width: 28vw;
      left: 5vw;
      bottom: 10px;
    }

    & .button {
      bottom: 80px;
      right: 100px;
    }
  }

  .tool {
    & .text-2 {
      left: -10px;
      width: 600px;
    }

    & .image-2 {
      width: 40vw;
      right: -10px;
      bottom: 30px;
    }

    & .button {
      bottom: 80px;
      left: 100px;
    }
  }
}

@media (min-width: 840px) {
  .home-container {
    height: 1100px;
  }
  .sed, .tool{
    height: 480px;
  }
  .sed {
    & .text-1 {
      width: 720px;
    }

    & .image-1 {
      width: 28vw;
      left: 5vw;
      bottom: -10px;
    }

    & .button {
      bottom: 40px;
      right: 216px;
    }
  }

  .tool {
    & .text-2 {
      width: 720px;
    }

    & .image-2 {
      width: 50vw;
      right: -10px;
      bottom: -140px;
    }

    & .button {
      left: 216px;
      bottom: 40px;
    }
  }
}

@media (min-width: 1240px) {
  .home-container {
    height: 1100px;
  }
  .button{
    font-size: 32px;
    height: 80px;
    padding: 12px 20px;
  }
  .sed, .tool{
    height: 460px;
  }
  .sed {
    & .image-1 {
      width: 432px;
      left: 60px;
      top: -20px;
    }

    & .button {
      bottom: -20px;
      right: 216px;
    }
  }

  .tool {
    & .image-2 {
      width: 576px;
      right: -10px;
      bottom: 0px;
    }

    & .button {
      left: 216px;
      bottom: -20px;
    }
  }
}

@media (min-width: 1440px) {
  .sed {
    & .image-1 {
      left: 144px;
    }
  }

  .tool {
    & .image-2 {
      right: 72px;
    }
  }
}

.sed,
.tool {
  position: relative;
  width: 100%;

  &>* {
    position: absolute;
  }
}
</style>