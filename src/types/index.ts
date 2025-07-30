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
  id: number | null;
  name: string | null;
  user: User | null;
  date: Date | string | null;
  startDate: Date | string | null;
  price: number | null;
  people: number | null;
  days: number | null;
  placeList: string | null;
  status: string | null;
};

export type TaxiBookingsTypes = {
  id: number | null;
  user: User | null;
  taxi: TaxiTypes | null;
  price: number | null;
  source: string | null;
  destination: string | null;
  date: Date | string | null;
  bookingDate: Date | string | null;
  status: string | null;
};

export type TaxiTypes = {
  id: string | null;
  model: string | null;
  seats: number | null;
  vehicleNumber: string | null;
  driver: string | null;
  driverPhoneNumber: string | null;
};

export type TaxiInputType = {
  id: string;
  model: string;
  seats: number;
  vehicleNumber: string;
  driver: string;
  driverPhoneNumber: string;
};

export type QueriesTypes = {
  id: number;
  name: string;
  email: string;
  message: string;
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

export type BookingInput = {
  PackageName: string;
  PackageDays: number;
  PackagePrice: number;
  people: number;
  startDate: Date;
  PlaceList?: string[];
  hotel?: string;
  AdventureList?: string[];
};

export type TaxiBookingInput = {
  taxi: string;
  source: string;
  destination: string;
  date: Date;
  price: number;
};
