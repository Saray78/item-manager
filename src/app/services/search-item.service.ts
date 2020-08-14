import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchItemService {

  searchItem$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }

  saveSearchedItem(value): void {
    this.searchItem$.next(value);
  }
}
