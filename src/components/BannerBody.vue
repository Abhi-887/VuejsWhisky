<template>
    <section 
      class="hero bg-cover bg-center text-white" 
      :style="{ backgroundImage: 'url(https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/2024.02-seller-banner-01-01_1.jpg)' }">
      
      <div class="container mx-auto text-left py-24 pl-6 max-w-xl"> <!-- Reduced width -->
        <h1 class="text-6xl font-bold">SELL WITH WHISKY AUCTIONEER</h1> <!-- Increased title size -->
        <p class="text-lg mt-4 leading-relaxed"> <!-- Added leading for better line spacing -->
          Our market-leading auctions give your bottles the attention they deserve. <br> 
          Get started with a free valuation today.
        </p>
        <button 
          class="border-2 border-white text-white font-bold py-3 px-8 rounded-full bg-transparent hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out mt-6"
          aria-label="Sell now">
          SELL NOW
        </button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'BannerBody', // Ensure consistency in naming
  };
  </script>
  
  <style scoped>
  .hero {
    height: 60vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  </style>
  