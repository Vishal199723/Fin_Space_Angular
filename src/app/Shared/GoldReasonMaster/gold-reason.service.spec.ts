import { TestBed } from '@angular/core/testing';

import { GoldReasonService } from './gold-reason.service';

describe('GoldReasonService', () => {
  let service: GoldReasonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoldReasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
