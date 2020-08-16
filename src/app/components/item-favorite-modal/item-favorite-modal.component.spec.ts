import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFavoriteModalComponent } from './item-favorite-modal.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemCardComponent } from '../item-card/item-card.component';
import { ItemSearchComponent } from '../item-search/item-search.component';
import { FilterSearchPipe } from '../../pipes/filter-search/filter-search.pipe';
import { FilterByFavoritesPipe } from '../../pipes/filter-by-favorites/filter-by-favorites.pipe';
import { of } from 'rxjs';
import { ItemCardModel } from '../../models/item-card-model/item-card-model';
import { FavoriteItemsService } from '../../services/favorite-items.service';

describe('ItemFavoriteModalComponent', () => {
  let component: ItemFavoriteModalComponent;
  let fixture: ComponentFixture<ItemFavoriteModalComponent>;
  const mockedItem: ItemCardModel[] = [
    {
      title: 'title',
      description: 'description',
      price: 'price',
      email: 'email',
      image: 'image',
      isFavoriteItem: true
    }
  ];
  const favoriteItemsServiceMocked = {
    favoriteItemList$: of(mockedItem)
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItemFavoriteModalComponent,
        ItemCardComponent,
        ItemSearchComponent,
        FilterSearchPipe,
        FilterByFavoritesPipe
      ],
      providers: [
        {
          provide: MAT_DIALOG_DATA, useValue: { cardMode: 'basicMode' }
        },
        {
          provide: FavoriteItemsService, useValue: favoriteItemsServiceMocked
        }
      ]
    })
      .overrideComponent(ItemCardComponent, {
        set: {
          selector: 'app-item-card',
          template: '<div></div>'
        }
      })

      .overrideComponent(ItemSearchComponent, {
        set: {
          selector: 'app-item-search',
          template: '<div></div>'
        }

      })

      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFavoriteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component.ngOnDestroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when init and have favorite items saved', () => {
    it('should have favoriteItemCardData', () => {
      expect(component.favoriteItemCardData).toEqual([mockedItem[0]]);
    });
    it('should have favoriteItemCardDataFiltered', () => {
      expect(component.favoriteItemCardDataFiltered).toEqual([mockedItem[0]]);
    });
    it('should have card mode', () => {
      expect(component.itemCardDataMode).toEqual('basicMode');
    });
  });

  describe('when search favorite item by title', () => {
    beforeEach(() => {
      component.searchFavoritesByTitle('itemTitle');
    });

    it('should have set item searched', () => {
      expect(component.item).toEqual('itemTitle');
    });
  });

});
