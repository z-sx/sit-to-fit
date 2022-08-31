<script setup lang="ts">
import { ref } from 'vue'
import SedentaryViz from './SedentaryViz.vue'
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
    <div>
      <span class="small number">47%</span>
      <button class="modal-button" @click="isOpen = true">
        <img src="@/assets/images/IconGraph.svg" alt="Graph Icon">
      </button>
      <span class="description">are below the recommended physical activity</span>
    </div>
    <div>
      <span class="small number">70%</span>
      <span class="description">are below the recommended physical activity</span>
    </div>
  </div>
  <Teleport to="body">
    <dialog class="modal" :open="isOpen">
      <button class="close" @click="isOpen = false">
        <img src="@/assets/images/IconClose.svg" alt="Close Icon">
      </button>
      <h3>In 2020, 47.3% of adults residing in Melbourne engaged in the recommended amount of physical activity</h3>
      <SedentaryViz></SedentaryViz>
    </dialog>
  </Teleport>
</template>
    
<style lang="postcss" scoped>
.red {
  color: #F94D4D;
}

dialog.modal[open] {
  position: fixed;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
  border: 0;
  padding: calc(var(--gutter));
  border-radius: 10px;
  width: 80vw;
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

.journey-stat {
  transform: scale(0.8) translate(-10%);
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

    & .number {
      font-size: 55px;
      font-family: Inter, sans-serif;
      font-weight: bold;
      font-style: italic;
      line-height: 1;
      flex: 1 1 auto;

      &.small {
        font-size: 40px;
        line-height: 55px;
      }
    }

    & .description {
      height: 96px;
      font-size: 20px;
      font-family: Inika, serif;
    }

    & button {
      position: absolute;
      right: 20px;
      width: 32px;
      height: 32px;
      cursor: pointer;

      & img {
        height: 100%;
      }

      &:hover {
        background-color: var(--color-hover);
      }

      &:active {
        background-color: var(--color-press);
      }

      &:focus {
        box-shadow: var(--color-focus);
      }
    }
  }
}
</style>