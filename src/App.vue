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
      <RouterLink to="/sedentary-lifestyle">Physical Activities</RouterLink>
      <RouterLink to="/physical-ergonomics">Dietary Plan</RouterLink>
      <RouterLink to="/sedentary-lifestyle">Alert Reminder</RouterLink>
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