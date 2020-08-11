import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { itemsMock } from '../api-mocked/items.json';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemManagerService {
  constructor() {}

  getItemManagerItems(): Observable<any> {
    return of(itemsMock)
      .pipe(
        delay(500),
        map(response => {
          const items = {...response};
          return {
            itemList: items.items
          };
        })
      );
  }
}
