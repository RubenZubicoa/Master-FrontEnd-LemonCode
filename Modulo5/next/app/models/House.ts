import { Review } from "./Review";

export interface House {
    id: string;
    name: string;
    description: string;
    address: string;
    city: string;
    country: string;
    bedrooms: number;
    beds: number;
    bathrooms: number;
    price: number;
    image: string;
    amenities: string[];
    reviews: Review[];
  }