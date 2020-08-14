import { TestBed } from '@angular/core/testing';

import { SortItemService } from './sort-item.service';

describe('SortItemService', () => {
  let service: SortItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
