<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const pages = ref([
  {
    name: 'Information on Sedentary',
    to: '/sedentary-lifestyle',
  },
  {
    name: 'Ergonomics',
    to: '/physical-ergonomics',
  },
  {
    name: 'Physical Activities',
    to: '/physical-activities',
  },
  {
    name: 'Healthy Diet',
    to: '/dietary-plan',
  },
  {
    name: 'Alert Reminder',
    to: '/alert-reminder',
  },
])
const route = useRoute()
const currentIndex = computed(() => {
  const index = pages.value.findIndex(item => item.to === route.path)
  if (index === -1) {
    return null
  } else {
    return index
  }
})
const previousPage = computed(() => {
  if (currentIndex.value !== null && currentIndex.value > 0) {
    return pages.value[currentIndex.value - 1]
  } else {
    return null
  }
})
const nextPage = computed(() => {
  if (currentIndex.value !== null && currentIndex.value < pages.value.length - 1) {
    return pages.value[currentIndex.value + 1]
  } else {
    return null
  }
})
</script>
    
<template>
  <div class="journey-layout">
    <main>
      <slot></slot>
    </main>
    <aside disabled>
      <div class="progress">
        <div class="left-part">
          <span>Progress</span>
          <div></div>
        </div>
        <div class="right-part">
          <div class="indicator">
            <RouterLink class="previous" :to="previousPage?.to ?? ''">
              <img src="@/assets/images/IconLeft.svg" alt="Previous page">
            </RouterLink>
            <RouterLink class="page" v-for="page in pages" :to="page.to"></RouterLink>
            <RouterLink class="next" :to="nextPage?.to ?? ''">
              <img src="@/assets/images/IconRight.svg" alt="Next page">
            </RouterLink>
          </div>
          <div class="list">
            <RouterLink v-for="page in pages" :to="page.to">{{  page.name  }}</RouterLink>
          </div>
        </div>
      </div>
      <div class="skip">
        <span>Skip the journey?</span>
        <span>Jump directly on our tool</span>
        <RouterLink to="/tool">Use Tool</RouterLink>
      </div>
    </aside>
  </div>
</template>
   
<style lang="postcss" scoped>
@media (min-width: 0px) {
  /* mobile */
  .journey-layout{
    flex-direction: column-reverse;
    & main{
      width: 100%;
    }
  }
  .skip{
    display:none
  }
  aside{
    width:100%;
    height: 48px;
    overflow-y: hidden;
    & .progress{
      margin:0;
    }
  }
  .right-part{
    width:100%;
  }
}

@media (min-width: 600px) {
  /* tablet */
}

@media (min-width: 840px) {
  /* laptop */

}

@media (min-width: 1240px) {
  /* desktop */
  aside{
    width: 40%;
    height: auto;
    overflow: visible;
    & .progress{
      margin-right: 60px;
      margin-left: auto;
    }
  }
  .journey-layout{
    flex-direction: row;
    & main{
      width: 60%;
    }
  }
  .skip{
    display:flex;
  }
  .right-part{
    width: 320px;
  }
}

@media (min-width: 1440px) {
  /* large screen */
}
.journey-layout {
  display: flex;

  & aside {
    display: flex;
    flex-direction: column;
    gap: 40px;

    & .progress {
      display: flex;

      & .left-part>span,
      & .right-part>.indicator {
        height: 48px;
      }

      & .left-part {
        display: flex;
        flex-direction: column;

        & span {
          background: #F4FAFF;
          border-radius: 16px 0 0 16px;
          line-height: 32px;
          display: block;
          font-size: 16px;
          padding: 8px 16px;
          font-weight: bold;
        }

        & div {
          background-color: white;
          flex: 1 1 auto;
        }
      }

      & .right-part {

        background: #F4FAFF;
        border-radius: 0 16px 16px;

        & .indicator {
          display: flex;
          align-items: center;
          justify-content: space-between;

          & .page {
            width: 31px;
            height: 22px;
            background: #DCF0FF;
            border-radius: 11px;

            &.router-link-active {
              background: #0981F0;
            }
          }

          & .previous, & .next {
            padding: 0;
            border: 0;
            border-radius: 24px;
            transform: scale(0.7);
            background-color: transparent;
            line-height: 0;

            & img {
              height: 48px;
              width: 48px
            }
          }
        }

        & .list {
          padding: 16px;
          display: flex;
          flex-direction: column;
          margin-bottom: 40px;

          & a {
            font-size: 16px;
            color: black;
            text-decoration: none;
            padding: 4px;

            &.router-link-active {
              font-weight: bold;
            }
          }
        }
      }
    }

    & .skip {
      margin-left: auto;
      width: 320px;
      height: 160px;
      font-family: 'kaisei decol', serif;
      padding: 20px;
      box-shadow: 5px 20px 50px 0px rgba(16, 112, 177, 0.2);
      border-radius: 10px;
      flex-direction: column;

      & a {
        background: #0085FF;
        box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
        text-decoration: none;
        border-radius: 10px;
        font-size: 25px;
        padding: 6px 36px;
        border: 0px;
        margin: 20px auto 0 auto;
        font-family: 'kaisei decol', serif;
        color: white;
        border: 2px white solid;

        &:focus {
          outline: 2px grey solid;
        }
      }
    }
  }
}
</style>