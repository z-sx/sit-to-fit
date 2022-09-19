<script setup lang="ts">
import { useRecommendationStore } from '@/stores/recommendation';
import axios from 'axios'

const store = useRecommendationStore()

fetch("https://recommendsittofit.herokuapp.com/cards", {
  method: 'PUT',
  mode: 'cors',
  body: JSON.stringify({
    "web_id": 99223
  })
})
axios.put("https://recommendsittofit.herokuapp.com/cards", {
  "web_id": 99223
})
</script>
    
<template>
  <div class="flex flex-col gap-16">
    <section class="mx-auto w-full h-60 bg-gray-200 flex justify-center">
      <div class="font-sans text-4xl pt-20">
        Your Recommendations for Today!
      </div>
    </section>
    <section class="mx-auto w-full max-w-screen-xl p-14 flex flex-col gap-8 mb-8">
      <div class="flex justify-between">
        <RouterLink class="home-button" :to="{name:'preferences'}">
          <img class="h-full" src="@/assets/icons/IconSetting.svg" alt="Preferences">
          Change Preferences
        </RouterLink>
        <button @click="store.reloadCards()" class="home-button">
          <img class="h-full" src="@/assets/icons/IconRefresh.svg" alt="Reload">
          Reload Recommendations
        </button>
      </div>
      <TransitionGroup tag="div" name="list" class="grid grid-cols-2 gap-11">
        <template v-for="item in store.cards" :key="item.id">
          <div
            class="flex flex-col justify-between h-96 border border-gray-200 border-solid rounded-3xl overflow-hidden shadow-lg bg-white">
            <div class="flex justify-between items-center">
              <span class="font-sans text-2xl pl-8 font-semibold">
                {{item.content}} {{item.title}}
              </span>
              <button @click="store.closeCard(item)" class="h-16 w-16 p-4 select-none hover:bg-gray-200">
                <img class="h-full" src="@/assets/icons/IconClose.svg" alt="Close">
              </button>
            </div>
            <div class="flex flex-col px-8">
              <span v-for="value, key in item">{{key}}: {{value}}</span>
            </div>
            <div class="grid grid-cols-2 grid-rows-1">
              <button
                class="flex justify-center h-16 p-4 font-sans font-semibold items-center gap-2 hover:bg-gray-200 select-none">
                <img @click="store.dislike(item)" class="h-full" src="@/assets/icons/IconThumbDown.svg"
                  alt="Thumb Down">
                Dislike
              </button>
              <button
                class="flex justify-center h-16 p-4 font-sans font-semibold items-center gap-2 hover:bg-gray-200 select-none">
                <img @click="store.like(item)" class="h-full" src="@/assets/icons/IconThumbUp.svg" alt="Thumb Up">
                Like
              </button>
            </div>
          </div>
        </template>
      </TransitionGroup>
    </section>
  </div>
</template>
    
<style lang="postcss" scoped>
.list-move, 
.list-enter-active,
.list-enter-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  position: absolute;
  opacity: 0;
  transform: translateX(30px);
}

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