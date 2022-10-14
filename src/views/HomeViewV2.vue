<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col gap-16 -mt-20">
    <section class="relative z-0">
      <div class="h-[45rem] xl:h-[50rem] xl:max-w-screen-xl xl:mx-auto relative z-10 flex flex-col px-14 pt-36 justify-between">
        <div class="w-[45%]">
          <div class="text-4xl font-bold font-sans">Sedentary Lifestyle?</div>
          <div class="text-3xl font-normal font-sans">To the people of Melbourne CBD,</div>
          <div class="text-3xl font-normal font-sans">We are here to help you change your lifestyle.</div>
        </div>
        <div class="w-fit self-end py-8 gap-3 flex flex-col">
          <RouterLink class="rounded-2xl self-center flex flex-col pl-8 pr-16 pt-2 pb-5 text-white bg-blue-600 border-2 border-transparent opacity-95 hover:opacity-100 hover:border-white transition" :to="{name: 'journey'}">
            <span class="font-sans text-3xl">
              Start
            </span>
            <span class="font-sans text-xl">
              your healthy lifestyle
            </span>
          </RouterLink>
          <span class="font-sans text-2xl pl-10">
            Break your sedentary lifestyle
          </span>
        </div>
      </div>
      <div class="absolute top-0 w-full h-full lg:h-screen xl:h-full">
        <img class="w-full h-full object-cover object-top max-w-screen-xl mx-auto" src="@/assets/HomeViewV2/Background.svg" alt="Background">
      </div>
    </section>
  </div>
</template>
    
<style lang="postcss" scoped> 

.feature {
  @apply flex flex-row gap-4;
}

.feature-button {
  @apply min-w-[25rem] max-w-[25rem] flex flex-row gap-4 items-center text-3xl bg-black text-white px-6 py-2;
}
</style>