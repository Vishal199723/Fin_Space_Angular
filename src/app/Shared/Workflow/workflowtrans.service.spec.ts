import { TestBed } from '@angular/core/testing';

import { WorkflowtransService } from './workflowtrans.service';

describe('WorkflowtransService', () => {
  let service: WorkflowtransService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkflowtransService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
