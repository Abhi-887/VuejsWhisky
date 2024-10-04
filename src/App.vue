<!-- src/App.vue -->
<template>
  <div id="app">
    <HomePage /> <!-- Updated component name -->
  </div>
</template>

<script>
import HomePage from './views/HomePage.vue'; // Update this import

export default {
  name: 'App',
  components: {
    HomePage, // Updated component name
  },
};
</script>

<style>
/* Global styles can go here */
</style>
