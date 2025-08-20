export type ListingCategory = 'buy' | 'rent' | 'commercial';

export type PropertyType =
  | 'apartment' | 'penthouse' | 'villa' | 'house' | 'studio' | 'townhouse' | 'duplex'
  | 'office' | 'retail' | 'warehouse';

export type Furnishing = 'unfurnished' | 'semi' | 'furnished';
export type Parking = 'none' | 'street' | 'carport' | 'garage';

export interface Contact { name: string; phone: string; }

export interface Property {
  id: number;
  listingCategory: ListingCategory;   // ✅ new (buy | rent | commercial)
  type: PropertyType;                 // ✅ richer types
  title: string;
  location: string;                   // district / city
  address?: string;
  neighborhood?: string;
  price: number;                      // EGP (for rent: monthly)
  bedrooms: number;                   // for commercial types you can keep 0
  bathrooms: number;
  area: number;                       // m²
  images: string[];                   // gallery
  description: string;
  amenities?: string[];
  furnishing?: Furnishing;
  parking?: Parking;
  floor?: number;
  petFriendly?: boolean;
  yearBuilt?: number;
  monthlyHOA?: number;
  availableFrom?: string;             // ISO date
  contact?: Contact;
  lat?: number; lng?: number;
}

/** Used by SearchFilter + PropertyList + SearchPage */
export interface SearchCriteria {
  listingCategory?: ListingCategory | '';
  type?: PropertyType | '';
  location?: string;
  minPrice?: number | null;
  maxPrice?: number | null;
  bedrooms?: number | null;          // at least this many
}
