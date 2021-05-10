import { TestBed } from '@angular/core/testing';

import { SubProductMasterService } from './sub-product-master.service';

describe('SubProductMasterService', () => {
  let service: SubProductMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubProductMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
