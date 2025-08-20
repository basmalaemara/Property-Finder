import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterComponent } from './search-filter.component';
import { PropertyListComponent } from '../property-list/property-list.component';
import { SearchCriteria } from '../../core/models/property';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule, SearchFilterComponent, PropertyListComponent],
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent {
  criteria: SearchCriteria = {};
  onCriteria(c: SearchCriteria) { this.criteria = c; }
}
