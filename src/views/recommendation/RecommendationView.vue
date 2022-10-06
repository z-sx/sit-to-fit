<script setup lang="ts">
import Map from '@/components/Map.vue'
import { useRecommendationStore } from '@/stores/recommendation';
import { ref } from 'vue';
import BreadCrumb from '../../components/BreadCrumb.vue';
const store = useRecommendationStore()
const loaded = ref(false)
async function loadCards() {
  await store.reloadCards()
  loaded.value = true
}
loadCards()
</script>
    
<template>
  <BreadCrumb :nav="['home', 'recommendation', 'cards']"></BreadCrumb>
  <section class="mx-auto w-full h-44 bg-gray-200 flex justify-center items-center">
    <div class="font-sans text-4xl">
      Your Recommendations for Today!
    </div>
  </section>
  <section class="mx-auto w-full max-w-screen-xl p-14 flex flex-col gap-8 mt-16 mb-8">
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
      <template v-if="loaded" v-for="item in store.cards" :key="item.id">
        <div class="relative flex flex-col justify-between h-96 card-shadow rounded-xl overflow-hidden shadow-lg bg-white">
          <div class="flex justify-between items-center">
            <span class="font-sans text-2xl pl-8 font-semibold">
              {{item.content}} {{item.title}}
            </span>
            <button @click="store.closeCard(item)" class="h-16 w-16 p-4 select-none hover:bg-gray-200">
              <img class="h-full" src="@/assets/icons/IconClose.svg" alt="Close">
            </button>
          </div>
          <div class="flex flex-col grow overflow-hidden">
            <Map :center="{lat:item.longitude, lng:item.latitude}" v-if="item.latitude!==null&&item.longitude!==null">
            </Map>
            <img v-else class="w-full object-cover object-bottom" src="@/assets/Recommendation/Indoor.png"
              alt="Indoor Activity">
          </div>
          <div class="grid grid-cols-2 grid-rows-1">
            <button @click="store.dislike(item)"
              class="flex justify-center h-16 p-4 font-sans font-semibold items-center gap-2 hover:bg-gray-200 select-none">
              <img v-if="store.dislikedCards.find(i=>i.id===item.id)" class="h-full"
                src="@/assets/icons/IconThumbDownFill.svg" alt="Thumb Down">
              <img v-else class="h-full" src="@/assets/icons/IconThumbDown.svg" alt="Thumb Down">
              Dislike
            </button>
            <button @click="store.like(item)"
              class="flex justify-center h-16 p-4 font-sans font-semibold items-center gap-2 hover:bg-gray-200 select-none">
              <img v-if="store.likedCards.find(i=>i.id===item.id)" class="h-full"
                src="@/assets/icons/IconThumbUpFill.svg" alt="Thumb Up">
              <img v-else class="h-full" src="@/assets/icons/IconThumbUp.svg" alt="Thumb Up">
              Like
            </button>
          </div>
        </div>
      </template>
      <template v-if="!loaded" v-for="_ in 4">
        <div class="placeholder animate-pulse flex flex-col justify-between h-96 card-shadow rounded-xl overflow-hidden shadow-lg bg-white">
          <div class="opacity-20 flex justify-between items-center">
            <div class="grow pl-8">
              <div class="pl-8 h-2 mb-4 bg-black rounded-full"></div>
              <div class="pl-8 h-2 bg-black rounded-full"></div>
            </div>
            <button class="h-16 w-16 p-4 select-none hover:bg-gray-200">
              <img class="h-full" src="@/assets/icons/IconClose.svg" alt="Close">
            </button>
          </div>
          <div class="flex flex-col grow overflow-hidden justify-center items-center bg-gray-300">
            <svg class="w-14 h-14 text-gray-200" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">
              <path
                d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
          <div class="grid grid-cols-2 grid-rows-1">
            <button
              class="opacity-20 flex justify-center h-16 p-4 font-sans font-semibold items-center gap-2 hover:bg-gray-200 select-none">
              <img class="h-full"
              src="@/assets/icons/IconThumbDownFill.svg" alt="Thumb Down">
              Dislike
            </button>
            <button
              class="opacity-20 flex justify-center h-16 p-4 font-sans font-semibold items-center gap-2 hover:bg-gray-200 select-none">
              <img class="h-full"
                src="@/assets/icons/IconThumbUpFill.svg" alt="Thumb Up">
              Like
            </button>
          </div>
        </div>
      </template>
    </TransitionGroup>
  </section>
</template>
    
<style lang="postcss" scoped>
.card-shadow {
  box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
}

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
  order:-1;
  &.placeholder{
    position:static;
  }
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