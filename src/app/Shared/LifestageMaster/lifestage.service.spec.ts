import { TestBed } from '@angular/core/testing';

import { LifestageService } from './lifestage.service';

describe('LifestageService', () => {
  let service: LifestageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LifestageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
