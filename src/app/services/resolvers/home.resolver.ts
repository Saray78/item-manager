import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ItemManagerService } from '../item-manager.service';

@Injectable()
export class HomeResolver implements Resolve<any | null> {
  constructor(private itemManagerService: ItemManagerService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any | null> {
    return this.itemManagerService.getItemManagerItems();
  }
}
