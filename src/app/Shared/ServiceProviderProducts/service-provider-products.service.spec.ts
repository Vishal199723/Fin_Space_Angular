import { TestBed } from '@angular/core/testing';

import { ServiceProviderProductsService } from './service-provider-products.service';

describe('ServiceProviderProductsService', () => {
  let service: ServiceProviderProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProviderProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
