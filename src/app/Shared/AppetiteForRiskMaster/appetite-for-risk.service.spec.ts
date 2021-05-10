import { TestBed } from '@angular/core/testing';

import { AppetiteForRiskService } from './appetite-for-risk.service';

describe('AppetiteForRiskService', () => {
  let service: AppetiteForRiskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppetiteForRiskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
