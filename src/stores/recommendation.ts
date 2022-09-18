import { defineStore } from 'pinia'
import { watch, reactive, ref } from 'vue'
import { $$, $ref } from 'vue/macros'
interface Card{
  id: number
  title: string
  theme: string
  sub_theme: string
  latitude: number | null
  longitude: number | null
  content: string
  rating: number
}

interface RecommendationConfig{
  browserId: number
  preferences: Set<string>
  likedCards: Card[]
  dislikedCards: Card[]
}

function getDefaultConfig(): RecommendationConfig{
  return {
    browserId: Math.random() * 2 ** 40,
    preferences: new Set(),
    likedCards: [],
    dislikedCards: [],
  }
}

function getConfig(): RecommendationConfig{
  const data = localStorage.getItem("recommendation")
  if(data === null){
    const config = getDefaultConfig()
    saveConfig(config)
    return config
  }else{
    const parsed = JSON.parse(data)
    return {
      browserId: parsed.browserId,
      preferences: new Set(parsed.preferences),
      likedCards: parsed.likedCards,
      dislikedCards: parsed.dislikedCards,
    }
  }
}

function saveConfig(config: RecommendationConfig){
  localStorage.setItem("recommendation", JSON.stringify({
    browserId: config.browserId,
    preferences: [...config.preferences],
    likedCards: config.likedCards,
    dislikedCards: config.dislikedCards,
  }))
}


export const useRecommendationStore = defineStore("recommendation", ()=>{
  const config = getConfig()
  const browserId = config.browserId
  let preferences = $ref(config.preferences)
  let likedCards = $ref(config.likedCards)
  let dislikedCards = $ref(config.dislikedCards)
  let cards = $ref<Card[]>([])
  
  function save(){
    saveConfig({
      browserId,
      preferences,
      likedCards,
      dislikedCards,
    })
  }

  function getSixCards(): Card[]{
    // put id to server to get cards
    const data = {"11":{"id":3012,"title":"Abdominal Training","theme":"Low Intensity","sub_theme":"Muscle building","latitude":null,"longitude":null,"content":"Home Workout - ","rating":0},"252":{"id":1253,"title":"Fire Services Museum Victoria","theme":"Place Of Assembly","sub_theme":"Art Gallery\/Museum","latitude":144.975,"longitude":-37.8086,"content":"Go for a walk to","rating":0},"10":{"id":1011,"title":"Fairies Tree","theme":"Sculpture","sub_theme":"Sculpture","latitude":144.981,"longitude":-37.8134,"content":"Go for a walk to","rating":0},"3":{"id":3004,"title":"House chores","theme":"Low Intensity","sub_theme":"Muscle Building","latitude":null,"longitude":null,"content":"Home Workout - ","rating":0},"260":{"id":1261,"title":"North Melbourne Recreation Centre (Aquatic)","theme":"Leisure\/Recreation","sub_theme":"Major Sports & Recreation Facility","latitude":144.943,"longitude":-37.7999,"content":"Go for a walk to","rating":0},"125":{"id":1126,"title":"Architectural Fragment","theme":"Sculpture","sub_theme":"Sculpture","latitude":144.964,"longitude":-37.8098,"content":"Go for a walk to","rating":0}}
    return Object.values(data)
  }

  function getOneCard(): Card{
    // put id to server to get cards
    const data = {"21":{"id":3022,"title":"Indoor walking","theme":"Low Intensity","sub_theme":"Endurance training","latitude":null,"longitude":null,"content":"Home Workout - ","rating":0}}
    return Object.values(data)[0]
  }
  function updatePref(){
    // put id an
    const s = [...preferences].map(v => `'${v}'`).join(", ")
  }

  function like(card: Card){
    if(!likedCards.find(item=>item.id===card.id)){
      likedCards.push(card)
    }
    dislikedCards = dislikedCards.filter(item=>item.id!==card.id)
  }

  function dislike(card: Card){
    if(!dislikedCards.find(item=>item.id===card.id)){
      dislikedCards.push(card)
    }
    likedCards = likedCards.filter(item=>item.id!==card.id)
  }

  function reloadCards(){
    cards = getSixCards()
  }

  function closeCard(card: Card){
    const index = cards.findIndex(item => card.id === item.id)
    if (index >= 0){
      cards[index] = getOneCard()
    }
  }

  function addPref(item: string){
    preferences.add(item)
    updatePref()
    save()
  }

  function deletePref(item: string){
    preferences.delete(item)
    updatePref()
    save()
  }


  return $$({
    browserId,
    preferences,
    likedCards,
    dislikedCards,
    like,
    dislike,
    reloadCards,
    closeCard,
    addPref,
    deletePref,
  })
})