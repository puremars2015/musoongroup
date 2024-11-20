import { TestBed } from '@angular/core/testing';

import { PeTrackingService } from './pe-tracking.service';

describe('PeTrackingService', () => {
  let service: PeTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
