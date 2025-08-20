import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Property } from '../../core/models/property';
import { trigger, transition, style, animate } from '@angular/animations'; // ✅

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './property-details.component.html',
  animations: [
    trigger('routeFade', [
      transition(':enter', [ style({ opacity: 0 }), animate('250ms ease-out', style({ opacity: 1 })) ])
    ])
  ]
})
export class PropertyDetailsComponent {
  private route = inject(ActivatedRoute);
  vm?: Property;
  selectedImage?: string;

  constructor() {
    const p = this.route.snapshot.data['property'] as Property | undefined;
    if (p) {
      this.vm = p;
      this.selectedImage = p.images?.[0];
    }
  }

  pick(img: string) { this.selectedImage = img; }
}
