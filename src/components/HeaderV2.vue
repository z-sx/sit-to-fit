<script setup lang="ts">
import { ref } from 'vue';

const links = ref([
  {
    name: 'Journey',
    to: '/journey',
  },
  {
    name: 'Physical Ergonomics',
    to: '/physical-ergonomics',
  },
  {
    name: 'Physical Activities',
    to: '/physical-activities',
  },
  {
    name: 'Dietary Plans',
    to: '/dietary-plan',
  },
  {
    name: 'Alert Reminder',
    to: '/alert-reminder',
  },
])
</script>
  
<template>
  <header>
    <RouterLink to="/">
      <img alt="Logo" src="@/assets/Logo.svg" />
    </RouterLink>
    <nav class="navigation">
      <template v-for="link in links">
        <RouterLink class="button" :to="link.to" disabled>
          {{link.name}}
        </RouterLink>
      </template>
    </nav>
    <RouterLink class="button-with-icon new-user" to="/become-new-user">
      <img src="@/assets/icons/IconSmile.svg" alt="Smile Icon">
      Become new user
    </RouterLink>
  </header>
</template>
    
<style lang="postcss" scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 32px;
  gap: 50px;
  height: 80px;
}

a{
  text-decoration: none;
}

.navigation {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 758px;
  height: 64px;

  flex: none;
  order: 1;
  flex-grow: 0;
}
.button, .button-with-icon{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
}
.new-user {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  gap: 8px;

  width: 213.7px;
  height: 64px;

  border-radius: 16px;

  flex: none;
  order: 2;
  flex-grow: 0;
}

.button {
  padding: 14px 16px;
  gap: 10px;

  height: 64px;

  border-radius: 16px;

  flex: none;
  flex-grow: 0;
}

.button-with-icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  gap: 8px;

  width: 213.7px;
  height: 64px;

  border-radius: 16px;

  flex: none;
  order: 2;
  flex-grow: 0;
}
</style>