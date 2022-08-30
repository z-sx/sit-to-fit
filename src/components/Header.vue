<script setup lang="ts">
</script>

<template>
  <header>
    <RouterLink class="home" to="/">
      <img class="logo" alt="logo" src="@/assets/logo.svg" />
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
    <button class="menu-button">
      <img src="@/assets/images/IconMenu.svg" alt="">
    </button>
  </header>
</template>

<style lang="postcss" scoped>
header {
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  font-family: 'Roboto Flex', sans-serif;
  @media(width <1024px) {
    height:64px;
  }

  & .home {
    line-height: 0;

    & .logo {
      height: 80px;
      margin-left: 20px;
      @media(width <1024px) {
        height:64px;
      }
    }

  }

  & nav>a,
  & a.new-user {
    /** button-like links */
    color: var(--color-text);
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    padding: 16px;
    border-radius: 8px;
    height: 56px;

    &:hover {
      background-color: var(--color-hover);
    }

    &:active {
      background-color: var(--color-press);
    }

    &:focus {
      box-shadow: var(--color-focus);
    }

    &.router-link-active {
      /* active state of link */
      background-color: var(--color-active);

      &:hover {
        background-color: var(--color-active-hover);
      }

      &:active {
        background-color: var(--color-active-press);
      }
    }
  }

  & nav {
    /* >=1024px */
    display: flex;
    gap: 2px;
    @media(width < 1024px) {
      display: none;
    }
  }

  & .new-user {
    margin-right: 20px;

    @media(width < 1024px) {
      display: none;
    }
  }

  & .menu-button {
    display: none;
    border: 0;
    padding: 0;
    line-height: 0;

    &:hover {
      background-color: var(--color-hover);
    }

    &:active {
      background-color: var(--color-press);
    }

    &:focus {
      box-shadow: var(--color-focus);
    }

    @media(width <1024px) {
      display: block;
      width: 64px;
      height: 64px;
      background-color: white;
    }
  }
}
</style>