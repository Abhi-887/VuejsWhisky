<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div
      v-for="product in products"
      :key="product.id"
      class="bg-white rounded shadow p-4 cursor-pointer hover:shadow-lg"
      @click="goToProductDetail(product.id)"
    >
      <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover mb-4" />
      <h2 class="text-xl font-semibold">{{ product.title }}</h2>
      <p class="text-lg text-gray-700">${{ product.price.toFixed(2) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductGrid',
  props: {
    products: Array,
  },
  methods: {
    goToProductDetail(productId) {
      // Use Vue Router to navigate to the product detail page
      this.$router.push({ name: 'ProductDetail', params: { id: productId } });
    },
  },
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
