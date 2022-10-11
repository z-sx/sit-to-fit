<script setup lang="ts">
import BreadCrumb from '@/components/BreadCrumb.vue';
import activityImg from '@/assets/HealthyLifestyleView/activities.jpg'
import dietImg from '@/assets/HealthyLifestyleView/diets.jpg'
import ergonomicImg from '@/assets/HealthyLifestyleView/ergonomics.jpg'

const sections = [{
  title: "Physical Activities",
  desc: "Participating in regular physical activities is one of the best ways you can improve your overall physical health",
  route: "physical-activities",
  img: activityImg,
},{
  title: "Dietary Plans",
  desc: "Following a good diet plan helps boost your metabolism and reduces fat.",
  route: "dietary-plan",
  img: dietImg,
},{
  title: "Physical Ergonomics",
  desc: "Learn the importance of good posture to mitigate longterm effects of sedantary lifestyle",
  route: "physical-ergonomics",
  img: ergonomicImg,
}]

</script>
<template>
  <BreadCrumb :nav="['home', 'healthy-lifestyle']"></BreadCrumb>
  <section class="mx-auto w-full h-44 bg-gray-200 flex justify-center items-center">
    <div class="font-sans text-4xl">
      Healthy Lifestyle Changes you don't want to miss!
    </div>
  </section>
  <section class="flex flex-col gap-8 max-w-screen-md mx-auto p-14">
    <template v-for="section in sections">
      <div class="card-shadow p-12 rounded-xl bg-white">
        <div class="aspect-[2/1] bg-cover bg-center p-10 flex flex-col justify-end gap-4" 
        :style="{backgroundImage: `url(${section.img})`}">
          <h2 class="font-sans font-bold text-4xl text-white">
            {{section.title}}
          </h2>
          <span class="font-sans text-xl text-white">
            {{section.desc}}
          </span>
          <RouterLink 
          class="flex flex-row items-center py-1 pl-4 pr-2 h-14 gap-2 bg-blue-600 opacity-80 w-max rounded-xl border-2 border-transparent hover:border-white hover:opacity-100 transition"
          :to="{name: section.route}">
            <span class="font-sans text-white">
              Discover More
            </span>
            <img src="@/assets/icons/IconArrowRightWhite.svg" alt="Arrow Right">
          </RouterLink>
        </div>
      </div>
    </template>

  </section>
</template>
<style lang="postcss" scoped>
.card-shadow{
  box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
}
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