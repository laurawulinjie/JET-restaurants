<template>
  <div class="restaurant-list">
    <div v-for="restaurant in restaurants" :key="restaurant.Id">
      <RestaurantCard :restaurant="restaurant" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Restaurant } from "~/types/restaurants";

type RestaurantListProps = {
  restaurants: Restaurant[];
};

const props = defineProps<RestaurantListProps>();
</script>
