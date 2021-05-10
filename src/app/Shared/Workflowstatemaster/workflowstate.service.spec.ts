import { TestBed } from '@angular/core/testing';

import { WorkflowstateService } from './workflowstate.service';

describe('WorkflowstateService', () => {
  let service: WorkflowstateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkflowstateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
