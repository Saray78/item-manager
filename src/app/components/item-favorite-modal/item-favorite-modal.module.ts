import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemFavoriteModalComponent } from './item-favorite-modal.component';
import { ItemSearchModule } from '../item-search/item-search.module';
import { ItemCardModule } from '../item-card/item-card.module';
import { FilterByFavoritesPipeModule } from '../../pipes/filter-by-favorites/filter-by-favorites.pipe-module';
import { FilterSearchPipeModule } from '../../pipes/filter-search/filter-search.pipe.module';
import { NoItemsMessageModule } from '../no-items-message/no-items-message.module';

@NgModule({
  imports: [
    CommonModule,
    ItemSearchModule,
    ItemCardModule,
    FilterByFavoritesPipeModule,
    FilterSearchPipeModule
  ],
  exports: [
    ItemFavoriteModalComponent
  ],
  declarations: [
    ItemFavoriteModalComponent
  ],
  entryComponents: [
    ItemFavoriteModalComponent
  ],
  providers: []
})
export class ItemFavoriteModalModule {
}
