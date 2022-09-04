<script setup lang="ts">
import JouneyHeading from "@/components/JourneyHeading.vue";
import JourneySection from "@/components/JourneySection.vue"
import JourneyLayout from "@/components/JourneyLayout.vue"
import JourneyStat from "@/components/JourneyStat.vue"
import { ref, computed } from "vue";

const mcq = [
  'Sedentary lifestyles lowers your metabolism.',
  'You may have poor blood circulation.',
  'Sedentarty lifestyles raises all casues of mortality.',
  'Impact on the immune system, which may not work well.',
  'Your bone gets weaker due to sedentary lifestyle.',
]
const mcqChoices = ref([])
const mcqResult = computed(()=>{
  if(mcqChoices.value.length === mcq.length){
    return 'Your answer is correct'
  }else{
    return 'All choices are impacts of sedentary lifestyle'
  }
})
const mcqResultDisplay = ref('')
const scq = [
  'Cardiovascular Disease',
  'Diabetes',
  'Down Syndrome',
  'Colon Cancer',
  'Depression',
]
const scqChoice = ref('')
const scqResult = computed(() => {
  if(scqChoice.value === 'Down Syndrome'){
    return 'Your answer is correct'
  }else{
    return 'Down Syndrome is not caused by sedentary lifestyle'
  }
})
const scqResultDisplay = ref('')

</script>
<template>
  <JourneyLayout>
    <JouneyHeading />
    <JourneySection>
      <h3 class="blue-heading">Firstly, let us learn about Sedentary lifestyle</h3>
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
      <h3 class="blue-heading">
        Now, lets find out about Impact of Sedenatary lifestyle on our health by partaking in these MCQs.
      </h3>
      <p></p>
      <fieldset>
        <legend>Select the correct impact/s of sedentary lifestyle.</legend>
        <div v-for="choice, index in mcq" :key="index">
          <input type="checkbox" :id="`mcq_${index}`" :value="choice" v-model="mcqChoices">
          <label :for="`mcq_${index}`">{{choice}}</label>
        </div>
        <button @click="mcqResultDisplay = mcqResult">See result</button>
        <div>{{mcqResultDisplay}}</div>
      </fieldset>
      <fieldset>
        <legend>Which disease is <strong>not</strong> casued by sedentary lifestyle?</legend>
        <div v-for="choice, index in scq" :key="index">
          <input type="radio" :id="`scq_${index}`" :value="choice" v-model="scqChoice">
          <label :for="`scq_${index}`">{{choice}}</label>
        </div>
        <button @click="scqResultDisplay = scqResult">See result</button>
        <div>{{scqResultDisplay}}</div>
      </fieldset>
    </JourneySection>
    <section class="nav">
      <RouterLink class="left button" to="/">Exit Journey</RouterLink>
      <RouterLink class="right button" to="/physical-ergonomics">Continue</RouterLink>
    </section>
  </JourneyLayout>
</template>
    
<style lang="postcss" scoped>
.blue-heading {
  font-family: 'Open Sans', serif;
  color: rgba(53, 110, 173, 0.8);
  font-size: larger;
  margin-bottom: 20px;
}

.paragraph {
  font-family: 'Open Sans', serif;
  margin-bottom: 20px;

  & strong {
    font-weight: bold;
  }
}

.viz {
  box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
  border-radius: 10px;
}

.nav {
  display: flex;
  justify-content: space-between;
  margin-left: 60px;
  padding-bottom: 50px;

  & a {
    padding: 6px 32px;
    font-size: 25px;
    border-radius: 60px;
    font-family: 'Average', serif;
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
  .journey-stat-wrapper{
    margin: auto 0;
    position: relative;
    width: 100vw;
    left: -60px;
    overflow-x: scroll;
    overflow-y: hidden;
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
  .journey-stat-wrapper{
    width:min-content;
    overflow-x: unset;
    &:deep(.journey-stat){
      transform: scale(0.8) translate(-60px);
    }
  }
}

@media (min-width: 1440px) {
  /* large screen */
}
</style>