import { TestBed } from '@angular/core/testing';

import { BusinessLoanServiceService } from './business-loan-service.service';

describe('BusinessLoanServiceService', () => {
  let service: BusinessLoanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessLoanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
