import { TestBed } from '@angular/core/testing';

import { FavoriteItemsService } from './favorite-items.service';
import { ItemCardModel } from '../models/item-card-model/item-card-model';
import { BehaviorSubject } from 'rxjs';

describe('FavoriteItemsService', () => {
  let service: FavoriteItemsService;
  const mockedData: ItemCardModel[] = [
    {
      title: 'title1',
      description: 'description1',
      price: 'price1',
      email: 'email1',
      image: 'image1'
    },
    {
      title: 'title2',
      description: 'description2',
      price: 'price2',
      email: 'email2',
      image: 'image2'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when save items', () => {
    beforeEach(() => {
      service.saveFavoriteItems(mockedData);
    });

    it('should have favorite itemList', () => {
      expect(service.favoriteItemList$).toEqual(new BehaviorSubject(mockedData));
    });
  });
});
