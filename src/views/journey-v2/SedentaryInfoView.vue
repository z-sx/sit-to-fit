<script setup lang="ts">
import JourneyStat from '@/components/JourneyStat.vue';
import { reactive, ref } from 'vue';

const mcq = [
  'Sedentary lifestyles lowers your metabolism.',
  'You may have poor blood circulation.',
  'Sedentary lifestyles raises all causes of mortality.',
  'Impact on the immune system, which may not work well.',
  'Your bone gets weaker due to sedentary lifestyle.',
]
const mcqInput = reactive(new Set());
function check(index: number){
  if(showResult.value) return
  if(mcqInput.has(index)){
    mcqInput.delete(index)
  }else{
    mcqInput.add(index)
  }
}
const showResult = ref(false)
const answer = new Set([0, 1, 2, 3, 4])

</script>
    
<template>
  <div class="flex flex-col gap-16">
    <section class="flex flex-col justify-between items-center h-[40rem] max-w-screen-lg w-full mx-auto bg-cover py-16 px-14">
      <div>
        <h1 class="text-4xl font-sans">
          Journey to learn about Sedentary lifestyle
        </h1>
        <br>
        <p class="flex flex-col text-center">
          A sedentary lifestyle is the prolonged sitting behaviour that involves very little physical activity.
          <br>
          Desk jobs require the person to sit on a chair for elongated hours.
          <br>
          <br>
          You are living a sedentary lifestyle if you fall in one of the categories below:
        </p>
      </div>
      <JourneyStat></JourneyStat>
    </section>
    <section class="w-[58.25rem] mx-auto flex flex-col gap-14">
      <h1 class="self-center text-4xl font-sans">
        Facts about Sedentary Lifestyle
      </h1>
      <div class="facts">
        <h3>
          Sedentary lifestyles lowers your metabolism
        </h3>
        <p>
          Notably, Sedentary lifestyle mainly involve sitting at work, which can have negative effects on metabolic rate
          and overall health.
        </p>
        <h3>
          You may have poor blood circulation
        </h3>
        <p>
          Research suggests not moving all day long and just sitting at one place may affect our arteries; it reduces
          the blood flow and also increases the risk of blood clots.
        </p>
        <h3>
          Sedentary lifestyles raises all causes of mortality
        </h3>
        <p>
          A sedentary lifestyle increases the risk of a variety of medical conditions. Long periods of sitting have been
          linked to cardiovascular disease.
        </p>
        <h3>
          Impact on the immune system, which may not work well
        </h3>
        <p>
          Physical inactivity accumulated over weeks and months can lead to immune system dysfunction, which could, in
          principle, increase infection susceptibility.
        </p>
        <h3>
          Your bone gets weaker due to sedentary lifestyle
        </h3>
        <p>
          Without physical activity as a loading stimulus, sedentary adults compound risks of thinning of ageing bones.
          Furthermore, the loss of muscle mass with age exposes bones to higher impact forces and is accelerated by a
          sedentary lifestyle.
        </p>
      </div>
      <h1 class="italic font-sans text-4xl self-center text-blue-900">
        Now, let's test your knowledge by this MCQ.
      </h1>
      <div>
        <span class="font-sans text-xl">
          Select the correct impact/s of sedentary lifestyle.
        </span>
        <div class="rounded-md px-8 py-4 flex flex-col gap-2">
          <template v-for="choice, index in mcq" :key="index">
            <div 
            class="flex flex-row items-center justify-between select-none bg-white border-2 border-slate rounded-3xl p-4 font-sans text-base"
            :class="{
              'cursor-pointer': !showResult,
              'hover:bg-cyan-200': !showResult,
              'border-cyan-700': mcqInput.has(index), 
              'bg-green-200': showResult && mcqInput.has(index) === answer.has(index),
              'bg-red-200': showResult && mcqInput.has(index) !== answer.has(index),
            }"
            @click="check(index)"
            >
              <span class="font-sans font-semibold">
                {{choice}}
              </span>
              <img class="h-8 fill-cyan-700" v-if="mcqInput.has(index)" src="@/assets/icons/IconCheckbox.svg" alt="Checkbox Checked">
              <img class="h-8 fill-cyan-700" v-else src="@/assets/icons/IconCheckboxBlank.svg" alt="Checkbox Blank">
            </div>
          </template>
          <button @click="showResult = true" class="self-end home-button" :disabled="showResult">See Result</button>
        </div>
      </div>
    </section>
    <section class="flex flex-row max-w-[58.25rem] w-full h-10 mb-16 justify-between mx-auto">
      <RouterLink class="mr-auto bg-gray-400 nav-button" :to="{name: 'home'}">
        <img src="@/assets/icons/IconCircleLeft.svg" alt="Exit">
        Exit Journey
      </RouterLink>
      <RouterLink class="ml-auto bg-indigo-400 nav-button" :to="{name: 'risk-meter'}">
        Continue
        <img src="@/assets/icons/IconCircleRight.svg" alt="Continue">
      </RouterLink>
    </section>
  </div>

</template>
    
<style lang="postcss" scoped>
.nav-button{
  @apply h-10 text-white flex items-center p-3 gap-3;
}
.home-button {
  @apply flex flex-row items-center h-12 px-4 gap-2 bg-cyan-200 border-2 border-white border-solid;
}
section:first-child {
  background-image: url('@/assets/SedentaryInfoView/background.png');
}

.facts {
  @apply flex flex-col gap-6;

  & h3 {
    @apply font-bold italic text-base font-sans;
  }

  & p {
    @apply text-base font-sans;
  }
}
</style>