export interface ServiceItem {
  id: string;
  title: string;
  category: 'hair' | 'makeup' | 'skin' | 'nails' | 'treatments' | 'spa';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  duration: string;
  startingPrice: string;
  popular?: boolean;
  features: string[];
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  serviceUsed: string;
  timeTaken: string;
  stylistNote: string;
}

export interface PackageItem {
  id: string;
  name: string;
  tagline: string;
  price: string;
  originalPrice?: string;
  popular?: boolean;
  duration: string;
  includes: string[];
  idealFor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  service: string;
  avatar: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  specialRequests: string;
}
