import { TestBed } from '@angular/core/testing';

import { CRUDService } from './crudservice.service';

describe('CRUDService', () => {
  let service: CRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
