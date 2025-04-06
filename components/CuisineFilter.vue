<template>
  <div class="cuisine-filter" v-if="cuisines.length > 0">
    <div class="cuisine-buttons-heading">All cuisines, A to Z</div>
    <div class="cuisine-buttons">
      <button
        v-for="cuisine in cuisines"
        :key="cuisine"
        @click="toggleCuisine(cuisine)"
        :class="{ active: isCuisineSelected(cuisine) }"
      >
        {{ cuisine }}
        <span v-if="isCuisineSelected(cuisine)" class="checkmark">X</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
type CuisineFilterProps = {
  cuisines: string[];
};

const props = defineProps<CuisineFilterProps>();

const restaurantsStore = useRestaurantsStore();
const { cuisines, selectedCuisines } = storeToRefs(restaurantsStore);

const isCuisineSelected = (cuisineName: string): boolean => {
  return selectedCuisines.value.includes(cuisineName);
};

const toggleCuisine = (cuisineName: string) => {
  const index = selectedCuisines.value.indexOf(cuisineName);
  if (index === -1) {
    selectedCuisines.value.push(cuisineName);
  } else {
    selectedCuisines.value.splice(index, 1);
  }
};
</script>

<style lang="scss" scope>
.cuisine-filter {
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cuisine-buttons {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  margin: 1rem;
  align-items: center;
}

.cuisine-buttons button {
  position: relative;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 0.5rem;
  width: 100%;
  height: 3rem;
  cursor: pointer;
  transition: all 0.2s;
}

.cuisine-buttons button.active {
  background-color: #f36805;
  color: white;
  border-color: #f36805;
  padding-right: 1.8rem;
}

.checkmark {
  position: absolute;
  right: 1rem;
}
</style>
