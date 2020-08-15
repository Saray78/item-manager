import { Pipe, PipeTransform } from '@angular/core';
import { ItemCardModel } from '../../models/item-card-model/item-card-model';

@Pipe({
  name: 'filterByFavorites'
})
export class FilterByFavoritesPipe implements PipeTransform {

  transform(array: ItemCardModel[]): ItemCardModel[] {
    return array.filter(item => item.isFavoriteItem);
  }
}
