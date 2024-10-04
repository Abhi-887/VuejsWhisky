<template>
  <section class="hero bg-cover bg-center text-white" style="background-image: url('@/assets/hero-bg.jpg');">
    <div class="container mx-auto text-center py-24">
      <h1 class="text-5xl font-bold">Welcome to Our Shop!</h1>
      <p class="text-lg mt-4">Find the best products at the best prices</p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
        Shop Now
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
};
</script>

<style scoped>
.hero {
  height: 60vh;
}
</style>
