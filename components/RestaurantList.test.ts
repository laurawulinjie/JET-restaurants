import { mount } from "@vue/test-utils";
import RestaurantList from "@/components/RestaurantList.vue";
import RestaurantCard from "@/components/RestaurantCard.vue";
import type { Restaurant } from "~/types/restaurants";

const mockRestaurants: Restaurant[] = [
  {
    Id: 1,
    Name: "Italian Pasta",
    RatingAverage: 4.5,
    LogoUrl: "/italian.jpg",
    Cuisines: [{ Name: "Italian" }],
  },
  {
    Id: 2,
    Name: "Sushi Palace",
    RatingAverage: 4.2,
    LogoUrl: "/sushi.jpg",
    Cuisines: [{ Name: "Japanese" }],
  },
];

describe("RestaurantList", () => {
  it("should render a list of RestaurantCard correctly", () => {
    const wrapper = mount(RestaurantList, {
      props: {
        restaurants: mockRestaurants,
      },
      global: {
        components: {
          RestaurantCard,
        },
      },
    });

    const cards = wrapper.findAllComponents(RestaurantCard);
    expect(cards.length).toBe(2);
    expect(cards[0].props("restaurant")).toEqual(mockRestaurants[0]);
    expect(cards[1].props("restaurant")).toEqual(mockRestaurants[1]);
  });

  it("should renders nothing when restaurants array is empty", () => {
    const wrapper = mount(RestaurantList, {
      props: {
        restaurants: [],
      },
    });

    expect(wrapper.findAllComponents(RestaurantCard).length).toBe(0);
  });
});
