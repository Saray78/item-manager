import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], field: string, descendantSorting = true): any[] {
    let sortedArray;
    sortedArray = array.sort((a, b) => {
      if (a[field].toLowerCase() > b[field].toLowerCase()) {
        return 1;
      } else if (a[field].toLowerCase() < b[field].toLowerCase()) {
        return -1;
      } else {
        return 0;
      }
    });
    return descendantSorting ? sortedArray : sortedArray.reverse();
  }

  // hacer la de los numeros
}
