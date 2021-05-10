import { TestBed } from '@angular/core/testing';

import { FilerequestService } from './filerequest.service';

describe('FilerequestService', () => {
  let service: FilerequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilerequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
