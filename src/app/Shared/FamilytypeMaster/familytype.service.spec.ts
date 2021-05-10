import { TestBed } from '@angular/core/testing';

import { FamilytypeService } from './familytype.service';

describe('FamilytypeService', () => {
  let service: FamilytypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamilytypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
