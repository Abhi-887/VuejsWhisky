<template>
    <div class="min-h-screen bg-gray-300 flex flex-col items-center justify-center">
      <h1 class="text-3xl font-bold">Our Services</h1>
      <p class="text-lg text-center max-w-lg mt-4">
        We offer a wide range of services to help you achieve your goals.
      </p>
      <router-link to="/" class="mt-4 text-blue-500 hover:underline">Back to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ServicesPage',
  };
  </script>
  