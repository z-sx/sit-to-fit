<script setup lang="ts">
</script>

<template>
  <header>
    <RouterLink class="home contents" to="/">
      <img class="logo" alt="Logo" src="@/assets/logo.svg" />
    </RouterLink>

    <nav>
      <RouterLink class="button" to="/sedentary-lifestyle">Sedentary Lifestyle</RouterLink>
      <RouterLink class="button" to="/physical-ergonomics" disabled>Physical Ergonomics</RouterLink>
      <RouterLink class="button" to="/physical-activities" disabled>Physical Activities</RouterLink>
      <RouterLink class="button" to="/dietary-plan" disabled>Dietary Plan</RouterLink>
      <RouterLink class="button" to="/alert-reminder" disabled>Alert Reminder</RouterLink>
    </nav>

    <RouterLink class="new-user button" to="/become-new-user" disabled>
      Become new user
    </RouterLink>
    <button class="menu button">
      <img src="@/assets/images/IconMenu.svg" alt="Menu Icon">
    </button>
  </header>
</template>

<style lang="postcss" scoped>
header {
  display: flex;
  width: 100%;
  align-items: center;
  font-family: 'Roboto Flex', sans-serif;
  height: var(--header-height);
  justify-content: space-between;

  & .logo {
    height: 100%;
  }

  & .menu.button{
    display: block;
    border: 0;
    padding: 0;
    line-height: 0;
    background-color: transparent;
    height: 100%;
    width: var(--header-height);
    height: var(--header-height);
    & img{
      width: 50%;
    }
  }

  @media (min-width: 0px) {
    --header-height: 48px;
    padding-left: calc(var(--margin) / 2);
    & nav, & .new-user{
      display: none;
    }
  }

  @media (min-width: 600px) {
    --header-height: 56px;
  }

  @media (min-width: 840px) {
    --header-height: 64px;
    padding: 0 var(--gutter);
  }

  @media (min-width: 1240px) {
    --header-height: 80px;
    & .new-user{
      display: block;
    }
    & nav {
      display: flex;
      gap: calc(var(--gutter) / 4);
    }
    & .menu.button{
      display: none;
    }
  }

  @media (min-width: 1440px) {
    padding: 0;
    & nav {
      gap: calc(var(--gutter) / 2);
    }
  }
}

.button {
  /** button-like links */
  color: var(--color-text);
  text-decoration: none;
  font-size: 15px; /** 15*lineheight */
  font-weight: 600;
  padding: 16px;
  border-radius: 4px;
  cursor: pointer;
}
</style>