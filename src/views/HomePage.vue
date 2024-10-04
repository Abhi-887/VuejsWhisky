<template>
  <div>
    <HeroSection />
    <ProductGrid :products="products" />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import ProductGrid from "@/components/ProductGrid.vue";

export default {
  name: "HomePage",
  components: {
    HeroSection,
    ProductGrid,
  },
  data() {
    return {
      products: [
        { id: 1, title: "Product 1", price: 19.99, image: "product1.jpg" },
        { id: 2, title: "Product 2", price: 29.99, image: "product2.jpg" },
        { id: 3, title: "Product 3", price: 39.99, image: "product3.jpg" },
        // Add more products as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Add any page-specific styles if needed */
</style>
