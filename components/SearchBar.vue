<template>
  <div class="search-bar" v-if="restaurants.length > 0">
    <input
      v-model="searchInput"
      type="text"
      placeholder="Search restaurants by name"
      @input="handleSearch"
    />
  </div>
</template>

<script setup lang="ts">
const restaurantsStore = useRestaurantsStore();
const searchInput = ref("");
const { restaurants } = storeToRefs(restaurantsStore);

const handleSearch = () => {
  restaurantsStore.searchQuery = searchInput.value.trim();
};
</script>

<style lang="scss" scope>
.search-bar {
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.search-bar input {
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}
</style>
