<script setup lang="ts">
import { $ref } from 'vue/macros';

interface Recommendation{
  id: number
  title: string
  theme: string
  sub_theme: string
  latitude: number | null
  longitude: number | null
  content: string
  rating: number
}

type RecommendationData = Record<string, Recommendation>

const data: RecommendationData = { "212": { "id": 1213, "title": "Queen Victoria Gardens", "theme": "Leisure\/Recreation", "sub_theme": "Informal Outdoor Facility (Park\/Garden\/Reserve)", "latitude": 144.971, "longitude": -37.8216, "content": "Go for a walk to", "rating": 0 }, "3": { "id": 3004, "title": "House chores", "theme": "Low Intensity", "sub_theme": "Muscle Building", "latitude": null, "longitude": null, "content": "Home Workout - ", "rating": 0 }, "244": { "id": 1245, "title": "Flagstaff Gardens", "theme": "Leisure\/Recreation", "sub_theme": "Informal Outdoor Facility (Park\/Garden\/Reserve)", "latitude": 144.955, "longitude": -37.8111, "content": "Go for a walk to", "rating": 0 }, "71": { "id": 2072, "title": "On-Road Bike Lane", "theme": "Both Directions", "sub_theme": "On-Road Bike Lane", "latitude": 144.971, "longitude": -37.7926, "content": "Go for a cycle ride to", "rating": 0 }, "234": { "id": 1235, "title": "J.J Holland Park", "theme": "Leisure\/Recreation", "sub_theme": "Informal Outdoor Facility (Park\/Garden\/Reserve)", "latitude": 144.924, "longitude": -37.7982, "content": "Go for a walk to", "rating": 0 }, "11": { "id": 3012, "title": "Abdominal Training", "theme": "Low Intensity", "sub_theme": "Muscle building", "latitude": null, "longitude": null, "content": "Home Workout - ", "rating": 0 } }

function toRecommendations(data: RecommendationData): Recommendation[]{
  return Object.values(data)
}

const recommendations = $ref(toRecommendations(data))
function reload() {
  
}
</script>
    
<template>
  <div class="flex flex-col gap-16">
    <section class="mx-auto w-full h-60 bg-gray-200 flex justify-center">
      <div class="font-sans text-4xl pt-20">
        Your Recommendations for Today!
      </div>
    </section>
    <section class="mx-auto w-full max-w-screen-xl flex flex-col gap-8 mb-8">
      <div class="flex justify-between">
        <RouterLink class="home-button" :to="{name:'preferences'}">
          <img class="h-full" src="@/assets/icons/IconSetting.svg" alt="Preferences">
          Change Preferences
        </RouterLink>
        <button @click="reload()" class="home-button">
          <img class="h-full" src="@/assets/icons/IconRefresh.svg" alt="Reload">
          Reload Recommendations
        </button>
      </div>
      <div class="grid grid-cols-2 gap-11">
        <template v-for="item, index in recommendations" :key="index">
          <div class="flex flex-col justify-between h-96 border border-gray-200 border-solid rounded-3xl overflow-hidden shadow-lg bg-white">
            <div class="flex justify-between items-center">
              <span class="font-sans text-2xl px-8 font-semibold">
                {{item.content}} {{item.title}}
              </span>
              <button class="h-16 p-4 select-none hover:bg-gray-200">
                <img class="h-full" src="@/assets/icons/IconClose.svg" alt="Close">
              </button>
            </div>
            <div class="flex flex-col px-8">
              <span v-for="value, key in item">{{key}}: {{value}}</span>
            </div>
            <div class="grid grid-cols-2 grid-rows-1">
              <button class="flex justify-center h-16 p-4 font-sans font-semibold items-center gap-2 hover:bg-gray-200 select-none">
                <img class="h-full" src="@/assets/icons/IconThumbDown.svg" alt="Thumb Down">
                Dislike
              </button>
              <button class="flex justify-center h-16 p-4 font-sans font-semibold items-center gap-2 hover:bg-gray-200 select-none">
                <img class="h-full" src="@/assets/icons/IconThumbUp.svg" alt="Thumb Up">
                Like
              </button>
            </div>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>
    
<style lang="postcss" scoped>
.home-button {
  @apply flex flex-row w-fit items-center h-12 px-4 py-2 gap-2 bg-cyan-200 border-2 border-white border-solid;

  & img {
    @apply transition-transform;
  }

  &:hover {
    & img {
      @apply rotate-45;
    }
  }
}
</style>