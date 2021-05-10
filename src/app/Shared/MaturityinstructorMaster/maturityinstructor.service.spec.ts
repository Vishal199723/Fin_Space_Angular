import { TestBed } from '@angular/core/testing';

import { MaturityinstructorService } from './maturityinstructor.service';

describe('MaturityinstructorService', () => {
  let service: MaturityinstructorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaturityinstructorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
