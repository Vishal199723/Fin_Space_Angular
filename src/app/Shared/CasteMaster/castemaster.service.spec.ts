import { TestBed } from '@angular/core/testing';

import { CastemasterService } from './castemaster.service';

describe('CastemasterService', () => {
  let service: CastemasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CastemasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
