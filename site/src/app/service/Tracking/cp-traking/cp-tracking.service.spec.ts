import { TestBed } from '@angular/core/testing';

import { CpTrackingService } from './cp-tracking.service';

describe('CpTrackingService', () => {
  let service: CpTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
