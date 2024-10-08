<template>
    <router-link :to="`/product/${product.id}`" class="product-card border rounded-lg shadow-lg overflow-hidden">
      <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover" />
      <div class="p-4">
        <h3 class="text-lg font-bold">{{ product.title }}</h3>
        <p class="text-gray-600 mt-2">
          Current Bid: <span class="text-blue-500 font-semibold">{{ product.currentBid }}</span>
        </p>
        <button class="mt-4 bg-green-500 text-white p-2 rounded hover:bg-green-600">
          Place Bid
        </button>
      </div>
    </router-link>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .product-card {
    transition: transform 0.2s;
  }
  .product-card:hover {
    transform: scale(1.05);
  }
  </style>
  