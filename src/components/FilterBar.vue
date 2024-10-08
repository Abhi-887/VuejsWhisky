<template>
    <div class="filter-bar bg-white shadow-md p-4 rounded h-full">
      <h2 class="text-lg font-bold mb-4">Filters</h2>
  
      <!-- Distilleries Section -->
      <div class="filter-section mb-6">
        <h3 class="font-semibold">Distilleries</h3>
        <div v-for="distillery in distilleries" :key="distillery.name" class="flex items-center my-1">
          <input
            type="checkbox"
            :id="distillery.name"
            v-model="selectedDistilleries"
            :value="distillery.name"
            class="mr-2"
          />
          <label :for="distillery.name">{{ distillery.name }}</label>
          <span>({{ distillery.count }})</span>
        </div>
      </div>
  
      <!-- Region Section -->
      <div class="filter-section mb-6">
        <h3 class="font-semibold">Region</h3>
        <div v-for="region in regions" :key="region.name" class="flex items-center my-1">
          <input
            type="checkbox"
            :id="region.name"
            v-model="selectedRegions"
            :value="region.name"
            class="mr-2"
          />
          <label :for="region.name">{{ region.name }}</label>
          <span>({{ region.count }})</span>
        </div>
      </div>
  
      <!-- Whisky Type Section -->
      <div class="filter-section mb-6">
        <h3 class="font-semibold">Whisky Type</h3>
        <div v-for="type in whiskyTypes" :key="type.name" class="flex items-center my-1">
          <input
            type="checkbox"
            :id="type.name"
            v-model="selectedWhiskyTypes"
            :value="type.name"
            class="mr-2"
          />
          <label :for="type.name">{{ type.name }}</label>
          <span>({{ type.count }})</span>
        </div>
      </div>
  
      <!-- Distillery Status Section -->
      <div class="filter-section mb-6">
        <h3 class="font-semibold">Distillery Status</h3>
        <div v-for="status in distilleryStatus" :key="status.name" class="flex items-center my-1">
          <input
            type="checkbox"
            :id="status.name"
            v-model="selectedStatus"
            :value="status.name"
            class="mr-2"
          />
          <label :for="status.name">{{ status.name }}</label>
          <span>({{ status.count }})</span>
        </div>
      </div>
  
      <!-- Age Section -->
      <div class="filter-section mb-6">
        <h3 class="font-semibold">Age</h3>
        <div v-for="age in ages" :key="age.range" class="flex items-center my-1">
          <input
            type="checkbox"
            :id="age.range"
            v-model="selectedAges"
            :value="age.range"
            class="mr-2"
          />
          <label :for="age.range">{{ age.range }}</label>
          <span>({{ age.count }})</span>
        </div>
      </div>
  
      <!-- Strength Section -->
      <div class="filter-section mb-6">
        <h3 class="font-semibold">Strength</h3>
        <div v-for="strength in strengths" :key="strength.range" class="flex items-center my-1">
          <input
            type="checkbox"
            :id="strength.range"
            v-model="selectedStrengths"
            :value="strength.range"
            class="mr-2"
          />
          <label :for="strength.range">{{ strength.range }}</label>
          <span>({{ strength.count }})</span>
        </div>
      </div>
  
      <!-- Bottle Size Section -->
      <div class="filter-section mb-6">
        <h3 class="font-semibold">Bottle Size</h3>
        <div v-for="size in bottleSizes" :key="size.size" class="flex items-center my-1">
          <input
            type="checkbox"
            :id="size.size"
            v-model="selectedBottleSizes"
            :value="size.size"
            class="mr-2"
          />
          <label :for="size.size">{{ size.size }}</label>
          <span>({{ size.count }})</span>
        </div>
      </div>
  
      <!-- Lot Location Section -->
      <div class="filter-section mb-6">
        <h3 class="font-semibold">Lot Location</h3>
        <div v-for="location in lotLocations" :key="location.name" class="flex items-center my-1">
          <input
            type="checkbox"
            :id="location.name"
            v-model="selectedLotLocations"
            :value="location.name"
            class="mr-2"
          />
          <label :for="location.name">{{ location.name }}</label>
          <span>({{ location.count }})</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        distilleries: [
          { name: 'Other', count: 4241 },
          { name: 'Macallan', count: 830 },
          { name: 'Springbank', count: 493 },
          { name: 'Bowmore', count: 325 },
          { name: 'Bruichladdich', count: 304 },
          { name: 'Buffalo Trace', count: 255 },
          { name: '(none)', count: 240 },
          { name: 'Ardbeg', count: 214 },
          { name: 'Yamazaki', count: 184 },
          { name: 'Balvenie', count: 166 },
          { name: 'Chichibu', count: 134 },
          { name: 'Laphroaig', count: 133 },
          { name: 'Glendronach', count: 124 },
          { name: 'Highland Park', count: 106 },
          { name: 'Glenfiddich', count: 101 },
          { name: 'Karuizawa', count: 94 },
          { name: 'Lagavulin', count: 93 },
          { name: 'Glenmorangie', count: 77 },
          { name: 'Port Ellen', count: 64 },
          { name: 'Glenlivet', count: 59 },
        ],
        regions: [
          { name: 'Speyside', count: 2179 },
          { name: 'Islay', count: 1453 },
          { name: 'Highland', count: 1028 },
          { name: 'Japan', count: 862 },
          { name: 'USA and Canada', count: 595 },
          { name: 'Campbeltown', count: 561 },
          { name: 'Island', count: 458 },
          { name: 'Europe', count: 446 },
          { name: 'Other', count: 341 },
          { name: 'Lowland', count: 249 },
          { name: 'Ireland', count: 105 },
          { name: 'England', count: 76 },
          { name: 'India', count: 17 },
          { name: 'Wales', count: 17 },
        ],
        whiskyTypes: [
          { name: 'Single Malt Whisky', count: 6445 },
          { name: 'Blended Whisky', count: 745 },
          { name: 'Bourbon and Rye', count: 534 },
          { name: 'Brandy', count: 356 },
          { name: 'Blended Malt Whisky', count: 179 },
          { name: 'Non - Whisky', count: 179 },
          { name: 'Other Whisky', count: 104 },
          { name: 'Grain Whisky', count: 56 },
          { name: 'Blended Grain Whisky', count: 5 },
        ],
        distilleryStatus: [
          { name: 'Operational', count: 3849 },
          { name: 'Closed', count: 1390 },
          { name: 'Future', count: 239 },
        ],
        ages: [
          { range: '0 - 5 Years', count: 2304 },
          { range: '5 - 10 Years', count: 1974 },
          { range: '10 - 15 Years', count: 1593 },
          { range: '15 - 20 Years', count: 1248 },
          { range: '20 - 25 Years', count: 831 },
          { range: '25 - 30 Years', count: 422 },
          { range: '30 - 40 Years', count: 151 },
          { range: '40+ Years', count: 97 },
        ],
        strengths: [
          { range: 'Under 40%', count: 63 },
          { range: '40 - 43%', count: 3026 },
          { range: '43 - 46%', count: 2783 },
          { range: '46 - 50%', count: 1632 },
          { range: 'Over 50%', count: 1971 },
        ],
        bottleSizes: [
          { size: '30cl', count: 144 },
          { size: '50cl', count: 1476 },
          { size: '70cl', count: 4336 },
          { size: '1L', count: 582 },
          { size: '1.5L', count: 111 },
        ],
        lotLocations: [
          { name: 'United Kingdom', count: 3165 },
          { name: 'Europe', count: 1461 },
          { name: 'Asia', count: 156 },
          { name: 'North America', count: 184 },
          { name: 'Australia', count: 18 },
          { name: 'Other', count: 206 },
        ],
  
        // Selected filters
        selectedDistilleries: [],
        selectedRegions: [],
        selectedWhiskyTypes: [],
        selectedStatus: [],
        selectedAges: [],
        selectedStrengths: [],
        selectedBottleSizes: [],
        selectedLotLocations: [],
      };
    },
  };
  </script>
  
  <style scoped>
  .filter-bar {
    max-width: 300px;
  }
  </style>
  