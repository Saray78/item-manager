import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ItemCardModel } from '../../models/item-card-model/item-card-model';
import { FavoriteItemsService } from '../../services/favorite-items.service';
import { UtilsServiceService } from '../../services/utils-service.service';
import { ItemSearchMode } from '../../models/item-search-model/item-search.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input() itemCardData: ItemCardModel[];
  @Input() itemCardDataMode: any;
  readonly ITEM_SEARCH_BASIC_MODE: string = ItemSearchMode.basicMode;

  constructor(private favoriteItemsService: FavoriteItemsService,
              public utilsService: UtilsServiceService) {
  }

  ngOnInit(): void {
  }

  setFavoriteItem(item): void {
    item.isFavoriteItem = !item.isFavoriteItem;
    this.saveFavoriteItem();
  }

  private saveFavoriteItem(): void {
    this.favoriteItemsService.saveFavoriteItems(this.itemCardData);
  }
}
