import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import LiveAuctionPage from '../views/LiveAuctionPage.vue'; // Updated to match the path format

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/live-auction', // Changed to lowercase for consistency
    name: 'LiveAuction',
    component: LiveAuctionPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
