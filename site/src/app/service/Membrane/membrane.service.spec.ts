import { TestBed } from '@angular/core/testing';

import { MembraneService } from './membrane.service';

describe('MembraneService', () => {
  let service: MembraneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembraneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
