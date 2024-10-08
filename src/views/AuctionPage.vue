<template>
  <div>
    <div class="bg-white border-t border-gray-300 p-4 text-center">
      <div class="container mx-auto">
        <p class="text-gray-700">
          September Auction Ends Monday 7 October. Ready to sell your whisky?
          <span class="text-orange-500"> Sell with us in our next auction.</span>
        </p>
      </div>
    </div>

    <BannerBody /> 

    <div class="p-4">
      <ul class="tabs tabs-listings flex justify-center space-x-4 mb-6">
        <li
          v-for="(tab, index) in tabs"
          :key="tab.id"
          :class="`leaf tabs-title cursor-pointer ${selectedTab === index ? 'border-b-2 border-blue-500' : ''}`"
          @click="selectTab(index)"
        >
          <span>{{ tab.title }}</span>
        </li>
      </ul>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="item in filteredCards"
          :key="item.id"
          class="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"
        >
          <img :src="item.image" alt="Auction Image" class="w-32 h-32 object-cover rounded-md mb-2" />
          <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
          <p class="text-gray-600">{{ item.description }}</p>
        </div>
      </div>
    </div>

    <SiteFooter />
  </div>
</template>

<script>
import BannerBody from "@/components/BannerBody.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  name: "HomePage",
  components: {
    BannerBody,
    SiteFooter,
  },
  data() {
    return {
      selectedTab: 0,
      tabs: [
        { id: 1, title: 'Upcoming' },
        { id: 2, title: 'Exclusive to Whisky Auctioneer' },
        { id: 3, title: 'Past Auctions' },
      ],
      cards: [
        {
          id: 1,
          tabId: 0,
          title: 'Upcoming Auction 1',
          description: 'Details about upcoming auction 1.',
          image: 'https://via.placeholder.com/300x200?text=Upcoming+Auction+1', // Image URL
        },
        {
          id: 2,
          tabId: 1,
          title: 'Exclusive Auction 1',
          description: 'Details about exclusive auction 1.',
          image: 'https://via.placeholder.com/300x200?text=Exclusive+Auction+1', // Image URL
        },
        {
          id: 3,
          tabId: 2,
          title: 'Past Auction 1',
          description: 'Details about past auction 1.',
          image: 'https://via.placeholder.com/300x200?text=Past+Auction+1', // Image URL
        },
        {
          id: 4,
          tabId: 0,
          title: 'Upcoming Auction 2',
          description: 'Details about upcoming auction 2.',
          image: 'https://via.placeholder.com/300x200?text=Upcoming+Auction+2', // Image URL
        },
        {
          id: 5,
          tabId: 1,
          title: 'Exclusive Auction 2',
          description: 'Details about exclusive auction 2.',
          image: 'https://via.placeholder.com/300x200?text=Exclusive+Auction+2', // Image URL
        },
        {
          id: 6,
          tabId: 2,
          title: 'Past Auction 2',
          description: 'Details about past auction 2.',
          image: 'https://via.placeholder.com/300x200?text=Past+Auction+2', // Image URL
        },
      ],
    };
  },
  computed: {
    filteredCards() {
      return this.cards.filter(card => card.tabId === this.selectedTab);
    },
  },
  methods: {
    selectTab(index) {
      this.selectedTab = index;
    },
  },
};
</script>

<style scoped>
.tabs-title span {
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
}

.tabs-title span:hover {
  text-decoration: underline;
}
</style>
