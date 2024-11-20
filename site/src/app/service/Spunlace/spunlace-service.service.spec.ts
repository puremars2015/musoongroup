import { TestBed } from '@angular/core/testing';

import { SpunlaceService } from './spunlace-service.service';

describe('SpunlaceServiceService', () => {
  let service: SpunlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpunlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
