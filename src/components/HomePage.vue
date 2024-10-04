<template>
    <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold mb-4">Welcome to Our Website</h1>
      <p class="text-lg text-center max-w-lg mb-6">
        This is a sample homepage created using Vue.js and Tailwind CSS. 
        Explore our features and services.
      </p>
      <router-link to="/about" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Learn More
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  