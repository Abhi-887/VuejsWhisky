<template>
    <div class="product-detail-page flex flex-col md:flex-row p-6">
      <div class="product-image w-full md:w-1/2">
        <img :src="product.image" alt="Product Image" class="rounded-lg shadow-lg w-full h-auto" />
      </div>
      <div class="product-info w-full md:w-1/2 pl-0 md:pl-6 mt-6 md:mt-0">
        <h1 class="text-3xl font-bold text-gray-900">{{ product.title }}</h1>
        <p class="text-lg text-gray-700 mt-2">
          Current Bid: 
          <span class="font-semibold text-blue-600">{{ product.currentBid }}</span>
        </p>
        <p class="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
          Sed cursus ante dapibus diam.
        </p>
        <button class="mt-6 px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition duration-200 ease-in-out">
          Place Bid
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: null,
      };
    },
    created() {
      const productId = this.$route.params.id; // Get product ID from the route
      this.fetchProductData(productId);
    },
    methods: {
      fetchProductData(id) {
        // Simulate fetching data or use actual API call
        const products = [
        { id: 1, title: 'Macallan 50 Year Old', currentBid: '£45,000', image: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/product_current/public/8144359-001_0.JPG?itok=mLN_tOsh' },
        { id: 2, title: 'Laphroaig 1998 Butt', currentBid: '£90,000', image: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/product_current/public/Laphroaig%201998_0.jpg?itok=ZKIDSDSm' },
        { id: 3, title: 'Glenfiddich 21 Year Old', currentBid: '£120,000', image: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/product_current/public/5203482-001.JPG?itok=SpkFOr6z' },
        { id: 4, title: 'Springbank 18 Year Old', currentBid: '£150,000', image: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/product_current/public/8145192-001.JPG?itok=BB5N3mNv' },
        { id: 5, title: 'Ardbeg 10 Year Old', currentBid: '£50,000', image: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/product_current/public/5204032-001.JPG?itok=lFbwGbNq' },
        { id: 6, title: 'Highland Park 12 Year Old', currentBid: '£60,000', image: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/product_current/public/7028497-001.JPG?itok=2RRvEJqi' },
        { id: 7, title: 'Yamazaki 12 Year Old', currentBid: '£80,000', image: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/product_current/public/5202468-001.JPG?itok=etGSJENe' },
        { id: 8, title: 'Bruichladdich 10 Year Old', currentBid: '£40,000', image: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/product_current/public/8147445-001.JPG?itok=l79qmX06' },
        { id: 9, title: 'Macallan 50 Year Old', currentBid: '£45,000', image: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/product_current/public/8144359-001_0.JPG?itok=mLN_tOsh' },
        { id: 10, title: 'Laphroaig 1998 Butt', currentBid: '£90,000', image: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/product_current/public/Laphroaig%201998_0.jpg?itok=ZKIDSDSm' },
        { id: 11, title: 'Glenfiddich 21 Year Old', currentBid: '£120,000', image: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/product_current/public/5203482-001.JPG?itok=SpkFOr6z' },
        { id: 12, title: 'Springbank 18 Year Old', currentBid: '£150,000', image: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/product_current/public/8145192-001.JPG?itok=BB5N3mNv' },
        { id: 13, title: 'Ardbeg 10 Year Old', currentBid: '£50,000', image: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/product_current/public/5204032-001.JPG?itok=lFbwGbNq' },
        { id: 14, title: 'Highland Park 12 Year Old', currentBid: '£60,000', image: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/product_current/public/7028497-001.JPG?itok=2RRvEJqi' },
        { id: 15, title: 'Yamazaki 12 Year Old', currentBid: '£80,000', image: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/product_current/public/5202468-001.JPG?itok=etGSJENe' },
        { id: 16, title: 'Bruichladdich 10 Year Old', currentBid: '£40,000', image: 'https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/product_current/public/8147445-001.JPG?itok=l79qmX06' },
        ];
        this.product = products.find(product => product.id == id); // Find product by ID
      },
    },
  };
  </script>
  
  <style scoped>
  .product-detail-page {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh; /* Ensure full height */
  }
  
  .product-image img {
    max-width: 100%; /* Prevents overflow */
    border-radius: 0.5rem; /* Tailwind's equivalent of rounded-lg */
  }
  
  .product-info {
    padding-left: 2rem; /* Tailwind's equivalent of 8 */
  }
  
  /* Optional: Additional styling for button hover effect */
  button {
    transition: background-color 0.2s ease-in-out;
  }
  </style>
  