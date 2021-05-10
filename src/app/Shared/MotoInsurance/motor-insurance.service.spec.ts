import { TestBed } from '@angular/core/testing';

import { MotorInsuranceService } from './motor-insurance.service';

describe('MotorInsuranceService', () => {
  let service: MotorInsuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotorInsuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
