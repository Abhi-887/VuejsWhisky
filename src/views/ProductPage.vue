<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold text-center mb-8">All Products</h1>
    <ProductGrid :products="products" />
  </div>
</template>

<script>
import ProductGrid from '../components/ProductGrid.vue';

export default {
  name: 'ProductPage',
  components: {
    ProductGrid,
  },
  data() {
    return {
      products: [
        { id: 1, title: 'Product 1', price: 29.99, image: 'path/to/image1.jpg' },
        { id: 2, title: 'Product 2', price: 49.99, image: 'path/to/image2.jpg' },
        { id: 3, title: 'Product 3', price: 19.99, image: 'path/to/image3.jpg' },
        { id: 4, title: 'Product 4', price: 39.99, image: 'path/to/image4.jpg' },
        // Add more products as needed
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px; /* Set a max-width for the container */
}
h1 {
  color: #333; /* Dark color for better contrast */
}
</style>
