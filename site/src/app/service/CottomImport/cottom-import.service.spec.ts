import { TestBed } from '@angular/core/testing';

import { CottomImportService } from './cottom-import.service';

describe('CottomImportService', () => {
  let service: CottomImportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CottomImportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
