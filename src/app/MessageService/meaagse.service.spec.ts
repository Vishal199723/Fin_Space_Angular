import { TestBed } from '@angular/core/testing';

import { MeaagseService } from './meaagse.service';

describe('MeaagseService', () => {
  let service: MeaagseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeaagseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
