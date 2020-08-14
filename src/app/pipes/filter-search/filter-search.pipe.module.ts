import { NgModule } from '@angular/core';
import { FilterSearchPipe } from './filter-search.pipe';

@NgModule({
  exports: [
    FilterSearchPipe
  ],
  declarations: [
    FilterSearchPipe,
  ]
})
export class FilterSearchPipeModule {
}
