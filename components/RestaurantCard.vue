<template>
  <div class="restaurant-card">
    <img
      :src="restaurant.LogoUrl"
      :alt="`logo for ${restaurant.Name}`"
      class="restaurant-logo"
    />
    <div class="restaurant-info">
      <div class="restaurant-name">
        <b>{{ restaurant.Name }}</b>
      </div>
      <div class="restaurant-cuisines">
        {{
          restaurant.Cuisines.map((cuisine: any) => cuisine.Name).join(" • ")
        }}
      </div>
      <div class="restaurant-rating">
        <template v-if="restaurant.RatingAverage > 0">
          {{ `Average Rating: ${restaurant.RatingAverage}` }}
        </template>
        <template v-else> No rating yet </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Restaurant } from "~/types/restaurants";

type RestaurantCardProps = {
  restaurant: Restaurant;
};

const props = defineProps<RestaurantCardProps>();
</script>

<style lang="scss" scope>
.restaurant-card {
  align-items: center;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
  padding: 1rem;
}

.restaurant-logo {
  width: 6rem;
  height: 6rem;
}

.restaurant-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
