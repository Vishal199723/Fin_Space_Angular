import { TestBed } from '@angular/core/testing';

import { FixedassetService } from './fixedasset.service';

describe('FixedassetService', () => {
  let service: FixedassetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FixedassetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
