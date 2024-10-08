import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue'; // Ensure path format consistency
import LiveAuctionPage from '../views/LiveAuctionPage.vue'; // Correctly import the LiveAuctionPage
import AuctionPage from '../views/AuctionPage.vue';
import ProductDetailPage from '../views/ProductDetailPage.vue'; // Ensure ProductDetailPage is imported

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/live-auction', // Consistent lowercase path
    name: 'LiveAuction',
    component: LiveAuctionPage,
  },
  {
    path: '/auctions', // Consistent lowercase path
    name: 'Auction',
    component: AuctionPage,
  },
  {
    path: '/product/:id', // Dynamic route for product details
    name: 'ProductDetail',
    component: ProductDetailPage,
    props: true, // Allows route params to be passed as props to the component
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
