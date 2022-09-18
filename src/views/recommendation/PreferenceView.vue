<script setup lang="ts">
import { $ref, $computed } from 'vue/macros';
import CardioImg from '@/assets/Recommendation/IconCardio.svg'
import CyclingImg from '@/assets/Recommendation/IconCycling.svg'
import SightseeingImg from '@/assets/Recommendation/IconSightseeing.svg'
import WalkingImg from '@/assets/Recommendation/IconWalking.svg'

interface Preference{
  name: string
  icon: string
  description: string
}

const preferences: Preference[] = [{
  name: "Cylcing",
  icon: CyclingImg,
  description: "Own a cycle? Move around easily and loose weight",
}, {
  name: "Cardio",
  icon: CardioImg,
  description: "Effective fat loss regime",
}, {
  name: "Walking",
  icon: WalkingImg,
  description: "Good for healthy metabolism",
}, {
  name: "Sightseeing",
  icon: SightseeingImg,
  description: "Walking with the beautiful views of Melbourne Art!"
}]

const selected = $ref(new Set())

function check(item: Preference){
  if(selected.has(item)){
    selected.delete(item)
  }else{
    selected.add(item)
  }
}
</script>
    
<template>
  <div class="flex flex-col gap-16">
    <section class="mx-auto w-full h-60 bg-gray-200 flex justify-center">
      <div class="font-sans text-4xl pt-20">
        Select your preferences
      </div>
    </section>
    <section class="flex flex-wrap gap-14 justify-center max-w-screen-lg w-full mx-auto">
      <template v-for="item, index in preferences" :key="index">
        <div 
        class="pref select-none cursor-pointer border-2 border-solid flex flex-col w-[28rem] h-[16rem] gap-4 p-8 bg-gray-200"
        :class="{
          'border-white-50': !selected.has(item),
          'border-black': selected.has(item),
        }"
        @click="check(item)"
        >
          <div class="flex items-center gap-4">
            <img class="h-12" :src="item.icon" :alt="item.name">
            <span class="text-3xl">
              {{item.name}}
            </span>
            <div class="ml-auto">
              <img class="h-8 fill-cyan-700" v-show="selected.has(item)" src="@/assets/icons/IconCheckbox.svg" alt="Checkbox Checked">
              <img class="h-8 fill-cyan-700" v-show="!selected.has(item)" src="@/assets/icons/IconCheckboxBlank.svg" alt="Checkbox Blank">
            </div>
          </div>
          <p class="text-2xl">
            {{item.description}}
          </p>
        </div>
      </template>
    </section>
    <section class="flex justify-center mb-12">
      <RouterLink class="home-button block" :to="{name: 'cards'}" :disabled="selected.size>0?null:true">See My Recommendations</RouterLink>
    </section>
  </div>
</template>
    
<style lang="postcss" scoped>
.home-button {
  @apply flex flex-row w-fit items-center h-12 px-4 gap-2 bg-cyan-200 border-2 border-white border-solid;
}
.pref:nth-child(1){
  @apply bg-gradient-to-r from-cyan-200 to-blue-200  hover:from-cyan-300 hover:to-blue-300;
}
.pref:nth-child(2){
  @apply bg-gradient-to-r from-lime-200 to-green-200 hover:from-lime-300 hover:to-green-300;
}
.pref:nth-child(3){
  @apply bg-gradient-to-r from-orange-200 to-yellow-200 hover:from-orange-300 hover:to-yellow-300;
}
.pref:nth-child(4){
  @apply bg-gradient-to-r from-fuchsia-200 to-rose-200 hover:from-fuchsia-300 hover:to-rose-300;
}
</style>