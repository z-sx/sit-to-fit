<script setup lang="ts">
import Map from '@/components/Map.vue'
import { useRecommendationStore, type Card } from '@/stores/recommendation';
import { ref } from 'vue';
import BreadCrumb from '../../components/BreadCrumb.vue';
const store = useRecommendationStore()
const loaded = ref(false)
const popularLoaded = ref(false)
const popularCards = ref<Card[]>([])
const tab = ref<'foryou'|'popularity'>('foryou')
async function loadCards() {
  loaded.value = false
  await store.reloadCards()
  loaded.value = true
}
async function loadPopularCards(){
  popularCards.value = await store.getPopularCards()
  popularLoaded.value = true
}
loadCards()
loadPopularCards()
</script>
    
<template>
  <BreadCrumb :nav="['home', 'recommendation', 'cards']"></BreadCrumb>
  <section class="mx-auto w-full h-44 bg-gray-200 flex justify-center items-center">
    <div class="font-sans text-4xl">
      Your Recommendations for Today
    </div>
  </section>
  <section class="mx-auto max-w-screen-xl mt-4 px-14 flex items-center">
    <span class="text-left basis-96 text-2xl">Location: Melbourne CBD</span>
    <div class="flex grow justify-center pr-96 gap-4">
      <button 
      class="font-sans text-2xl p-4 rounded-xl hover:bg-black/20 transition" 
      :class="{'text-active': tab === 'foryou'}"
      @click="tab='foryou'"
      >For You</button>
      <button 
      class="font-sans text-2xl p-4 rounded-xl hover:bg-black/20 transition"
      :class="{'text-active': tab === 'popularity'}"
      @click="tab='popularity'"
      >Popularity</button>
    </div>
  </section>
  <section class="mx-auto w-full max-w-screen-xl px-14 flex flex-col gap-8 mt-4 mb-4">
    <div class="flex justify-between items-center">
      <RouterLink class="home-button" :to="{name:'preferences'}">
        <img class="h-full" src="@/assets/icons/IconSetting.svg" alt="Preferences">
        Change Preferences
      </RouterLink>
      <span class="font-sans text-2xl flex transition-opacity select-none"
      :class="{'opacity-0': loaded===true&&popularLoaded===true}"
      >
        <svg role="status" class="inline mr-2 w-8 h-8 text-gray-200 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
        </svg>
        Loading...
      </span>
      <button @click="loadCards()" class="home-button">
        <img class="h-full" src="@/assets/icons/IconRefresh.svg" alt="Reload">
        Reload Recommendations
      </button>
    </div>
    
    <TransitionGroup tag="div" name="list" class="grid grid-cols-2 gap-11 mb-10">
      <template v-if="tab==='foryou'&&loaded"
      v-for="item in store.cards" :key="item.id">
        <div class="relative flex flex-col justify-between h-96 card-shadow rounded-xl overflow-hidden shadow-lg bg-white">
          <div class="flex justify-between items-center">
            <span class="font-sans text-2xl pl-8 font-semibold h-16 flex items-center">
              {{item.content}} {{item.title}}
            </span>
          </div>
          <div class="flex flex-col grow overflow-hidden">
            <Map :center="{lat:item.longitude, lng:item.latitude}" v-if="item.latitude!==null&&item.longitude!==null">
            </Map>
            <img v-else class="w-full object-cover object-bottom" src="@/assets/Recommendation/Indoor.png"
              alt="Indoor Activity">
          </div>
          <div class="grid grid-cols-2 grid-rows-1">
            <button @click="store.dislike(item); store.closeCard(item)"
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
      <template v-if="tab==='popularity'&&popularLoaded"
      v-for="item in popularCards" :key="item.id">
        <div class="relative flex flex-col justify-between h-96 card-shadow rounded-xl overflow-hidden shadow-lg bg-white">
          <div class="flex justify-between items-center">
            <span class="font-sans text-2xl pl-8 font-semibold h-16 flex items-center">
              {{item.content}} {{item.title}}
            </span>
          </div>
          <div class="flex flex-col grow overflow-hidden">
            <Map :center="{lat:item.longitude, lng:item.latitude}" v-if="item.latitude!==null&&item.longitude!==null">
            </Map>
            <img v-else class="w-full object-cover object-bottom" src="@/assets/Recommendation/Indoor.png"
              alt="Indoor Activity">
          </div>
          <div class="grid grid-cols-2 grid-rows-1">
            <button @click="store.dislike(item); store.closeCard(item)"
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
      <template v-if="(tab==='foryou'&&!loaded)||(tab==='popularity'&&!popularLoaded)" 
      v-for="_ in 4">
        <div class="placeholder animate-pulse flex flex-col justify-between h-96 card-shadow rounded-xl overflow-hidden shadow-lg bg-white">
          <div class="opacity-20 flex justify-between items-center">
            <div class="grow px-8 py-4 h-16">
              <div class="h-2 mb-4 bg-black rounded-full"></div>
              <div class="h-2 bg-black rounded-full"></div>
            </div>
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
.text-active{
  @apply font-bold bg-gray-200
}

.card-shadow {
  box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
}

div:not(.placeholder){
  &.listmove,&.list-enter-active{
    transition: all 0.5s ease;
  }
  &.list-enter-from, &.list-leave-to{
    position: absolute;
    opacity: 0;
    transform: translateX(30px);
    order:-1;
  }
}

.placeholder {
  &.list-enter-from,
  &.list-leave-to {
    display:none;
  }
}



.home-button {
  @apply flex flex-row w-fit items-center h-12 px-4 py-2 gap-2 bg-blue-600 text-white rounded-lg border-2 border-white border-solid;

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