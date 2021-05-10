import { TestBed } from '@angular/core/testing';

import { GoldOrnamentsService } from './gold-ornaments.service';

describe('GoldOrnamentsService', () => {
  let service: GoldOrnamentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoldOrnamentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
