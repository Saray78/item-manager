import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FavoriteItemsService } from '../../services/favorite-items.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ItemCardModel } from '../../models/item-card-model/item-card-model';

@Component({
  selector: 'app-item-favorite-modal',
  templateUrl: './item-favorite-modal.component.html',
  styleUrls: ['./item-favorite-modal.component.scss']
})
export class ItemFavoriteModalComponent implements OnInit, OnDestroy {
  favoriteItemCardData: ItemCardModel[];
  favoriteItemCardDataFiltered: ItemCardModel[] = [];
  item: string;
  itemCardDataMode: any;
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(private favoriteItemsService: FavoriteItemsService,
              @Inject(MAT_DIALOG_DATA) public dialogData: any) {
  }

  ngOnInit(): void {
    this.favoriteItemsService.favoriteItemList$.pipe(takeUntil(this.unsubscribe))
      .subscribe(items => {
        this.favoriteItemCardData = items;
        this.favoriteItemCardDataFiltered = [...this.favoriteItemCardData];
      });

    this.itemCardDataMode = this.dialogData.cardMode;
    console.log(this.dialogData);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  searchFavoritesByTitle(item): void {
    this.item = item;
  }

}
