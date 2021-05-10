import { TestBed } from '@angular/core/testing';

import { HomeInsuranceService } from './home-insurance.service';

describe('HomeInsuranceService', () => {
  let service: HomeInsuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeInsuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
