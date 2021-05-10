import { TestBed } from '@angular/core/testing';

import { MovableassetService } from './movableasset.service';

describe('MovableassetService', () => {
  let service: MovableassetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovableassetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
