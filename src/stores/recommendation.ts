import { defineStore } from 'pinia'
import { $$, $ref } from 'vue/macros'
import axios, { AxiosError } from 'axios'

axios.defaults.baseURL = 'https://recommendsittofit.herokuapp.com'

// axios.interceptors.response.use(
//   response => response,
//   error => {
    
//   });

export interface Card{
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
    browserId: Math.floor(Math.random() * 2 ** 30),
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

  async function getCards(): Promise<Card[]>{
    try{
      // put id to server to get cards
      const response = await axios.put("/cards", {
        web_id: browserId
      })
      // const data = {"11":{"id":3012,"title":"Abdominal Training","theme":"Low Intensity","sub_theme":"Muscle building","latitude":null,"longitude":null,"content":"Home Workout - ","rating":0},"252":{"id":1253,"title":"Fire Services Museum Victoria","theme":"Place Of Assembly","sub_theme":"Art Gallery\/Museum","latitude":144.975,"longitude":-37.8086,"content":"Go for a walk to","rating":0},"10":{"id":1011,"title":"Fairies Tree","theme":"Sculpture","sub_theme":"Sculpture","latitude":144.981,"longitude":-37.8134,"content":"Go for a walk to","rating":0},"3":{"id":3004,"title":"House chores","theme":"Low Intensity","sub_theme":"Muscle Building","latitude":null,"longitude":null,"content":"Home Workout - ","rating":0},"260":{"id":1261,"title":"North Melbourne Recreation Centre (Aquatic)","theme":"Leisure\/Recreation","sub_theme":"Major Sports & Recreation Facility","latitude":144.943,"longitude":-37.7999,"content":"Go for a walk to","rating":0},"125":{"id":1126,"title":"Architectural Fragment","theme":"Sculpture","sub_theme":"Sculpture","latitude":144.964,"longitude":-37.8098,"content":"Go for a walk to","rating":0}}
      const data = response.data as Record<string, Card>
      return Object.values(data)
    }catch{
      alert("Failed to retrieve recommendation data from server")
    }
    return []
  }

  async function getOneCard(): Promise<Card>{
    // put id to server to get cards
    try{
      const response = await axios.put("/crosscard", {
        web_id: browserId
      })
      // const data = {"21":{"id":3022,"title":"Indoor walking","theme":"Low Intensity","sub_theme":"Endurance training","latitude":null,"longitude":null,"content":"Home Workout - ","rating":0}}
      const data = response.data as Record<string, Card>
      return Object.values(data)[0]
    }catch(e){
      alert("Failed to retrieve recommendation data from server")
      throw e
    }
  }
  async function updatePref(){
    // put id to server
    await axios.put("/preference", {
      web_id: browserId,
      preference: [...preferences].map(v => `'${v}'`).join(", "),
    })
  }

  async function like(card: Card){
    if(likedCards.find(item=>item.id===card.id)){
      await axios.put("/rating", {
        web_id: browserId,
        iid: card.id,
        rating: 0
      })
      likedCards = likedCards.filter(item=>item.id!==card.id)
    }else{
      await axios.put("/rating", {
        web_id: browserId,
        iid: card.id,
        rating: 2
      })
      if(!likedCards.find(item=>item.id===card.id)){
        likedCards.push(card)
      }
      dislikedCards = dislikedCards.filter(item=>item.id!==card.id)
    }
    save()
  }

  async function dislike(card: Card){
    if(dislikedCards.find(item=>item.id===card.id)){
      await axios.put("/rating", {
        web_id: browserId,
        iid: card.id,
        rating: 0
      })
      dislikedCards = dislikedCards.filter(item=>item.id!==card.id)
    }else{
      await axios.put("/rating", {
        web_id: browserId,
        iid: card.id,
        rating: 1
      })
      if(!dislikedCards.find(item=>item.id===card.id)){
        dislikedCards.push(card)
      }
      likedCards = likedCards.filter(item=>item.id!==card.id)
    }
    save()
  }

  async function reloadCards(){
    cards = await getCards()
  }

  async function closeCard(card: Card){
    const index = cards.findIndex(item => card.id === item.id)
    if (index >= 0){
      cards[index] = await getOneCard()
    }
  }

  async function addPref(item: string){
    preferences.add(item)
    await updatePref()
    save()
  }

  async function deletePref(item: string){
    preferences.delete(item)
    await updatePref()
    save()
  }


  return $$({
    browserId,
    preferences,
    likedCards,
    dislikedCards,
    cards,
    like,
    dislike,
    reloadCards,
    closeCard,
    addPref,
    deletePref,
  })
})