import { TestBed } from '@angular/core/testing';

import { DepositTypeService } from './deposit-type.service';

describe('DepositTypeService', () => {
  let service: DepositTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepositTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
