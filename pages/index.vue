<template>
  <main class="page">
    <div class="sidebar">
      <PostcodeInput />
      <CuisineFilter :cuisines="cuisines" />
    </div>
    <div class="main-content">
      <SearchBar />
      <RestaurantList :restaurants="filteredRestaurants" />
    </div>
  </main>
</template>

<script setup lang="ts">
import CuisineFilter from "~/components/CuisineFilter.vue";
import RestaurantList from "~/components/RestaurantList.vue";
import { useRestaurantsStore } from "~/stores/useRestaurantsStore";

const restaurantsStore = useRestaurantsStore();
const { filteredRestaurants, cuisines } = storeToRefs(restaurantsStore);
restaurantsStore.fetchRestaurants();
</script>

<style lang="scss" scope>
.page {
  display: flex;
}

.sidebar {
  width: 25%;
  min-width: 250px;
}
.main-content {
  width: 75%;
  min-width: 500px;
  padding-right: 1rem;
}
</style>
