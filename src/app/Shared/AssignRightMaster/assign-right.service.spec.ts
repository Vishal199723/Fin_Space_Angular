import { TestBed } from '@angular/core/testing';

import { AssignRightService } from './assign-right.service';

describe('AssignRightService', () => {
  let service: AssignRightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignRightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
