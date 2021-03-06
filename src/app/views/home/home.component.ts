import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemCardData, ItemCardModel } from '../../models/item-card-model/item-card-model';
import { FilterSearchPipe } from '../../pipes/filter-search/filter-search.pipe';
import { OrderByPipe } from '../../pipes/order-by/order-by.pipe';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ItemFavoriteModalComponent } from '../../components/item-favorite-modal/item-favorite-modal.component';
import { Fields, SortingFieldsInput } from '../../models/item-sort-model/item-sort-model';
import { ItemSearchMode } from '../../models/item-search-model/item-search.model';
import { FavoriteItemsService } from '../../services/favorite-items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  itemCardData: ItemCardModel[];
  itemCardDataFiltered: ItemCardModel[];
  item: ItemCardModel;
  itemsToShow: number = 5;
  isLoadingMoreItems: boolean = false;
  isNewSearch: boolean = false;
  readonly MAX_MODAL_HEIGHT: string = '600px';
  readonly MIN_MODAL_WIDTH: string = '300px';
  readonly MAX_CHARACTERS: number = 175;
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(private route: ActivatedRoute,
              private filterSearchPipe: FilterSearchPipe,
              private orderByPipe: OrderByPipe,
              private favoriteItemsService: FavoriteItemsService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.route.data
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(({ itemData }: ItemCardData) => {
        this.itemCardData = itemData;
        this.itemCardDataFiltered = [...this.itemCardData];
        this.truncateItemDescription(this.itemCardDataFiltered);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private truncateItemDescription(itemCardDataFiltered: ItemCardModel[]): void {
    itemCardDataFiltered.forEach((item: ItemCardModel) => {
      item.description = item.description.length > this.MAX_CHARACTERS ?
        `${item.description.substring(0, this.MAX_CHARACTERS - 2)}…` : item.description;
    });
  }

  increaseShowItems(): void {
    this.isLoadingMoreItems = true;
    setTimeout(() => {
      this.itemsToShow += 5;
      this.isLoadingMoreItems = false;
    }, 1000);
  }

  setSearchedItem(itemSearched: string): void {
    this.isNewSearch = true;
    this.itemsToShow = 5;
    this.itemCardDataFiltered = this.filterSearchPipe
      .transform(this.itemCardData, itemSearched, Fields.allFields);
    setTimeout(() => {
      this.isNewSearch = false;
    }, 500);
  }


  setSortedItems(sortingFieldsInput: SortingFieldsInput): void {
    this.itemCardDataFiltered = [...this.itemCardDataFiltered];
    this.itemsToShow = 5;
    this.itemCardDataFiltered = this.orderByPipe
      .transform(this.itemCardDataFiltered, sortingFieldsInput.sortingField,
        sortingFieldsInput.descendantSorting, sortingFieldsInput.isStringFieldType);
  }

  openFavoriteItemModal(): void {
    this.dialog.open(ItemFavoriteModalComponent, {
      data: {
        cardMode: ItemSearchMode.basicMode
      },
      maxHeight: this.MAX_MODAL_HEIGHT,
      minWidth: this.MIN_MODAL_WIDTH
    }).afterClosed().subscribe(() => {
      this.favoriteItemsService.saveFavoriteItems(this.itemCardDataFiltered);
    });
  }
}
