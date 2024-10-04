<!-- src/views/Home.vue -->
<template>
    <div>
      <Header />
      <main class="container mx-auto my-8">
        <h1 class="text-3xl font-bold mb-4">Welcome to Our Website!</h1>
        <p class="text-gray-700">
          This is a sample homepage created with Vue.js and Tailwind CSS. 
          You can customize it further based on your needs.
        </p>
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  
  export default {
    name: 'Home',
    components: {
      Header,
      Footer,
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  