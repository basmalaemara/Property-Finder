import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { ListingCategory, PropertyType, SearchCriteria } from '../../core/models/property';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-filter.component.html',
})
export class SearchFilterComponent {
  @Output() criteriaChange = new EventEmitter<SearchCriteria>();

  // Options
  categories: (ListingCategory | '')[] = ['', 'buy', 'rent', 'commercial'];
  residentialTypes: PropertyType[] = ['apartment', 'penthouse', 'villa', 'house', 'studio', 'townhouse', 'duplex'];
  commercialTypes: PropertyType[]  = ['office', 'retail', 'warehouse'];

  form = new FormGroup({
    listingCategory: new FormControl<ListingCategory | ''>(''),
    type: new FormControl<PropertyType | ''>(''),
    location: new FormControl<string>(''),
    minPrice: new FormControl<number | null>(null),
    maxPrice: new FormControl<number | null>(null),
    bedrooms: new FormControl<number | null>(null),
  });

  get typeOptions(): PropertyType[] {
    const cat = this.form.value.listingCategory;
    if (cat === 'commercial') return this.commercialTypes;
    return this.residentialTypes;
  }

  onCategorySelect(cat: ListingCategory | '') {
    this.form.patchValue({ listingCategory: cat, type: '' as any });
    this.apply();
  }

  apply() {
    const v = this.form.value;
    const criteria: SearchCriteria = {
      listingCategory: v.listingCategory ?? '',
      type: v.type ?? '',
      location: v.location ?? '',
      // Coerce numbers safely (fixes bedrooms not filtering issue)
      minPrice: v.minPrice != null ? Number(v.minPrice) : null,
      maxPrice: v.maxPrice != null ? Number(v.maxPrice) : null,
      bedrooms: v.bedrooms != null ? Number(v.bedrooms) : null,
    };
    this.criteriaChange.emit(criteria);
  }

  reset() {
    this.form.reset({
      listingCategory: '',
      type: '',
      location: '',
      minPrice: null,
      maxPrice: null,
      bedrooms: null,
    });
    this.apply();
  }
}
