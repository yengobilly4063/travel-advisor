export type IPlace = {
  id?: number;
  location_id?: string;
  name?: string;
  price_level?: string;
  ranking?: string;
  photo?: {
    images?: {
      large?: {
        url?: string;
      };
    };
  };
  awards?: Award[];
  cuisine?: Cuisine[];
};

export type Award = {
  award_type?: string;
  display_name?: string;
  year?: string;
  images?: {
    large?: string;
    small?: string;
  };
};

export type Cuisine = {
  key?: string;
  name?: string;
};
