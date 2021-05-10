import { TestBed } from '@angular/core/testing';

import { ServiceRequestTypeService } from './service-request-type.service';

describe('ServiceRequestTypeService', () => {
  let service: ServiceRequestTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRequestTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
