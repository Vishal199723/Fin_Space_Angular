import { TestBed } from '@angular/core/testing';

import { ProjectWorkSpanService } from './project-work-span.service';

describe('ProjectWorkSpanService', () => {
  let service: ProjectWorkSpanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectWorkSpanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
