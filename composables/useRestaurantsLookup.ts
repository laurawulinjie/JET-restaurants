import type { Restaurant, RestaurantApiResponse } from "~/types/restaurants";

export const useRestaurantsLookup = () => {
  const baseUrl = useRuntimeConfig().public.API_BASE_URL;
  const apiKey = useRuntimeConfig().public.API_KEY;

  const fetchRawData = async (postcode: string) => {
    try {
      const response = await useFetch<RestaurantApiResponse>(
        `${baseUrl}/restaurants/bypostcode/${postcode}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-type": "application/json",
          },
        }
      );

      if (!response.data.value) throw new Error("No data recieved");
      return response.data.value;
    } catch (error) {
      console.error("Failed to fetch restaurant data", error);
      return null;
    }
  };

  const getRestaurants = (data: RestaurantApiResponse): Restaurant[] => {
    return data.Restaurants.map((restaurant) => ({
      Id: restaurant.Id,
      Name: restaurant.Name,
      RatingAverage: restaurant.RatingAverage,
      LogoUrl: restaurant.LogoUrl,
      Cuisines: restaurant.Cuisines.map((c) => ({ Name: c.Name })),
    }));
  };

  const getCuisineSets = (data: RestaurantApiResponse): string[] => {
    return [...new Set(data.CuisineSets.map((c) => c.Name))];
  };

  return {
    fetchRawData,
    getRestaurants,
    getCuisineSets,
  };
};
