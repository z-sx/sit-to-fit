<script setup lang="ts">
import JourneyHeading from "@/components/JourneyHeading.vue";
import JourneySection from "@/components/JourneySection.vue"
import JourneyMeasure from "../../components/JourneyMeasure.vue"
</script>
        
<template>
  <JourneyHeading>
    Preventive measures
  </JourneyHeading>
  <p class="description">
    Now you have a risk analysis score and know what it means. The next step is to learn about preventive measures that may help you improve your health. Here are  5 preventive measures listed bellow.
  </p>
  <JourneyMeasure>

  </JourneyMeasure>
  <section class="nav">
    <RouterLink class="left button" to="/">Exit Journey</RouterLink>
    <RouterLink class="right button" :to="{name:'measure-info'}">Continue</RouterLink>
  </section>
</template>
        
<style lang="postcss" scoped>
  .description{
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 0.04em;
  font-weight: 400;
  }
  .nav {
  display: flex;
  justify-content: space-between;
  margin: var(--margin);

  & a {
    padding: 6px 32px;
    font-size: 25px;
    border-radius: 60px;
    font-family: 'open sans', sans-serif;
    text-decoration: none;

    &.left {
      color: white;
      background-color: rgba(134, 127, 127, 0.5);
    }

    &.right {
      color: white;
      background-color: #2C99E3;
    }
  }
}
</style>