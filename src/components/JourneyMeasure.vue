<script setup lang="ts">
import Measure1 from '@/assets/images/Measure1.png'
import Measure2 from '@/assets/images/Measure2.png'
import Measure3 from '@/assets/images/Measure3.png'
import Measure4 from '@/assets/images/Measure4.png'
import Measure5 from '@/assets/images/Measure5.png'
import { ref } from 'vue'
import JourneyModal from './JourneyModal.vue'
interface Measure {
  title: string
  image: string
  description: string
  modal: string
}
const measures: Measure[] = [
  {
    title: "Exercise regularly",
    image: Measure1,
    description: "Working out can help you reduce weight and improve muscle fitness which may result in better metabolism.",
    modal: "Exercise is vital to keeping a healthy weight. This activity burns calories resulting in weight loss. Moreover, exercising regularly can reduce the risk and prevent various diseases. These include the prevention of type 2 diabetes, high blood pressure, and heart disease. Exercise also has an impact on bones. Doing bone-strengthening exercises like jumping or running can keep your bones in check and strong. "
  },
  {
    title: "Reduce screen time and sitting down",
    image: Measure2,
    description: "Take a break from playing that game and continuously watching TV sitting down. Limiting your time on screen time will not only improve posture but will also reduce back pain. ",
    modal: "Reducing sitting down by minimizing screen time can help in various ways. Some ways include lower stress levels, improved sleep habits, better focus, and brain function. Improve your posture and reduce eye strain. All these benefits can be seen by just limiting screen activity. "
  },
  {
    title: "Stay active by playing a sport",
    image: Measure3,
    description: "Pick up a sport. It can be an active sport like soccer or Rugby. Do it for your own good. It will keep your mental and physical health in check. ",
    modal: "Playing a sport has immediate benefits on brain. Reduced feeling of anxiety in adults is seen as an immediate benefit. Regular playing a sport can help keep your thinking and learning sharp. Cancers risk is lowered. For example Colon, Bladder and lung cancers. Lastly, this increases your chances of living long. ",
  },
  {
    title: "Eat healthy diet",
    image: Measure4,
    description: "An unhealthy diet makes you sluggish and keeps you down on the couch more often. Limit your junk food to boost your mood and healthy lifestyle.",
    modal: "Eating a healthy diet not only keeps your immunity boosted it also helps you strengthen your bones. Which in return helps in moving or playing a sport. Furthermore, supports muscle building and helps the digestive system function well. ",
  },
  {
    title: "Plant a garden",
    image: Measure5,
    description: "Try planting plants in your back area. Move as much as you can to help bring your immune system on track. ",
    modal: "Outdoor planting can help fight disease. This is from the sunlight your skins get. Vitamin D is produced by sun and it helps in hundreds of body functions. Also gardening helps in boosting mood and is a stress reliever. ",
  }
]
const isOpen = ref(false)
const modal = ref("")
</script>
        
<template>
  <section v-for="measure in measures">
    <img :src="measure.image" alt="Measure">
    <div>
      <h3>{{measure.title}}</h3>
      <p>{{measure.description}}</p>
      <div>
        <button @click="isOpen = true; modal = measure.modal">
          Learn More
          <img src="@/assets/images/IconFocus.svg" alt="Focus Icon">
        </button>
      </div>
    </div>
  </section>
  <JourneyModal v-if="isOpen" @close="isOpen=false">
    {{modal}}
  </JourneyModal>
</template>

<style lang="postcss" scoped>
section {
  display: flex;
  gap: var(--gutter);
  margin-bottom: var(--gutter);
  justify-content: space-between;
  &>img {
    width: 50%;
  }

  &>div {
    --border-radius: 4em;
    height: 240px;
    background: rgba(220, 240, 255, 0.4);
    padding: 2em 2em 3em 2em;
    position: relative;
    & h3 {
      font-family: 'Open Sans', sans-serif;
      font-weight: 400;
      font-size: 20px;
      text-align: justify;
      letter-spacing: 0.04em;
      color: #03118D;
    }

    & p {
      font-family: 'Open Sans', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      text-align: justify;
      letter-spacing: 0.04em;
      color: #000000;
    }

    & >div {
      width: 100%;
      position: absolute;
      bottom: -2em;
      left: 0;
      display: flex;
      justify-content: center;
      & button {
        display: flex;
        align-items: center;
        gap: 8px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 3em;
        height: 4em;
        padding: 8px 24px;
        & img{
          width: 40px;
        }
      }
    }

  }
}

section:nth-of-type(2n+1) {
  flex-direction: row;
  & >div{
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }
}

section:nth-of-type(2n) {
  flex-direction: row-reverse;
  & >div{
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }
}
section:last-of-type{
  background-color: black;
}

</style>