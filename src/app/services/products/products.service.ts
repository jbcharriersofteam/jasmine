import { Injectable, signal, Signal } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productsSearched = signal<any[]>([]);
  constructor() {}

  getAll() {
    return of(this.productsSearched());
  }
}
