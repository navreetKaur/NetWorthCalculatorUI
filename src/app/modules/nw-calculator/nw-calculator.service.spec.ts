import { TestBed } from '@angular/core/testing';
import { Category } from './category';
import {HttpClientModule} from "@angular/common/http";

import { NwCalculatorService } from './nw-calculator.service';

describe('NwCalculatorService', () => {
  let service: NwCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        NwCalculatorService
      ]
    });
    service = TestBed.inject(NwCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get list of categories', () => {
    service.listCategory().subscribe((categories: Category[]) => {
      expect(categories.length).toBeGreaterThan(0);
    });
  });


});
