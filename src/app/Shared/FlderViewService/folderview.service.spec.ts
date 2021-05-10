import { TestBed } from '@angular/core/testing';

import { FolderviewService } from './folderview.service';

describe('FolderviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FolderviewService = TestBed.get(FolderviewService);
    expect(service).toBeTruthy();
  });
});
