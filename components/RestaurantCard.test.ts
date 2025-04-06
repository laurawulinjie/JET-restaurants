import { mount, VueWrapper } from "@vue/test-utils";
import RestaurantCard from "@/components/RestaurantCard.vue";
import type { Restaurant } from "~/types/restaurants";

const mockRestaurant: Restaurant = {
  Id: 1,
  Name: "Test Restaurant",
  RatingAverage: 4.5,
  LogoUrl: "/test-logo.jpg",
  Cuisines: [{ Name: "Italian" }, { Name: "Pizza" }],
};

const mockRestaurantNoRating: Restaurant = {
  ...mockRestaurant,
  RatingAverage: 0,
};

const mockRestaurantNoLogo: Restaurant = {
  ...mockRestaurant,
  LogoUrl: "",
};

const mockRestaurantWithsingleCuisine: Restaurant = {
  ...mockRestaurant,
  Cuisines: [{ Name: "Italian" }],
};

let wrapper: VueWrapper;

describe("RestaurantCard", () => {
  beforeEach(() => {
    wrapper = mount(RestaurantCard, {
      props: {
        restaurant: mockRestaurant,
      },
    });
  });

  it("should render restaurant logo correctly", () => {
    expect(wrapper.find(".restaurant-logo").attributes("src")).toBe(
      "/test-logo.jpg"
    );
  });

  it("should render restaurant name correctly", () => {
    expect(wrapper.find(".restaurant-name").text()).toBe("Test Restaurant");
  });

  it("should render cuisine details correctly", () => {
    expect(wrapper.find(".restaurant-cuisines").text()).toBe("Italian • Pizza");
  });

  it("should render rating correctly", () => {
    expect(wrapper.find(".restaurant-rating").text()).toBe(
      "Average Rating: 4.5"
    );
  });

  it("should render No rating yet when RatingAverage is 0", () => {
    const wrapper = mount(RestaurantCard, {
      props: {
        restaurant: mockRestaurantNoRating,
      },
    });

    expect(wrapper.find(".restaurant-rating").text()).toBe("No rating yet");
  });

  it("should render alt text correctly for logo with incorrect url", () => {
    const wrapper = mount(RestaurantCard, {
      props: {
        restaurant: mockRestaurantNoLogo,
      },
    });

    expect(wrapper.find(".restaurant-logo").exists()).toBe(true);
    expect(wrapper.find(".restaurant-logo").attributes("alt")).toBe(
      "logo for Test Restaurant"
    );
  });

  it("should renders correctly with single cuisine", () => {
    const wrapper = mount(RestaurantCard, {
      props: {
        restaurant: mockRestaurantWithsingleCuisine,
      },
    });

    expect(wrapper.find(".restaurant-cuisines").text()).toBe("Italian");
  });
});
