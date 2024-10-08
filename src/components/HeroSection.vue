<template>
  <section class="hero bg-cover bg-center text-white" style="background-image: url('https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/Website%20Hero%20Balvenie%20Vintage%20Casks_Hero.jpg');">
    <div class="container mx-auto text-center py-24">
      <h1 class="text-5xl font-bold">SEPTEMBER AUCTION NOW LIVE</h1>
      <p class="text-lg mt-4">BROWSE THOUSANDS OF ICONIC, RARE AND COLLECTIBLE WHISKIES…</p>
      <button class="border-2 border-white text-white font-bold py-3 px-8 rounded-full bg-transparent hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out mt-6">
        Browse
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
  height: 80vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
