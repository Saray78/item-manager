import { NgModule } from '@angular/core';
import { ItemCardComponent } from './item-card.component';
import { CommonModule } from '@angular/common';
import { FilterSearchPipeModule } from '../../pipes/filter-search/filter-search.pipe.module';
import { UtilsServiceService } from '../../services/utils-service.service';
import { FavoriteItemsService } from '../../services/favorite-items.service';

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
  providers: [
    UtilsServiceService,
    FavoriteItemsService
  ]
})
export class ItemCardModule {}
