<template>
  <div class="live-auction-page flex p-6">
    <div class="grid grid-cols-12">
      <!-- Filter Bar Component -->
      <div class="col-span-2"> 
        <FilterBar class="filter-bar" />
      </div>
      <div class="col-span-10">
        <!-- Auction Products Section -->
        <div class="products-section px-4 flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
      </div>
    </div>
  </div>
  <SiteFooter />
</template>

<script>
import FilterBar from '../components/FilterBar.vue';
import ProductCard from '../components/ProductCard.vue';
import SiteFooter from '../components/SiteFooter.vue';

export default {
  components: {
    FilterBar,
    ProductCard,
    SiteFooter,
  },
  data() {
    return {
      products: [
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
      ],
    };
  },
};
</script>

<style scoped>
.live-auction-page {
  height: 100%;
}

.filter-bar {
  width: 250px;
  height: 100%;
  overflow-y: auto;
}

.products-section {
  overflow-y: auto;
}
</style>
