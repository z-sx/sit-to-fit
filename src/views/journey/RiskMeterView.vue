<script setup lang="ts">
import JourneyHeading from "@/components/JourneyHeading.vue";
import JourneySection from "@/components/JourneySection.vue"
import SedentaryRiskViz from "@/components/SedentaryRiskViz.vue";
import JourneyLayoutV2 from "../../components/JourneyLayoutV2.vue";

</script>
<template>
  <JourneyLayoutV2 :has-skip="true">
    <JourneyHeading>
      Risk Meter Analysis
    </JourneyHeading>
    <JourneySection>
      <h3 class="heading">We will require some of your statistics to determine your sedentary index in comparison to the
        Melbourne CBD index.</h3>
      <SedentaryRiskViz class="viz"></SedentaryRiskViz>
    </JourneySection>
    <section class="nav">
      <RouterLink class="left button" to="/">Exit Journey</RouterLink>
      <RouterLink class="right button" :to="{name:'feature-info'}">Continue</RouterLink>
    </section>
  </JourneyLayoutV2>
</template>

<style lang="postcss" scoped>
.heading {
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #356EAD;
}
.viz{
  border-radius: 2em;
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