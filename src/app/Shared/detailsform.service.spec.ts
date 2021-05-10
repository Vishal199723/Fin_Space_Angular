import { TestBed } from '@angular/core/testing';

import { DetailsformService } from './detailsform.service';

describe('DetailsformService', () => {
  let service: DetailsformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
