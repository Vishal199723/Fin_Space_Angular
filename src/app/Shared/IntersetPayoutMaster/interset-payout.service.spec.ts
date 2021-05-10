import { TestBed } from '@angular/core/testing';

import { IntersetPayoutService } from './interset-payout.service';

describe('IntersetPayoutService', () => {
  let service: IntersetPayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntersetPayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
