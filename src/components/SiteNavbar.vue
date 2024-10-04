<template>
  <nav class="bg-gray-800 p-4 text-white">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-lg font-bold">
        My E-commerce Site
      </div>
      <div class="space-x-4">
        <router-link to="/" class="hover:text-blue-300">Home</router-link>
        <router-link to="/products" class="hover:text-blue-300">Products</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'SiteNavbar',
};
</script>

<style scoped>
/* Add any additional styling for the navbar if needed */
</style>
