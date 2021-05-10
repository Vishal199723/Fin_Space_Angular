import { TestBed } from '@angular/core/testing';

import { IncorporationTypeService } from './incorporation-type.service';

describe('IncorporationTypeService', () => {
  let service: IncorporationTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncorporationTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
