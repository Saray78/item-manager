import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemCardData, ItemCardModel } from '../../models/item-card-model/item-card-model';
import { FilterSearchPipe } from '../../pipes/filter-search/filter-search.pipe';
import { OrderByPipe } from '../../pipes/order-by/order-by.pipe';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ItemFavoriteModalComponent } from '../../components/item-favorite-modal/item-favorite-modal.component';

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
  isLoading: boolean = false;
  isNewSearch: boolean = false;

  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(private route: ActivatedRoute,
              private filterSearchPipe: FilterSearchPipe,
              private orderByPipe: OrderByPipe,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.route.data
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(({ itemData }: ItemCardData) => {
        this.itemCardData = itemData;
        this.itemCardDataFiltered = [...this.itemCardData];
        this.truncateItemDescription(this.itemCardDataFiltered);
        console.log(this.itemCardData);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private truncateItemDescription(itemCardDataFiltered: ItemCardModel[]): void {
    itemCardDataFiltered.forEach((item: ItemCardModel) => {
      item.description = `${item.description.substring(0, 175 - 2)}…`;
    });
  }

  increaseShow(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.itemsToShow += 5;
      this.isLoading = false;
    }, 1000);
  }

  setSearchedItem(item): void {
    this.isNewSearch = true;
    this.itemsToShow = 5;
    this.itemCardDataFiltered = this.filterSearchPipe
      .transform(this.itemCardData, item, ['title', 'description', 'price', 'email']);
    setTimeout(() => {
      this.isNewSearch = false;
    }, 1000);
  }


  setSortedItems(item): void {
    this.itemCardDataFiltered = [...this.itemCardDataFiltered];
    this.itemsToShow = 5;
    this.itemCardDataFiltered = this.orderByPipe
      .transform(this.itemCardDataFiltered, item.sortingField, item.descendantSorting, item.isStringFieldType);
  }

  openFavoriteItemModal(): void {
    const dialogRef = this.dialog.open(ItemFavoriteModalComponent, {
      data: {
        cardMode: 'basicMode'
      }
    });
  }
}
