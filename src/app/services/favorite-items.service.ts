import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteItemsService {

  favoriteItemList$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  galleryVisibilityStatus$: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  saveFavoriteItems(value): void {
    this.favoriteItemList$.next(value);
  }

  favoriteItemsVisible(status: boolean): void {
    this.galleryVisibilityStatus$.emit(status);
  }
}
