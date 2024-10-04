<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg shadow-md max-w-md">
        <h1 class="text-2xl font-bold text-center mb-4">Welcome to Our Website</h1>
        <p class="text-gray-700 text-center mb-4">
          This is a sample homepage created using Vue.js and Tailwind CSS. 
          Explore our features and services.
        </p>
        <div class="flex justify-center">
          <router-link to="/about" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Learn More
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>
  