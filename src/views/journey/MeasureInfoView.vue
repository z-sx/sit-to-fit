<script setup lang="ts">
import JourneyHeading from "@/components/JourneyHeading.vue";
import JourneyMeasure from "@/components/JourneyMeasure.vue";
import AlertReminder from '@/assets/images/AlertReminder.svg';
import DietaryPlans from '@/assets/images/DietaryPlans.svg'
import PhysicalActivities from '@/assets/images/PhysicalActivities.svg'
import PhysicalErgonomics from '@/assets/images/PhysicalErgonomics.svg'
import JourneyLayoutV2 from '../../components/JourneyLayoutV2.vue'

interface TryOut{
  to: string
  text: string
  image: string
}

const tryOuts: TryOut[] = [
  {
    to: "alert-reminder",
    text: "Get periodic reminders to fix your posture!",
    image: AlertReminder
  },
  {
    to: 'dietary-plan',
    text: "Check out various dietary plans for every occasion!",
    image: DietaryPlans
  },
  {
    to: 'physical-activities',
    text: "Decide what to play from a range of activities nearby!",
    image: PhysicalActivities
  },
  {
    to: 'physical-ergonomics',
    text: "Get the best-suited ergonomic chair for yourself!",
    image: PhysicalErgonomics
  }
]
</script>
        
<template>
  <JourneyLayoutV2 class="layout">
    <JourneyHeading>
      Preventive measures
    </JourneyHeading>
    <p class="description">
      Now you have a risk analysis score and know what it means. The next step is to learn about preventive measures that
      may help you improve your health. Here are 5 preventive measures listed bellow.
    </p>
  </JourneyLayoutV2>
  <JourneyMeasure>
  </JourneyMeasure>
  <section class="try-out" v-show="false">
    <p>
      Try out our other features
    </p>
    <div v-for="tryOut in tryOuts">
      <RouterLink :to="{name: tryOut.to}" disabled>
        <img :src="tryOut.image" alt="TryOut">
      </RouterLink>
      <span>{{tryOut.text}}</span>
    </div>
  </section>
  <section class="nav">
    <RouterLink class="left button" to="/journey">Retake Journey</RouterLink>
    <RouterLink class="right button" :to="{name:'alert-reminder'}" disabled>Jump to Alert Reminder</RouterLink>
  </section>
</template>
        
<style lang="postcss" scoped>
.layout{
  margin-bottom: var(--gutter);
}
.description {
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  margin: 0 var(--margin);
  margin-bottom: 20px;
  letter-spacing: 0.04em;
  font-weight: 400;
}
.try-out{
  margin: 0 var(--margin);
  & p, & div{
    margin-bottom: calc(2 * var(--gutter));
  }
  & p{
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 600;
    font-size: 20px;
  }
  & div{
    display: flex;
    gap: var(--gutter);
    & img{
      width: 250px;
    }
    & span{
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      width: 200px;
    }
  }
  & div:nth-of-type(2){
    margin-left: 10%;
  }
  & div:nth-of-type(3){
    margin-left: 20%;
  }
  & div:nth-of-type(4){
    margin-left: 30%;
  }
}

.nav {
  display: flex;
  justify-content: space-between;
  margin: var(--margin);

  & a {
    padding: 6px 32px;
    font-size: 25px;
    border-radius: 60px;
    font-family: 'open sans', sans-serif;
    text-decoration: none;

    &.left {
      color: white;
      background-color: rgba(134, 127, 127, 0.5);
    }

    &.right {
      color: white;
      background-color: #2C99E3;
    }
  }
}
</style>