import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Property, SearchCriteria, ListingCategory } from '../models/property';


@Injectable({ providedIn: 'root' })
export class PropertyService {
  private properties: Property[] = [
    {
      id: 1,
      listingCategory: 'buy',
      type: 'apartment',
      title: 'Nile-View Apartment',
      location: 'Zamalek',
      address: '26th of July St., Zamalek',
      price: 3200000,
      bedrooms: 2,
      bathrooms: 1,
      area: 118,
      images: [
        'https://images.pexels.com/photos/16111036/pexels-photo-16111036.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/33217388/pexels-photo-33217388.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/20035984/pexels-photo-20035984.jpeg?auto=compress&cs=tinysrgb&w=1600'
      ],
      description: 'Bright rooms with partial Nile view, close to cafes and embassies.',
      amenities: ['Elevator', 'Balcony', 'A/C', 'Doorman'],
      furnishing: 'semi',
      parking: 'street',
      floor: 7,
      petFriendly: true,
      yearBuilt: 1998,
      availableFrom: '2025-09-01',
      contact: { name: 'Mona Y.', phone: '+20 100 123 4567' },
      lat: 30.062, lng: 31.219
    },
    {
      id: 2,
      listingCategory: 'buy',
      type: 'house',
      title: 'Family House with Garden',
      location: 'New Cairo',
      neighborhood: '5th Settlement',
      address: 'South Teseen St.',
      price: 6900000,
      bedrooms: 4,
      bathrooms: 3,
      area: 265,
      images: [
        'https://images.pexels.com/photos/4469133/pexels-photo-4469133.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/11842541/pexels-photo-11842541.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/5524166/pexels-photo-5524166.jpeg?auto=compress&cs=tinysrgb&w=1600'
      ],
      description: 'Quiet street, private garden, 5 min to services and schools.',
      amenities: ['Garden', 'A/C', 'Laundry Room', 'Storage'],
      furnishing: 'unfurnished',
      parking: 'garage',
      petFriendly: true,
      yearBuilt: 2014,
      availableFrom: '2025-10-01',
      contact: { name: 'Kareem S.', phone: '+20 112 222 3344' },
      lat: 30.010, lng: 31.448
    },
    {
      id: 3,
      listingCategory: 'buy',
      type: 'villa',
      title: 'Modern Villa with Pool',
      location: 'Sheikh Zayed City',
      price: 12500000,
      bedrooms: 5,
      bathrooms: 4,
      area: 420,
      images: [
        'https://images.pexels.com/photos/30781823/pexels-photo-30781823.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/29334645/pexels-photo-29334645.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/17773876/pexels-photo-17773876.jpeg?auto=compress&cs=tinysrgb&w=1600'
      ],
      description: 'Luxury finishes, smart home, sunny backyard with pool.',
      amenities: ['Pool', 'Smart Home', 'Maid’s Room', 'Security'],
      furnishing: 'semi',
      parking: 'garage',
      petFriendly: true,
      yearBuilt: 2019,
      availableFrom: '2025-09-15',
      contact: { name: 'Reem T.', phone: '+20 101 555 7788' },
      lat: 30.037, lng: 30.972
    },
    {
      id: 4,
      listingCategory: 'rent',
      type: 'studio',
      title: 'Bright Studio near Metro',
      location: 'Heliopolis',
      price: 14500, // monthly
      bedrooms: 1,
      bathrooms: 1,
      area: 56,
      images: [
        'https://images.pexels.com/photos/7535076/pexels-photo-7535076.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/18470956/pexels-photo-18470956.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/19192263/pexels-photo-19192263.jpeg?auto=compress&cs=tinysrgb&w=1600'
      ],
      description: 'Compact and convenient—ideal first home close to metro.',
      amenities: ['Elevator', 'A/C'],
      furnishing: 'furnished',
      parking: 'none',
      petFriendly: false,
      yearBuilt: 1985,
      contact: { name: 'Ahmed F.', phone: '+20 120 000 9988' }
    },
    {
      id: 5,
      listingCategory: 'buy',
      type: 'apartment',
      title: 'Green Maadi 3BR',
      location: 'Maadi',
      price: 4200000,
      bedrooms: 3,
      bathrooms: 2,
      area: 175,
      images: [
        'https://images.pexels.com/photos/19916702/pexels-photo-19916702.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/5883721/pexels-photo-5883721.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/8089189/pexels-photo-8089189.jpeg?auto=compress&cs=tinysrgb&w=1600'
      ],
      description: 'Leafy streets, spacious plan, walking distance to cafes.',
      amenities: ['Balcony', 'A/C', 'Dishwasher'],
      furnishing: 'semi',
      parking: 'street',
      petFriendly: true,
      yearBuilt: 2006,
      contact: { name: 'Layla H.', phone: '+20 114 333 2211' }
    },
    {
      id: 6,
      listingCategory: 'buy',
      type: 'villa',
      title: 'October City Villa',
      location: '6th of October',
      price: 10800000,
      bedrooms: 4,
      bathrooms: 4,
      area: 380,
      images: [
        'https://images.pexels.com/photos/31817157/pexels-photo-31817157.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/27626186/pexels-photo-27626186.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/29453302/pexels-photo-29453302.jpeg?auto=compress&cs=tinysrgb&w=1600'
      ],
      description: 'Corner plot, double-height living, landscaped patio.',
      amenities: ['Backyard', 'Laundry Room', 'Security'],
      furnishing: 'unfurnished',
      parking: 'garage',
      petFriendly: true,
      yearBuilt: 2018,
      contact: { name: 'Omar E.', phone: '+20 100 777 1122' }
    },
    {
      id: 7,
      listingCategory: 'buy',
      type: 'apartment',
      title: 'Garden City Classic',
      location: 'Garden City',
      price: 5600000,
      bedrooms: 3,
      bathrooms: 2,
      area: 190,
      images: [
        'https://images.pexels.com/photos/16111036/pexels-photo-16111036.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/20035984/pexels-photo-20035984.jpeg?auto=compress&cs=tinysrgb&w=1600'
      ],
      description: 'High ceilings, near the Nile corniche.',
      amenities: ['Balcony', 'Elevator', 'A/C'],
      furnishing: 'semi',
      parking: 'street',
      yearBuilt: 1955,
      contact: { name: 'Samar A.', phone: '+20 100 234 7890' }
    },
    {
      id: 8,
      listingCategory: 'buy',
      type: 'penthouse',
      title: 'New Cairo Penthouse',
      location: 'New Cairo',
      price: 9800000,
      bedrooms: 4,
      bathrooms: 4,
      area: 320,
      images: [
        'https://images.pexels.com/photos/11842541/pexels-photo-11842541.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/5524166/pexels-photo-5524166.jpeg?auto=compress&cs=tinysrgb&w=1600'
      ],
      description: 'Private roof terrace with open views.',
      amenities: ['Terrace', 'A/C', 'Storage'],
      furnishing: 'unfurnished',
      parking: 'garage',
      yearBuilt: 2016,
      contact: { name: 'Youssef N.', phone: '+20 114 556 7788' }
    },
    {
      id: 9,
      listingCategory: 'buy',
      type: 'house',
      title: 'Zayed Townhouse',
      location: 'Sheikh Zayed City',
      price: 7400000,
      bedrooms: 3,
      bathrooms: 3,
      area: 240,
      images: [
        'https://images.pexels.com/photos/31817157/pexels-photo-31817157.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/27626186/pexels-photo-27626186.jpeg?auto=compress&cs=tinysrgb&w=1600'
      ],
      description: 'Corner unit with landscaped backyard.',
      amenities: ['Backyard', 'Laundry Room', 'Security'],
      furnishing: 'semi',
      parking: 'carport',
      yearBuilt: 2020,
      contact: { name: 'Noura K.', phone: '+20 101 333 6655' }
    },
    {
      id: 10,
      listingCategory: 'rent',
      type: 'studio',
      title: 'Heliopolis Studio Deluxe',
      location: 'Heliopolis',
      price: 16500, // monthly
      bedrooms: 1,
      bathrooms: 1,
      area: 60,
      images: [
        'https://images.pexels.com/photos/7535076/pexels-photo-7535076.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/18470956/pexels-photo-18470956.jpeg?auto=compress&cs=tinysrgb&w=1600'
      ],
      description: 'Fully furnished, 5 minutes to metro.',
      amenities: ['Elevator', 'A/C'],
      furnishing: 'furnished',
      parking: 'none',
      yearBuilt: 1990,
      contact: { name: 'Hassan R.', phone: '+20 122 987 6543' }
    },
    // --- NEW ---
    {
      id: 11,
      listingCategory: 'rent',
      type: 'apartment',
      title: 'Nasr City 2BR',
      location: 'Nasr City',
      price: 21000, // monthly
      bedrooms: 2,
      bathrooms: 1,
      area: 120,
      images: [
        'https://images.pexels.com/photos/19916702/pexels-photo-19916702.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/5883721/pexels-photo-5883721.jpeg?auto=compress&cs=tinysrgb&w=1600'
      ],
      description: 'Close to City Stars and main roads.',
      amenities: ['Elevator', 'A/C'],
      furnishing: 'semi',
      parking: 'street',
      contact: { name: 'Mahmoud S.', phone: '+20 100 111 2233' }
    },
    {
      id: 12,
      listingCategory: 'commercial',
      type: 'office',
      title: 'New Cairo Office 180m²',
      location: 'New Cairo',
      price: 48000, // monthly
      bedrooms: 0,
      bathrooms: 2,
      area: 180,
      images: [
        'https://images.pexels.com/photos/27626186/pexels-photo-27626186.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/29453302/pexels-photo-29453302.jpeg?auto=compress&cs=tinysrgb&w=1600'
      ],
      description: 'Open-space office in business district.',
      amenities: ['Security', 'Elevator', 'Parking'],
      furnishing: 'unfurnished',
      parking: 'garage',
      contact: { name: 'Corporate Lettings', phone: '+20 111 555 9990' }
    },
    {
      id: 13,
      listingCategory: 'buy',
      type: 'penthouse',
      title: 'Zamalek Penthouse',
      location: 'Zamalek',
      price: 15500000,
      bedrooms: 4,
      bathrooms: 4,
      area: 350,
      images: [
        'https://images.pexels.com/photos/11842541/pexels-photo-11842541.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/5524166/pexels-photo-5524166.jpeg?auto=compress&cs=tinysrgb&w=1600'
      ],
      description: 'Panoramic views, private elevator access.',
      amenities: ['Terrace', 'Elevator', 'A/C'],
      furnishing: 'semi',
      parking: 'garage',
      contact: { name: 'Elite Homes', phone: '+20 100 000 2233' }
    },
    {
      id: 14,
      listingCategory: 'commercial',
      type: 'retail',
      title: 'Maadi Retail Corner 95m²',
      location: 'Maadi',
      price: 37000, // monthly
      bedrooms: 0,
      bathrooms: 1,
      area: 95,
      images: [
        'https://images.pexels.com/photos/27626186/pexels-photo-27626186.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/31817157/pexels-photo-31817157.jpeg?auto=compress&cs=tinysrgb&w=1600'
      ],
      description: 'Prime footfall, glass frontage.',
      amenities: ['Security'],
      furnishing: 'unfurnished',
      parking: 'street',
      contact: { name: 'Shops Egypt', phone: '+20 122 456 7788' }
    },
  ];

  getProperties(): Observable<Property[]> {
    return of(this.properties);
  }

  getPropertyById(id: number): Observable<Property | undefined> {
    return of(this.properties.find(p => p.id === id));
  }
  // ⬇️ Add at the end of the class
  getByCategory(category: 'buy' | 'rent' | 'commercial'): Observable<Property[]> {
    return of(this.properties.filter(p => p.listingCategory === category));
  }

  getFeaturedByCategory(category: 'buy' | 'rent' | 'commercial', limit = 4): Observable<Property[]> {
    return of(this.properties.filter(p => p.listingCategory === category).slice(0, limit));
  }

  /** Strong filtering with numeric coercion + categories */
  search(raw: SearchCriteria): Observable<Property[]> {
    // coerce numbers coming from form (they may be strings)
    const c: SearchCriteria = {
      ...raw,
      minPrice: raw.minPrice != null ? Number(raw.minPrice) : null,
      maxPrice: raw.maxPrice != null ? Number(raw.maxPrice) : null,
      bedrooms: raw.bedrooms != null ? Number(raw.bedrooms) : null,
    };

    let out = [...this.properties];

    if (c.listingCategory) out = out.filter(p => p.listingCategory === c.listingCategory);
    if (c.type) out = out.filter(p => p.type === c.type);
    if (c.location && c.location.trim()) {
      const q = c.location.toLowerCase();
      out = out.filter(p => p.location.toLowerCase().includes(q)
        || p.neighborhood?.toLowerCase().includes(q)
        || p.address?.toLowerCase().includes(q));
    }
    if (c.minPrice != null && !Number.isNaN(c.minPrice)) out = out.filter(p => p.price >= (c.minPrice as number));
    if (c.maxPrice != null && !Number.isNaN(c.maxPrice)) out = out.filter(p => p.price <= (c.maxPrice as number));

    // Bedrooms only makes sense for residential categories/types
    const isResidential = (t: string) =>
      t === 'apartment' || t === 'penthouse' || t === 'villa' || t === 'house' || t === 'studio' || t === 'townhouse' || t === 'duplex';

    // Apply bedrooms filter to ALL listings (commercial have 0 -> will be filtered out)
    if (c.bedrooms != null && !Number.isNaN(c.bedrooms)) {
      out = out.filter(p => (Number(p.bedrooms) || 0) >= (c.bedrooms as number));
    }
    

    return of(out);
  }
}
