import { Component, inject, OnInit, Signal } from '@angular/core';
import { ProductsService } from '../services/products/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  productService = inject(ProductsService);
  products = this.productService.productsSearched;

  ngOnInit(): void {
    this.productService.getAll().subscribe();
  }

}
