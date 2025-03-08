import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app.routes';
import { inject } from '@angular/core';

describe('mon test de routeur', () => {
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
    }).compileComponents();
    router = TestBed.inject(Router);
  });

  it('Should go to login page', async () => {
    await router.navigate(['/login']);
    expect(router.url).toBe('/login');
  })
});
