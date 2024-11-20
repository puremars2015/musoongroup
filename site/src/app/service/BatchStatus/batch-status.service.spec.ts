import { TestBed } from '@angular/core/testing';

import { BatchStatusService } from './batch-status.service';

describe('BatchStatusService', () => {
  let service: BatchStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatchStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
