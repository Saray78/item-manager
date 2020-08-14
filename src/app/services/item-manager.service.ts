import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { itemsMock } from '../api-mocked/items.json';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemManagerService {
  constructor() {
  }

  getItemManagerItems(): Observable<any> {
    return of(itemsMock)
      .pipe(
        delay(500),
        map(response => {
          const items = { ...response };
          return items.items;
        })
      );
  }
}
