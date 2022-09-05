<script setup lang="ts">
import JourneyHeading from "@/components/JourneyHeading.vue";
import JourneySection from "@/components/JourneySection.vue"
import JourneyStat from "@/components/JourneyStat.vue"
import { ref, computed } from "vue";
import JourneyProgress from "../../components/JourneyProgress.vue";
import JourneyLayoutV2 from "../../components/JourneyLayoutV2.vue";

interface MCQResult{
  ok: boolean,
  message: string,
}

const mcqChoices1 = [
  'Sedentary lifestyles lowers your metabolism.',
  'You may have poor blood circulation.',
  'Sedentarty lifestyles raises all casues of mortality.',
  'Impact on the immune system, which may not work well.',
  'Your bone gets weaker due to sedentary lifestyle.',
]
const mcqInput1 = ref(new Set())
function checkMcq1(): MCQResult{
  const ok = mcqInput1.value.size === mcqChoices1.length
  if (ok){
    return {ok, message: 'Your answer is correct'}    
  }else{
    return {ok, message: 'All choices are impacts of sedentary lifestyle'}
  }
}
const mcqResult1 = ref<MCQResult|null>(null)

const mcqChoices2 = [
  'Cardiovascular Disease',
  'Diabetes',
  'Down Syndrome',
  'Colon Cancer',
  'Depression',
]
const mcqInput2 = ref(new Set())
function checkMcq2(): MCQResult {
  const ok = mcqInput2.value.size === 1 && mcqInput2.value.has('Down Syndrome')
  if (ok){
    return {ok, message: 'Your answer is correct'} 
  }else{
    return {ok, message: 'Down Syndrome is not caused by sedentary lifestyle'} 
  }
}
const mcqResult2 = ref<MCQResult|null>(null)


</script>
<template>
  <JourneyLayoutV2>
    <JourneyHeading>
      Journey to learn about Sedentary lifestyle
    </JourneyHeading>
    <JourneySection>
      <h3 class="heading">Firstly, let us learn about Sedentary lifestyle</h3>
      <p class="paragraph">
        Sedentary lifestyle is the abundance of sitted behaviour that involves very little physical activity.
        Desk jobs require the person to sit on a chair for elongated hours.
        <br>
        <br>
        You are living a sedentary lifestyle if you fall in one of the category below:
      </p>
      <div class="journey-stat-wrapper">
        <JourneyStat class="journey-stat"></JourneyStat>
      </div>
    </JourneySection>
    <JourneySection>
      <h3 class="heading">
        Now, lets find out about Impact of Sedenatary lifestyle on our health by partaking in these MCQs.
      </h3>
      <p class="question">
        Select the correct impact/s of sedentary lifestyle.
      </p>
      <fieldset class="card">
        <div v-for="choice, index in mcqChoices1" :key="index">
          <input type="checkbox" :id="`mcq1_${index}`" :value="choice" v-model="mcqInput1">
          <label :for="`mcq1_${index}`">{{choice}}</label>
        </div>
        <button class="button result" @click="mcqResult1 = checkMcq1()">See result</button>
        <p class="result" v-if="mcqResult1" :class="{success: mcqResult1.ok, failure: !mcqResult1.ok}">
          {{mcqResult1.message}}
        </p>
        <p class="result" v-else></p>
      </fieldset>
      <p class="question">
        Which disease is <strong>not</strong> casued by sedentary lifestyle?
      </p>
      <fieldset class="card">
        <div v-for="choice, index in mcqChoices2" :key="index">
          <input type="checkbox" :id="`mcq2_${index}`" :value="choice" v-model="mcqInput2">
          <label :for="`mcq2_${index}`">{{choice}}</label>
        </div>
        <button class="button result" @click="mcqResult2 = checkMcq2()">See result</button>
        <p class="result" v-if="mcqResult2" :class="{success: mcqResult2.ok, failure: !mcqResult2.ok}">
          {{mcqResult2.message}}
        </p>
        <p class="result" v-else></p>
      </fieldset>
    </JourneySection>
    <section class="nav">
      <RouterLink class="left button" :to="{name: 'home'}">Exit Journey</RouterLink>
      <RouterLink class="right button" :to="{name: 'risk-meter'}">Continue</RouterLink>
    </section>
  </JourneyLayoutV2>
</template>
<style lang="postcss" scoped>
.root {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--gutter);

  & main {
    grid-column: span 8;
  }

  & aside {
    grid-column: span 4;
    margin-right: var(--margin);
  }
}

.heading {
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  margin-bottom: 20px;
  font-style: italic;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: #03118D;
}

.paragraph {
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 20px;

  & strong {
    font-weight: bold;
  }
}

.question {
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 400;
  letter-spacing: 0.04em;
}

.card {
  box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
  border-radius: 10px;
}

fieldset {
  background-color: white;
  border: none;
  padding: 25px;
  font-size: large;

  & input {
    margin-right: 1em;
  }

  & .success {
    color: green;
  }

  & .failure {
    color: red;
  }

  & button.result {
    padding: 10px;
  }

  & p.result {
    display: block;
    height: 1em;
  }
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

@media (min-width: 0px) {

  /* mobile */
  .journey-stat-wrapper {
    position: relative;
    left: calc(-1 * var(--margin));
    padding-left: var(--margin);
    overflow-x: scroll;
  }
}

@media (min-width: 600px) {
  /* tablet */
}

@media (min-width: 840px) {
  /* laptop */
}

@media (min-width: 1240px) {

  /* desktop */
  .journey-stat-wrapper {
    width: min-content;
    overflow-x: unset;
    padding: 0;
    &:deep(.journey-stat) {
      transform: scale(0.8) translate(-60px);
    }
  }
}

@media (min-width: 1440px) {
  /* large screen */
}
</style>