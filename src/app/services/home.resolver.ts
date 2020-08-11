import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class HomeResolver implements Resolve<any | null> {
  constructor() {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any | null> {
    console.log(route, 'aqui');
    return of(['122']);
  }
}
