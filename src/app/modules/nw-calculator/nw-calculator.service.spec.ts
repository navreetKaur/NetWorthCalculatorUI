import { TestBed } from '@angular/core/testing';

import { NwCalculatorService } from './nw-calculator.service';

describe('NwCalculatorService', () => {
  let service: NwCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NwCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
