import { TestBed } from '@angular/core/testing';

import { AddGoodsKindService } from './add-goods-kind.service';

describe('AddGoodsKindService', () => {
  let service: AddGoodsKindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddGoodsKindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
