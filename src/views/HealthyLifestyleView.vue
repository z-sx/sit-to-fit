<script setup lang="ts">
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import imgA1 from '@/assets/HealthyLifestyleView/activities-1.png'
import imgA2 from '@/assets/HealthyLifestyleView/activities-2.png'
import imgA3 from '@/assets/HealthyLifestyleView/activities-3.png'
import imgD1 from '@/assets/HealthyLifestyleView/diet-1.png'
import imgD2 from '@/assets/HealthyLifestyleView/diet-2.png'
import imgD3 from '@/assets/HealthyLifestyleView/diet-3.png'

const activities = [
  imgA1,
  imgA2,
  imgA3
]
const diets = [
  imgD1,
  imgD2,
  imgD3,
]
</script>
<template>
  <section class="flex flex-col justify-center gap-11 my-16">
    <h1 class="text-4xl font-sans mx-auto">Physical activities you don’t want to miss!</h1>
    <div class="max-w-[58.25rem] mx-auto">
      <Carousel :autoplay="4000" :wrap-around="true">
        <Slide v-for="image, index in activities" :key="index">
          <div>
            <img :src="image" alt="Physical Activity">
          </div>
        </Slide>
        <template #addons>
          <Pagination class="pagination" />
        </template>
      </Carousel>
    </div>
    <span class="max-w-[46.125rem] mx-auto">
      Participating in regular physical activities is one of the best ways you can improve your overall physical health.
      Being involved with physical activities allows your body to improve its brain health, and weight management,
      reduce the risk of diseases, and strengthen your bones and muscles. According to the World Health Organisation,
      physical inactivity is one of the leading risk factors for noncommunicable disease mortality as adults who are
      physically inactive have a 20% to 30% increased risk of death compared to adults who are living a physically
      active lifestyle.
    </span>
    <RouterLink class="home-button" :to="{name: 'physical-activities'}">
      Discover More
      <img src="@/assets/icons/IconArrowRight.svg" alt="Right Icon">
    </RouterLink>
  </section>
  <section class="flex flex-col justify-center gap-11 my-16">
    <h1 class="text-4xl font-sans mx-auto">Healthy diet is the way to go!</h1>
    <div class="max-w-[58.25rem] mx-auto">
      <Carousel :autoplay="4000" :wrap-around="true">
        <Slide v-for="image, index in diets" :key="index">
          <div>
            <img :src="image" alt="Healthy Diet">
          </div>
        </Slide>
        <template #addons>
          <Pagination class="pagination" />
        </template>
      </Carousel>
    </div>
    <span class="max-w-[46.125rem] mx-auto">
      A balanced healthy diet can assist in preventing certain long-term dangerous diseases such as heart disease,
      stroke, and type 2 diabetes. In addition, it may help reduce the risk of developing certain kinds of cancers and
      help keep your body weight at a healthy level. It is essential to find the right balance between the different
      nutrients your body needs to function to achieve maximum health benefits.
    </span>
    <RouterLink class="home-button" :to="{name: 'dietary-plan'}">
      Discover More
      <img src="@/assets/icons/IconArrowRight.svg" alt="Right Icon">
    </RouterLink>
  </section>
</template>
<style lang="postcss" scoped>
.home-button {
  @apply self-center flex flex-row items-center py-1 px-4 gap-2 bg-cyan-200 border-2 border-white;
}

.pagination:deep(.carousel__pagination-button) {
  @apply bg-gray-300 rounded-full w-6 h-6 mt-10 mx-6;
}

.pagination:deep(.carousel__pagination-button--active) {
  @apply bg-cyan-200
}
</style>