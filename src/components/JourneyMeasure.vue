<script setup lang="ts">
import Measure1 from '@/assets/images/Measure1.png'
import Measure2 from '@/assets/images/Measure2.png'
import Measure3 from '@/assets/images/Measure3.png'
import Measure4 from '@/assets/images/Measure4.png'
import Measure5 from '@/assets/images/Measure5.png'
interface Measure {
  title: string
  image: string
  description: string
}
const measures: Measure[] = [
  {
    title: "Exercise regularly",
    image: Measure1,
    description: "Working out can help you reduce weight and improve muscle fitness which may result in better metabolism."
  },
  {
    title: "Reduce screen time and sitting down",
    image: Measure2,
    description: "Take a break from playing that game and continuously watching TV sitting down. Limiting your time on screen time will not only improve posture but will also reduce back pain. "
  },
  {
    title: "Stay active by playing a sport",
    image: Measure3,
    description: "Pick up a sport. It can be an active sport like soccer or Rugby. Do it for your own good. It will keep your mental and physical health in check. "
  },
  {
    title: "Eat healthy diet",
    image: Measure4,
    description: "An unhealthy diet makes you sluggish and keeps you down on the couch more often. Limit your junk food to boost your mood and healthy lifestyle."
  },
  {
    title: "Plant a garden",
    image: Measure5,
    description: "Try planting plants in your back area. Move as much as you can to help bring your immune system on track. "
  }
]
</script>
        
<template>
  <section v-for="measure in measures">
    <img :src="measure.image" alt="Measure">
    <div>
      <h3>{{measure.title}}</h3>
      <p>{{measure.description}}</p>
      <div>
        <button>Learn More</button>
      </div>
    </div>
  </section>
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
        display: block;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 2em;
        height: 4em;
        padding: 8px 24px;
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