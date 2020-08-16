import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(value: any, searchItem: string, fieldList: any): any {
    return (value || []).filter((element) => {
      return fieldList.find((field) => {
        return this.removeDiacritics(element[field]).includes(this.removeDiacritics(searchItem));
      });
    });
  }
  private removeDiacritics(searchItem: string): any {
    const dict: any = {'á': 'a', 'ç': 'c'};
    return (searchItem || '').replace(/[^\w ]/g, char => dict[char] || char).toLowerCase();
  }
}

