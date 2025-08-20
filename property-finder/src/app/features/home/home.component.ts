import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Property } from '../../core/models/property';
import { PropertyService } from '../../core/services/property.service';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  animations: [
    trigger('pageFade', [
      transition(':enter', [style({ opacity: 0 }), animate('250ms ease-out', style({ opacity: 1 }))]),
    ]),
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(12px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'none' })),
      ]),
    ]),
    trigger('staggerCards', [
      transition(':enter', [
        query('article', [
          style({ opacity: 0, transform: 'translateY(8px)' }),
          stagger(70, animate('250ms ease-out', style({ opacity: 1, transform: 'none' }))),
        ], { optional: true }),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  buyProps: Property[] = [];
  rentProps: Property[] = [];
  commercialProps: Property[] = [];

  constructor(private svc: PropertyService) {}

  ngOnInit(): void {
    this.svc.getFeaturedByCategory('rent', 4).subscribe(v => (this.rentProps = v));
    this.svc.getFeaturedByCategory('buy', 4).subscribe(v => (this.buyProps = v));
    this.svc.getFeaturedByCategory('commercial', 4).subscribe(v => (this.commercialProps = v));
  }
}
