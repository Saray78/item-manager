import { NgModule } from '@angular/core';
import { FilterByFavoritesPipe } from './filter-by-favorites.pipe';

@NgModule({
  exports: [
    FilterByFavoritesPipe
  ],
  declarations: [
    FilterByFavoritesPipe
  ],
})
export class FilterByFavoritesPipeModule {
}
