import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsServiceService {

  trackByFunction(idName, index, item): any {
    if (!item) {
      return null;
    }
    return `${item[idName] || item.id}${index}`;
  }

}
