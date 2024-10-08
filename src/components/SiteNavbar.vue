<template>
  <nav class="bg-white shadow-lg">
    <div class="container mx-auto py-4 px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo or Brand Name -->
        <div class="text-4xl font-bold">
          <router-link to="/" class="text-gray-800 hover:text-blue-500">Whisky Auctioneer</router-link>
        </div>
        <!-- Navbar Links -->
        <ul class="flex space-x-6">
          <li>
            <router-link to="/live-auction" class="text-gray-700 hover:text-blue-500">Live Auction</router-link>
          </li>
          <li>
            <router-link to="/auctions" class="text-gray-700 hover:text-blue-500">Auctions</router-link>
          </li>
          <li>
            <router-link to="/info" class="text-gray-700 hover:text-blue-500">Info</router-link>
          </li>
          <li>
            <router-link to="/account" class="text-gray-700 hover:text-blue-500">Account</router-link>
          </li>
          <!-- Search Icon -->
          <li>
            <router-link to="/search" class="text-gray-700 hover:text-blue-500">
              <i class="fas fa-search"></i> <!-- FontAwesome search icon -->
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'SiteNavbar',
};
</script>

<style scoped>
/* Optional additional styles */
</style>
