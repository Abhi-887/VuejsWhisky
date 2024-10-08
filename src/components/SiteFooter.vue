<template>
  <div>
    <!-- Banner Section -->



    <!-- Footer Section -->
    <footer class="bg-white text-gray-800 p-8 border-t border-gray-300">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <!-- Stay Informed Section -->
          <div>
            <h2 class="text-lg font-bold">Stay informed</h2>
            <p class="mt-2">
              Join us on Facebook | Follow us on Twitter | Browse our galleries on Instagram | Watch our Videos on Vimeo
            </p>
          </div>

          <!-- Links Section -->
          <div>
            <h3 class="text-md font-bold">Links</h3>
            <ul class="list-none p-0">
              <li><a href="#" class="hover:underline">News</a></li>
              <li><a href="#" class="hover:underline">FAQs</a></li>
              <li><a href="#" class="hover:underline">Shipping</a></li>
              <li><a href="#" class="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" class="hover:underline">Privacy Policy</a></li>
              <li><a href="#" class="hover:underline">Counterfeit Policy</a></li>
              <li><a href="#" class="hover:underline">Code of Ethics</a></li>
            </ul>
          </div>

          <!-- About Us Section -->
          <div>
            <h3 class="text-md font-bold">About Us</h3>
            <ul class="list-none p-0">
              <li><a href="#" class="hover:underline">Contact Us</a></li>
              <li><a href="#" class="hover:underline">Media Enquiries</a></li>
              <li><a href="#" class="hover:underline">About Us</a></li>
              <li><a href="#" class="hover:underline">Careers</a></li>
            </ul>
          </div>
        </div>

        <!-- Additional Info Section -->
        <div class="text-center text-xs">
          <p>Sitemap | Privacy policy | Terms of use | Cookie policy</p>
          <p>Registered in Scotland, Company Number SC490586 and VAT Registration Number 197 5059 65.</p>
          <p>&copy; 2024 Whisky Auctioneer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
footer {
  background-color: white; /* Ensuring the background is white */
  color: #4A5568; /* Gray text color */
}
.news-list-item {
  transition: transform 0.2s;
}

.news-list-item:hover {
  transform: scale(1.02);
}
</style>
