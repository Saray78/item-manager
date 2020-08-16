import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ItemManagerService } from './item-manager.service';
import { itemsMock } from '../api-mocked/items.json';

describe('ItemManagerService', () => {
  let service: ItemManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when get item card data', () => {
    it('should return data', (done) => {
      service.getItemManagerItems().subscribe(it => {
        expect(it).toEqual(itemsMock.items);
        done();
      });

    });
  });

});
