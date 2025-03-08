import { signal } from '@angular/core';
import { Observable, of } from 'rxjs';

export class ProductServiceMock {
  productsSearched = signal<any[]>([
    { id: 1, title: 'product1' },
    { id: 2, title: 'product2' },
  ]);

  getAll(): Observable<any[]> {
    return of(this.productsSearched());
  }
}
