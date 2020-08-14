import { NgModule } from '@angular/core';
import { ItemCardComponent } from './item-card.component';
import { CommonModule } from '@angular/common';
import { FilterSearchPipeModule } from '../../pipes/filter-search/filter-search.pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FilterSearchPipeModule
  ],
  exports: [
    ItemCardComponent
  ],
  declarations: [
    ItemCardComponent
  ],
  providers: []
})
export class ItemCardModule {}
