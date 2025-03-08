import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'jasmine' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    // componentInstance permet d'accéder à l'instance du composant
    const app = fixture.componentInstance;
    expect(app.title).toEqual('jasmine');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    // nativeElement permet d'accéder au DOM du composant
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, jasmine'
    );
  });

  it('Should return a + b', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const result = app.add(1, 2);
    expect(result).toBe(3);
  });
});

describe('AppComponent', () => {
  let userData: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  beforeEach(async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    userData = await app.fetchUserData(123);
  });

  it('Should return correct user datas', () => {
    expect(userData).toEqual({
      id: 123,
      name: 'John Doe',
      email: 'john.doe@example.com',
    });
  });
});

// Les méthodes sur expect

// .toBe(value)
// .toEqual(value)
// .toContain(element)
// .toBeNull()
// .toBeTruthy()
// .toBeFalsy()
// .toBeUndefined()
// .toBeDefined()
// .toBeGreaterThan(number)
// .toBeLessThan(number)
// .toBeCloseto(number, precision)
// .toThrow(error)
