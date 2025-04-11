import { defineStore } from "pinia";
import type { Restaurant } from "~/types/restaurants";
import { useRestaurantsLookup } from "~/composables/useRestaurantsLookup";

export type RestaurantsStore = ReturnType<typeof useRestaurantsStore>;

export const useRestaurantsStore = defineStore("restaurants", () => {
  const restaurants = ref<Restaurant[]>([]);
  const cuisines = ref<string[]>([]);
  const selectedCuisines = ref<string[]>([]);
  const searchQuery = ref<string>("");
  const postcode = ref<string>("");

  const { fetchRawData, getRestaurants, getCuisineSets } =
    useRestaurantsLookup();

  const fetchRestaurants = async () => {
    const data = await fetchRawData(postcode.value);
    if (!data) return;
    restaurants.value = getRestaurants(data);
    cuisines.value = getCuisineSets(data).sort();
  };

  const filteredRestaurants = computed(() => {
    let result = restaurants.value;

    if (selectedCuisines.value.length > 0) {
      result = result.filter((restaurant) =>
        selectedCuisines.value.some((cuisineName: string) =>
          restaurant.Cuisines.some((cuisine) => cuisine.Name === cuisineName)
        )
      );
    }

    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase();
      result = result.filter((restaurant) =>
        restaurant.Name.toLowerCase().includes(query)
      );
    }

    return result;
  });

  return {
    restaurants,
    filteredRestaurants,
    cuisines,
    selectedCuisines,
    searchQuery,
    postcode,
    fetchRestaurants,
  };
});
