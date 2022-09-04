<script setup lang="ts">
</script>
    
<template>
  <Teleport to="body">
    <div class="modal-overlay">
      <div class="modal">
        <button class="close" @click="$emit('close')">
          <img src="@/assets/images/IconClose.svg" alt="Close Icon">
        </button>
        <slot>

        </slot>
      </div>
    </div>
  </Teleport>
</template>
    
<style lang="postcss" scoped>
.modal-overlay{
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
    width: min(100vw, 600px);
    height: min-content;
    display: flex;
    flex-direction: column;
    align-items: center;
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
</style>