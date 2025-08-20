import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PropertyService } from '../../core/services/property.service';
import { Property, SearchCriteria } from '../../core/models/property';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations'; // ✅

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './property-list.component.html',
  animations: [
    trigger('routeFade', [
      transition(':enter', [ style({ opacity: 0 }), animate('200ms ease-out', style({ opacity: 1 })) ])
    ]),
    trigger('listStagger', [
      transition(':enter', [
        query('article', [
          style({ opacity: 0, transform: 'translateY(8px)' }),
          stagger(70, animate('250ms ease-out', style({ opacity: 1, transform: 'none' })))
        ], { optional: true })
      ])
    ])
  ]
})
export class PropertyListComponent implements OnInit, OnChanges {
  @Input() criteria?: SearchCriteria;
  properties: Property[] = [];
  constructor(private svc: PropertyService) {}
  ngOnInit() { this.load(); }
  ngOnChanges(changes: SimpleChanges) { if (changes['criteria']) this.load(); }
  private load() {
    (this.criteria ? this.svc.search(this.criteria) : this.svc.getProperties())
      .subscribe(d => this.properties = d);
  }
}
