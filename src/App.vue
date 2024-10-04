<template>
  <div id="app">
    <AppHeader />
    <HomePage /> <!-- Use the HomePage component here -->
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'; // Import your header
import AppFooter from './components/AppFooter.vue'; // Import your footer
import HomePage from './views/HomePage.vue'; // Import your home page

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    HomePage,
  },
};
</script>

<style>
/* Global styles can go here */
</style>
