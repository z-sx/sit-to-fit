<script setup lang="ts">
import { ref } from 'vue'
import SedentaryAdultViz from './SedentaryAdultViz.vue'
const isOpen = ref(false)
</script>
    
<template>
  <div class="journey-stat">
    <div>
      <span class="red number">8+</span>
      <span class="description">hours of sitting on an average weekday</span>
    </div>
    <div>
      <span class="small number">22%</span>
      <span class="description">are engaged in desk job</span>
    </div>
    <div class="clickable" @click="isOpen = true">
      <span class="small number">47%</span>
      <img src="@/assets/images/IconGraph.svg" alt="Graph Icon">
      <div>view graph</div>
      <span class="description">are below the recommended physical activity</span>
    </div>
    <div>
      <span class="small number">49%</span>
      <span class="description">mostly spend their work hours sitting</span>
    </div>
  </div>
  <Teleport to="body">
    <div class="modal-overlay" v-if="isOpen">
      <div class="modal">
        <button class="close" @click="isOpen = false">
          <img src="@/assets/images/IconClose.svg" alt="Close Icon">
        </button>
        <h3>In 2020, 47.3% of adults residing in Melbourne engaged in the recommended amount of physical activity</h3>
        <SedentaryAdultViz></SedentaryAdultViz>
      </div>
    </div>
  </Teleport>
</template>
    
<style lang="postcss" scoped>
.red {
  color: #F94D4D;
}

.modal-overlay{
  z-index: 10;
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: transparent;
  backdrop-filter: blur(4px);
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  & .modal{
    position: relative;
    background-color: white;
    padding: calc(var(--gutter));
    border-radius: 10px;
    box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
    border-radius: 10px;
    width: 1000px;
    height: min-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    & h3{
      font-weight: bold;
    }
    & .close {
      position: absolute;
      line-height: 0;
      top: calc((var(--gutter) - 32px) / 2 + 2px);
      right: calc((var(--gutter) - 32px) / 2 + 2px);
      border-radius: 100%;
      width: 32px;
      height: 32px;

      &>img {
        width: 80%;
      }
    }
  }

}

.journey-stat {
  display: flex;
  gap: 16px;
  width: calc(220px * 4 + 3 * 16px);

  @media (width < var(--bp-laptop-large)) {}

  &>div {
    width: 220px;
    height: 200px;
    background-color: white;
    box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    position: relative;
    &.clickable{
      cursor: pointer;
      transition: all 0.2s ease;
      &:hover{
        transform: scale(1.2);
        z-index: 1;
      }
      &:active{
        background-color: var(--color-press);
      }
      &:active{
        box-shadow: var(--color-focus);
      }
    }
    & .number {
      @apply font-sans text-5xl font-bold italic;
      font-weight: bold;
      font-style: italic;
      line-height: 1;
      flex: 1 1 auto;

      &.small {
        @apply text-4xl text-blue-900 font-normal;
      }
    }

    & .description {
      height: 96px;
      font-size: 20px;
      @apply font-sans
    }

    & img {
      position: absolute;
      right: 20px;
      width: 32px;
      height: 32px;
    }
    & div{
      position: absolute;
      top: 50px;
      right: 20px;
      font-size: x-small;
    }
  }
}
</style>