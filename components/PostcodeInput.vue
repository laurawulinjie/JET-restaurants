<template>
  <div class="postcode-input">
    <input
      v-model="postcodeInput"
      type="text"
      placeholder="Enter Postcode"
      @keyup.enter="updatePostcode"
    />
    <button @click="updatePostcode">Search</button>
  </div>
</template>

<script setup lang="ts">
const postcodeInput = ref("");
const restaurantsStore = useRestaurantsStore();

const updatePostcode = async () => {
  if (postcodeInput.value.trim()) {
    restaurantsStore.postcode = postcodeInput.value.trim();
    await restaurantsStore.fetchRestaurants();
    restaurantsStore.selectedCuisines = [];
    restaurantsStore.searchQuery = "";
  }
};
</script>

<style lang="scss" scope>
.postcode-input {
  display: flex;
  justify-content: space-between;
  margin: 1rem;
}

.postcode-input input {
  width: 60%;
  padding: 1rem;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}

.postcode-input button {
  background-color: #f36805;
  color: white;
  border: 1px solid #f36805;
  border-radius: 0.5rem;
  width: 35%;
  cursor: pointer;
}

.postcode-input button:hover {
  background-color: #dd5d02;
  border-color: #dd5d02;
  transition: 0.1s;
}

.postcode-input button:active {
  background-color: #b84d01;
}
</style>
