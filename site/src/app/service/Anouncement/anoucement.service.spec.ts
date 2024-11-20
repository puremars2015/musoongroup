import { TestBed } from '@angular/core/testing';

import { AnoucementService } from './anoucement.service';

describe('AnoucementService', () => {
  let service: AnoucementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnoucementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
