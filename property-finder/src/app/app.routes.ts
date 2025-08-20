import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';                // ✅
import { PropertyListComponent } from './features/property-list/property-list.component';
import { PropertyDetailsComponent } from './features/property-details/property-details.component';
import { SearchPageComponent } from './features/search/search-page.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { propertyResolver } from './features/property-details/property.resolver';

export const routes: Routes = [
  { path: '', component: HomeComponent },                                     // ✅ Home is now the landing
  { path: 'properties', component: PropertyListComponent },
  { path: 'property/:id', component: PropertyDetailsComponent, resolve: { property: propertyResolver } },
  { path: 'search', component: SearchPageComponent },
  { path: '**', component: NotFoundComponent },
];
