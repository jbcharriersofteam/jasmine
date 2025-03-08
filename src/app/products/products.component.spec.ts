import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from '../services/products/products.service';
import { ProductServiceMock } from './../services/products/mock'

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let el: HTMLElement;
  let API_URL = '';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsComponent, RouterTestingModule, HttpClientModule],
      providers: [{ provide: API_URL, useValue: 'https://fakeapi.com' }, { provide: ProductsService, useClass: ProductServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
    fixture.detectChanges();
    await fixture.whenStable()
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Les produits sont bien affichés', () => {
    // const appCardEl = el.querySelectorAll('app-card');
    const nbProducts = component.products().length;
    expect(nbProducts).toBe(2);
    // expect(appCardEl.length).toBe(nbProducts);
  })
});

// ********************
// Pour les spy http, voir le livre
// ********************
