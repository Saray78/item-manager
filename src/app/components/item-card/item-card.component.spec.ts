import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardComponent } from './item-card.component';
import { UtilsServiceService } from '../../services/utils-service.service';
import { FavoriteItemsService } from '../../services/favorite-items.service';
import { ItemCardModel } from '../../models/item-card-model/item-card-model';
import { of } from 'rxjs';
import { NoItemsMessageComponent } from '../no-items-message/no-items-message.component';

describe('ItemCardComponent', () => {
  let component: ItemCardComponent;
  let fixture: ComponentFixture<ItemCardComponent>;
  const utilsServiceSpy = jasmine.createSpyObj('UtilsService', ['trackByFunction']);
  const favoriteItemsServiceSpy = jasmine.createSpyObj('FavoriteItemsService', ['saveFavoriteItems']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItemCardComponent,
        NoItemsMessageComponent
      ],
      providers: [
        { provide: UtilsServiceService, useValue: utilsServiceSpy },
        { provide: FavoriteItemsService, useValue: favoriteItemsServiceSpy }
      ]
    })
      .overrideComponent(NoItemsMessageComponent, {
        set: {
          selector: 'app-no-items-message',
          template: '<div></div>'
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when set a favorite item', () => {
    const mockedItem: ItemCardModel = {
      title: 'title',
      description: 'description',
      price: 'price',
      email: 'email',
      image: 'image',
      isFavoriteItem: true
    };
    beforeEach(() => {
      component.itemCardData = [mockedItem];
      favoriteItemsServiceSpy.saveFavoriteItems.and.returnValue(of(mockedItem));
      component.setFavoriteItem(mockedItem);
    });

    it('should have save the item', () => {
      expect(favoriteItemsServiceSpy.saveFavoriteItems).toHaveBeenCalledWith([mockedItem]);
    });
  });
});
