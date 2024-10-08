<template>
  <div>
    <div class="bg-white border-t border-gray-300 p-4">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 gap-4">
          <div>
            <p class="text-gray-700">
              September Auction Ends Monday 7 October. Ready to sell your whisky?
              <span class="text-orange-500"> Sell with us in our next auction.</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <HeroSection />

    <div class="bg-white border-t border-gray-300 py-8">
      <div class="container mx-auto">
        <h2 class="text-2xl font-bold text-gray-800 py-4">
          ONLINE WHISKY AUCTION: BUY AND SELL ICONIC, RARE & COLLECTIBLE WHISKY
        </h2>
        <p class="text-gray-700 py-4">
          Whisky Auctioneer is the world leading platform for the buying and selling of whisky and spirits at auction. Our global auctions feature the most comprehensive selection of old, rare and collectible whiskies and spirits available online. You can find an unrivalled selection of rare Scotch whisky, Japanese whisky, Irish whiskey, bourbon, and other world whiskies.
        </p>
        <p class="text-gray-700 py-4">
          Our live whisky auctions also feature other spirits such as Cognac, Armagnac, Tequila, Rum, and Wine.
        </p>
      </div>
    </div>

    <BannerBody /> <!-- Correct usage of the BannerBody component -->
        <!-- News Section -->
        <div id="news-area" class="bg-gray-100 py-8">
      <div id="news-area-inner" class="container mx-auto">
        <h2 class="text-2xl font-bold text-center mb-6">Latest News</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="news-list-item bg-white border rounded-lg shadow-md overflow-hidden">
            <div class="news-img">
              <a href="/news/announcements/ewan-mcgregor-auctions-26-year-old-arran-whisky-auctioneer-chas">
                <img
                  src="https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/news_list_new/public/field/image/Ewan%20McGregor%20-%201.jpg?itok=YIeQ8Jbf"
                  alt="Ewan McGregor with Exclusive Isle of Arran Whisky"
                  class="w-full h-48 object-cover"
                />
              </a>
            </div>
            <div class="news-desc p-4">
              <div class="inner">
                <div class="news-title">
                  <a
                    href="/news/announcements/ewan-mcgregor-auctions-26-year-old-arran-whisky-auctioneer-chas"
                    class="text-lg font-semibold text-blue-600 hover:underline"
                  >
                    Ewan McGregor Auctions 26 Year Old Arran at Whisky Auctioneer for CHAS
                  </a>
                </div>
                <p class="text-gray-700 mt-2">
                  Ewan McGregor returns to Arran Distillery to auction exclusive single cask whisky at Whisky Auctioneer in aid of CHAS.
                </p>
              </div>
              <div class="news-read-more mt-4">
                <a
                  href="/news/announcements/ewan-mcgregor-auctions-26-year-old-arran-whisky-auctioneer-chas"
                  class="text-blue-600 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div class="news-list-item bg-white border rounded-lg shadow-md overflow-hidden">
            <div class="news-img">
              <a href="/news/auction-highlights/celebrating-200-years-macallan">
                <img
                  src="https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/news_list_new/public/field/image/Ewan%20McGregor%20-%201.jpg?itok=YIeQ8Jbf"
                  alt="Macallan Collection"
                  class="w-full h-48 object-cover"
                />
              </a>
            </div>
            <div class="news-desc p-4">
              <div class="inner">
                <div class="news-title">
                  <a
                    href="/news/auction-highlights/celebrating-200-years-macallan"
                    class="text-lg font-semibold text-blue-600 hover:underline"
                  >
                    Celebrating 200 Years of Macallan
                  </a>
                </div>
                <p class="text-gray-700 mt-2">
                  Uncover the legacy of The Macallan and some of their most enduring whisky releases...
                </p>
              </div>
              <div class="news-read-more mt-4">
                <a
                  href="/news/auction-highlights/celebrating-200-years-macallan"
                  class="text-blue-600 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div class="news-list-item bg-white border rounded-lg shadow-md overflow-hidden">
            <div class="news-img">
              <a href="/news/collectors-corner/expert-guide-collecting-bowmore">
                <img
                  src="https://web-whisky-live.s3-eu-west-1.amazonaws.com/s3fs-public/styles/news_list_new/public/field/image/Ewan%20McGregor%20-%201.jpg?itok=YIeQ8Jbf"
                  alt="An Expert Guide To Collecting Bowmore"
                  class="w-full h-48 object-cover"
                />
              </a>
            </div>
            <div class="news-desc p-4">
              <div class="inner">
                <div class="news-title">
                  <a
                    href="/news/collectors-corner/expert-guide-collecting-bowmore"
                    class="text-lg font-semibold text-blue-600 hover:underline"
                  >
                    An Expert Guide To Collecting Bowmore
                  </a>
                </div>
                <p class="text-gray-700 mt-2">
                  Are you looking to build an impressive Bowmore single malt whisky collection? Whether you're a seasoned collector or just starting, this expert guide will help you navigate the most sought-after Bowmore bottles.
                </p>
              </div>
              <div class="news-read-more mt-4">
                <a
                  href="/news/collectors-corner/expert-guide-collecting-bowmore"
                  class="text-blue-600 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SiteFooter />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import BannerBody from "@/components/BannerBody.vue"; 
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  name: "HomePage",
  components: {
    HeroSection,
    BannerBody, // Corrected component registration
    SiteFooter,
  },
};
</script>

<style scoped>
/* Add any page-specific styles if needed */
</style>
