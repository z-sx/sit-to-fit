<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink class="home" to="/">
      <img class="logo" alt="logo" src="@/assets/logo.svg"/>
    </RouterLink>
    
    <nav>
      <RouterLink to="/sedentary-lifestyle">Sedentary Lifestyle</RouterLink>
      <RouterLink to="/physical-ergonomics">Physical Ergonomics</RouterLink>
      <RouterLink to="/physical-activities">Physical Activities</RouterLink>
      <RouterLink to="/dietary-plan">Dietary Plan</RouterLink>
      <RouterLink to="/alert-reminder">Alert Reminder</RouterLink>
    </nav>

    <RouterLink class="new-user" to="/become-new-user">
      Become new user
    </RouterLink>
  </header>
  
  <RouterView />

  <footer></footer>
</template>

<style lang="postcss" scoped>
header{
  display: flex;
  height: 80px;
  align-items: center;
  & .logo{
    height: 80px;
    max-height: 100px;
    min-height: 80px;
    margin-left: 20px;
  }
  a.home{
    display:block;
    line-height: 0;
  }
  & nav>a, & a.new-user{
    color: var(--color-text);
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    display: inline-block;
    padding:16px;
    border-radius: 8px;
    &:hover{
      background-color: var(--color-hover);
    }
    &:active{
      background-color: var(--color-press);
    }
    &:focus{
      outline: var(--color-outline-focus);
      z-index: 1;
    }
    &.router-link-active{
      background-color: var(--color-active);
      &:hover{
        background-color: var(--color-active-hover);
      }
      &:active{
        background-color: var(--color-active-press);
      }
    }
  }
  & nav{
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    /* bp: ? - 1024 */
    
  }
  & .new-user{
    margin-right:20px;
  }
}
</style>