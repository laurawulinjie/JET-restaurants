export interface Restaurant {
  Id: number;
  Name: string;
  RatingAverage: number;
  LogoUrl: string;
  Cuisines: {
    Name: string;
  }[];
}

interface Cuisine {
  Name: string;
}

interface CuisineSet {
  Cuisines: Cuisine[];
}

export interface RestaurantApiResponse {
  Restaurants: Restaurant[];
  CuisineSets: CuisineSet[];
}
