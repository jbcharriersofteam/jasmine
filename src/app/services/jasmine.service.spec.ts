import { TestBed } from '@angular/core/testing';

import { JasmineService } from './jasmine.service';

describe('JasmineService', () => {
  let service: JasmineService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JasmineService],
    });
    service = TestBed.inject(JasmineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return result', () => {
    const result = service.myMethod();
    expect(result).toBe('myMethod');
  });
});
