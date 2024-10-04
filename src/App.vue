<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-blue-600 text-white p-4">
      <h1 class="text-3xl text-center">My Vue.js Website</h1>
      <nav class="mt-2">
        <ul class="flex justify-center space-x-4">
          <li>
            <router-link to="/" class="hover:text-gray-300">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="hover:text-gray-300">About</router-link>
          </li>
          <li>
            <router-link to="/services" class="hover:text-gray-300">Services</router-link>
          </li>
          <li>
            <router-link to="/contact" class="hover:text-gray-300">Contact</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <main class="flex-grow">
      <router-view />
    </main>

    <footer class="bg-blue-600 text-white text-center p-4">
      <p>&copy; 2024 My Company. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Global styles can go here if needed */
</style>
