export type User = {
  id: string;
  name: string;
  email: string;
};

export type SignupInput = {
  name: string;
  email: string;
  password: string;
};

export type LoginInput = {
  email: string;
  password: string;
};

export type BookingType = {
  id: number;
  name: string;
  user: User;
  date: Date;
  startData: Date;
  endData: Date;
  price: number;
  people: number;
  days: number;
  placeList?: string;
};

export type Itinerary = {
  name?: string;
  description?: string;
};

export type TourType = {
  __id: string;
  name: string;
  image: string;
  days: number;
  nights: number;
  Overview: string[] | undefined;
  Highlights?: string[] | undefined;
  Inclusion: string[] | undefined;
  Exclusion: string[] | undefined;
  Itinerary: Itinerary[] | undefined;
  FAQs: Itinerary[] | undefined;
  Price?: number;
};
