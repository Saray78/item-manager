import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], field: string, descendantSorting: boolean = true, isStringFieldType: boolean = true): any[] {
    let sortedArray;

    if (isStringFieldType) {
      sortedArray = this.sortStringFields(array, field);
    } else {
      sortedArray = this.sortNumberFields(array, field);
    }
    return descendantSorting ? sortedArray : sortedArray.reverse();
  }

  private sortStringFields(array, field): [] {
    return array.sort((a, b) => {
      if (a[field].toLowerCase() > b[field].toLowerCase()) {
        return 1;
      } else if (a[field].toLowerCase() < b[field].toLowerCase()) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  private sortNumberFields(array, field): [] {
    return array.sort((a: number, b: number) => a[field] - b[field]);
  }
}
