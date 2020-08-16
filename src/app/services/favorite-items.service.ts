import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemCardModel } from '../models/item-card-model/item-card-model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteItemsService {
  favoriteItemList$: BehaviorSubject<ItemCardModel[]> = new BehaviorSubject<any>([]);

  saveFavoriteItems(itemCard: ItemCardModel[]): void {
    this.favoriteItemList$.next(itemCard);
  }
}
