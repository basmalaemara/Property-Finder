import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { Property } from '../../core/models/property';
import { PropertyService } from '../../core/services/property.service';
import { tap } from 'rxjs/operators';

export const propertyResolver: ResolveFn<Property | undefined> = (route) => {
  const svc = inject(PropertyService);
  const router = inject(Router);
  const id = Number(route.paramMap.get('id'));
  return svc.getPropertyById(id).pipe(
    tap(p => { if (!p) router.navigateByUrl('/not-found'); })
  );
};
