import { TestBed } from '@angular/core/testing';

import { ProtectionNeedService } from './protection-need.service';

describe('ProtectionNeedService', () => {
  let service: ProtectionNeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProtectionNeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
