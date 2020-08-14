import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortItemService {

  sortList$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }

  saveSorting(value): void {
    this.sortList$.next(value);
  }
}
