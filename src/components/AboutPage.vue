<template>
    <div class="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <h1 class="text-3xl font-bold">About Us</h1>
      <p class="text-lg text-center max-w-lg mt-4">
        This page contains information about our company and our mission.
      </p>
      <router-link to="/" class="mt-4 text-blue-500 hover:underline">Back to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage',
  };
  </script>
  