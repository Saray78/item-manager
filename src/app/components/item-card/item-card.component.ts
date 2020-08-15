import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ItemCardModel } from '../../models/item-card-model/item-card-model';
import { FavoriteItemsService } from '../../services/favorite-items.service';
import { UtilsServiceService } from '../../services/utils-service.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  private favoriteItems: ItemCardModel[] = [];
  // tslint:disable-next-line:variable-name
  private _itemCardData: ItemCardModel[];
  @Input() set itemCardData(value) {
    if (value) {
      this._itemCardData = value;
      console.log(value);
    }
  }

  get itemCardData(): ItemCardModel[] {
    return this._itemCardData;
  }

  constructor(private favoriteItemsService: FavoriteItemsService,
              public utilsService: UtilsServiceService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  setFavoriteItem(item): void {
    console.log('he clic');
    item.isFavoriteItem = !item.isFavoriteItem;
    this.saveFavoriteItem();
  }

  saveFavoriteItem(): void {
    this.favoriteItemsService.saveFavoriteItems(this.itemCardData);
  }
}
