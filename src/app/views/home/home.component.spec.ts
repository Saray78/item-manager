import { async, ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ItemCardModel } from '../../models/item-card-model/item-card-model';
import { ActivatedRoute } from '@angular/router';
import { FilterSearchPipe } from '../../pipes/filter-search/filter-search.pipe';
import { OrderByPipe } from '../../pipes/order-by/order-by.pipe';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { ItemSearchComponent } from '../../components/item-search/item-search.component';
import { ItemSortComponent } from '../../components/item-sort/item-sort.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PureSlicePipe } from '../../pipes/pure-slice/pure-slice.pipe';
import { ItemCardComponent } from '../../components/item-card/item-card.component';
import { SortingFieldsInput } from '../../models/item-sort-model/item-sort-model';
import { ItemFavoriteModalComponent } from '../../components/item-favorite-modal/item-favorite-modal.component';
import { FavoriteItemsService } from '../../services/favorite-items.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const filterSearchPipeSpy = jasmine.createSpyObj('FilterSearchPipe', ['transform']);
  const orderSearchPipeSpy = jasmine.createSpyObj('OrderByPipe', ['transform']);
  const favoriteItemsSpy = jasmine.createSpyObj('FavoriteItemsService', ['saveFavoriteItems']);
  const matDialogServiceSpy = jasmine.createSpyObj('MatDialog', ['open', 'afterClosed']);
  const mockedData: ItemCardModel[] = [
    {
      title: 'title1',
      description: 'Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo' + ' encuentras por 749 euros y yo lo vendo por 740, Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740…',
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
    },
    {
      title: 'title3',
      description: 'description3',
      price: 'price3',
      email: 'email3',
      image: 'image3'
    },
    {
      title: 'title4',
      description: 'description4',
      price: 'price4',
      email: 'email4',
      image: 'image4'
    }
  ];
  const activatedRouteMock = {
    data: of({
      itemData: mockedData
    })
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        HomeComponent,
        ItemSearchComponent,
        ItemSortComponent,
        ItemCardComponent,
        PureSlicePipe
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: FilterSearchPipe, useValue: filterSearchPipeSpy },
        { provide: OrderByPipe, useValue: orderSearchPipeSpy },
        { provide: MatDialog, useValue: matDialogServiceSpy },
        { provide: FavoriteItemsService, useValue: favoriteItemsSpy }

      ]
    })
      .overrideComponent(ItemSearchComponent, {
        set: {
          selector: 'app-item-search',
          template: '<div></div>'
        }
      })
      .overrideComponent(ItemSortComponent, {
        set: {
          selector: 'app-item-sort',
          template: '<div></div>'
        }
      })

      .overrideComponent(ItemCardComponent, {
        set: {
          selector: 'app-item-card',
          template: '<div></div>'
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    filterSearchPipeSpy.transform.calls.reset();
    orderSearchPipeSpy.transform.calls.reset();
    matDialogServiceSpy.open.calls.reset();
    component.ngOnDestroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when have data', () => {
    it('should have card data', () => {
      expect(component.itemCardData).toEqual(mockedData);
    });
    it('should have copy of card data', () => {
      expect(component.itemCardDataFiltered).toEqual(mockedData);
    });
  });


  describe('when load more items', () => {
    beforeEach(fakeAsync(() => {
      component.isLoadingMoreItems = true;
      component.itemsToShow = 10;
      component.increaseShowItems();
      tick();
      flush();
    }));

    it('should have increase items to show', () => {
      expect(component.itemsToShow).toEqual(15);
    });

    it('should have finish loading items', () => {
      expect(component.isLoadingMoreItems).toEqual(false);
    });
  });

  describe('when set the items searched', () => {
    let FilteredSearchSpy;
    const mockedDataFiltered: ItemCardModel[] = [
      {
        title: 'title1',
        description: 'Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740…',
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
      },
      {
        title: 'title3',
        description: 'description3',
        price: 'price3',
        email: 'email3',
        image: 'image3'
      },
      {
        title: 'title4',
        description: 'description4',
        price: 'price4',
        email: 'email4',
        image: 'image4'
      }
    ];

    beforeEach(fakeAsync(() => {
      component.isNewSearch = true;
      FilteredSearchSpy = filterSearchPipeSpy.transform.and.returnValue([]);
      component.setSearchedItem('itemSearched');
      tick();
      flush();
    }));

    it('should have filter the search', () => {
      expect(FilteredSearchSpy).toHaveBeenCalledWith(mockedDataFiltered, 'itemSearched', ['title', 'description', 'price', 'email']);
    });


    it('should have reset items to show', () => {
      expect(component.itemsToShow).toEqual(5);
    });

    it('should have finish search', () => {
      expect(component.isNewSearch).toEqual(false);
    });
  });
  describe('when set the items searched', () => {
    let orderSpy;
    const mockedDataFiltered: ItemCardModel[] = [
      {
        title: 'title1',
        description: 'Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740…',
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
      },
      {
        title: 'title3',
        description: 'description3',
        price: 'price3',
        email: 'email3',
        image: 'image3'
      },
      {
        title: 'title4',
        description: 'description4',
        price: 'price4',
        email: 'email4',
        image: 'image4'
      }
    ];

    const mockedDataSorted: SortingFieldsInput =
      {
        sortingField: 'sortingField',
        descendantSorting: true,
        isStringFieldType: true
      };


    beforeEach(() => {
      component.isNewSearch = true;
      orderSpy = orderSearchPipeSpy.transform.and.returnValue([]);
      component.setSortedItems(mockedDataSorted);
    });

    it('should have filter the search', () => {
      expect(orderSpy).toHaveBeenCalledWith(mockedDataFiltered, mockedDataSorted.sortingField,
        mockedDataSorted.descendantSorting, mockedDataSorted.isStringFieldType);
    });
    it('should have reset items to show', () => {
      expect(component.itemsToShow).toEqual(5);
    });
  });

  describe('when open favorite modal', () => {
    beforeEach(() => {
      matDialogServiceSpy.open.and.returnValue({
        afterClosed: () => of({})
      });
      matDialogServiceSpy.afterClosed.and.returnValue(of({}));
      component.openFavoriteItemModal();
    });

    it('should have open the modal', () => {
      expect(matDialogServiceSpy.open).toHaveBeenCalledWith(ItemFavoriteModalComponent, {
        data: {
          cardMode: 'basicMode'
        },
        maxHeight: '600px',
        minWidth: '300px',
      });
    });
  });

  describe('when close favorite modal', () => {
    beforeEach(() => {
      favoriteItemsSpy.saveFavoriteItems.and.returnValue(of({}));
      matDialogServiceSpy.open.and.returnValue({
        afterClosed: () => of({})
      });
      matDialogServiceSpy.afterClosed.and.returnValue(of({}));
      component.openFavoriteItemModal();
    });

    it('should have save card items', () => {
      expect(favoriteItemsSpy.saveFavoriteItems).toHaveBeenCalledWith(mockedData);
    });
  });

});
