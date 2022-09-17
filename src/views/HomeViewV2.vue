<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col justify-center gap-16 mb-16 -mt-20">
    <section class="relative z-0">
      <div class="h-[45rem] xl:h-[50rem] xl:max-w-screen-xl xl:mx-auto relative z-10 flex flex-col px-14 pt-36 justify-between">
        <div class="w-[50%]">
          <div class="text-4xl font-bold font-sans">Sedentary Lifestyle</div>
          <div class="text-3xl font-normal font-sans">The fitness and health of today's workforce in Melbourne are
            declining at an alarming rate. </div>
        </div>
        <div class="w-fit self-end px-9 py-3 gap-6 bg-white flex flex-row justify-between">
          <div>
            <span class="font-sans italic">Take your Journey to Learn more!</span>
            <br>
            <span class="font-sans">What this Journey will embark on?</span>
            <ul class="list-disc pl-4">
              <li class="font-sans">Learn some facts about Sedentary Lifestyle</li>
              <li class="font-sans">How to mitigate the harmful effects of this lifestyle</li>
            </ul>
          </div>
          <RouterLink class="home-button" :to="{name: 'journey'}">
            Get Started
            <img src="@/assets/icons/IconArrowRight.svg" alt="Right Icon">
          </RouterLink>
        </div>
      </div>
      <div class="absolute top-0 w-full h-[42rem] xl:h-[47rem]">
        <img class="w-full h-full object-cover object-top max-w-screen-xl mx-auto" src="@/assets/HomeViewV2/Background.svg" alt="Background">
      </div>
    </section>
    <section class="flex flex-row gap-11 max-w-screen-lg lg:mx-14 xl:mx-auto">
      <div class="flex flex-col gap-12">
        <div>
          <span class="font-sans text-4xl font-bold">Improve Life Standards</span>
          <br>
          <span class="font-sans text-4xl font-bold">How can we help</span>
          <br>
          <br>
          <span class="font-sans text-lg">Sedentary behaviour can be fixed by changing your lifestyle by involving
            simple activities.</span>
          <br>
          <span class="font-sans text-lg italic">Use our Personalised Tool!</span>
          <br>
          <br>
          <span class="font-sans text-lg">How this tool will help you?</span>
          <ul class="list-disc pl-4">
            <li>Get personalised recommendations</li>
            <li>Browse through our catalogue of activities</li>
          </ul>
        </div>
        <RouterLink class="home-button" :to="{name: 'recommendation'}">
          Use Tool
          <img src="@/assets/icons/IconArrowRight.svg" alt="Right Icon">
        </RouterLink>
      </div>
      <img class="object-cover" src="@/assets/HomeViewV2/pexels-fauxels.png" alt="Improve life standards">
    </section>
    <section class="flex flex-col gap-9 max-w-screen-lg lg:mx-14 xl:mx-auto">
      <span class="italic text-4xl">Try out our other features: </span>
      <div class="grid grid-cols-12 grid-rows-4 gap-11">
        <div class="feature col-span-9 col-start-1">
          <RouterLink class="feature-button" :to="{name: 'alert-reminder'}">
            <img class="w-10 h-10" src="@/assets/HomeViewV2/IconAlarm.svg" alt="Alarm Icon">
            Alert Reminder
          </RouterLink>
          <span class="font-sans text-3xl">Get periodic reminders to fix your posture!</span>
        </div>
        <div class="feature col-span-9 col-start-2">
          <RouterLink class="feature-button" :to="{name: 'dietary-plan'}">
            <img class="w-10 h-10" src="@/assets/HomeViewV2/IconPlan.svg" alt="Plan Icon">
            Dietary Plans
          </RouterLink>
          <span class="font-sans text-3xl">Check out various dietary plans!</span>
        </div>
        <div class="feature col-span-9 col-start-3">
          <RouterLink class="feature-button" :to="{name: 'physical-activities'}">
            <img class="w-10 h-10" src="@/assets/HomeViewV2/IconBall.svg" alt="Ball Icon">
            Physical Activities
          </RouterLink>
          <span class="font-sans text-3xl">Decide what to play from a range of activities nearby!</span>
        </div>
        <div class="feature col-span-9 col-start-4">
          <RouterLink class="feature-button" to="/">
            <img class="w-10 h-10" src="@/assets/HomeViewV2/IconSit.svg" alt="Sit Icon">
            Physical Ergonomics
          </RouterLink>
          <span class="font-sans text-3xl">Get the best-suited ergonomic chair for yourself!</span>
        </div>
      </div>
    </section>
  </div>
</template>
    
<style lang="postcss" scoped> 
.home-button {
  @apply self-center flex flex-row items-center h-12 px-4 gap-2 bg-cyan-200 border-2 border-white;
}

.feature {
  @apply flex flex-row gap-4;
}

.feature-button {
  @apply min-w-[25rem] max-w-[25rem] flex flex-row gap-4 items-center text-3xl bg-black text-white px-6 py-2;
}
</style>