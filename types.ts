export interface TravelPackage {
  id: string;
  title: string;
  destination: string;
  price: number;
  durationDays: number;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  amenities: string[];
  itinerary: { day: number; title: string; description: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
}

export interface BookingFormData {
  destination: string;
  checkIn: string;
  travelers: number;
  duration: number;
  name: string;
  email: string;
  phone: string;
  packageId?: string;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  packageCount: number;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
}