<template>
  <router-link :to="{ name: 'Product', params: { id: product.id } }" class="block p-4 bg-white shadow rounded-lg">
    <img :src="product.image" alt="Product Image" class="w-full h-32 object-cover mb-2 rounded">
    <h2 class="text-lg font-bold">{{ product.title }}</h2>
    <p class="text-green-500">${{ product.price.toFixed(2) }}</p>
  </router-link>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add any styles specific to ProductCard here */
</style>
