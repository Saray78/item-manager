import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemFavoriteModalComponent } from './item-favorite-modal.component';
import { ItemSearchModule } from '../item-search/item-search.module';
import { ItemCardModule } from '../item-card/item-card.module';
import { FilterByFavoritesPipeModule } from '../../pipes/filter-by-favorites/filter-by-favorites.pipe-module';

@NgModule({
  imports: [
    CommonModule,
    ItemSearchModule,
    ItemCardModule,
    FilterByFavoritesPipeModule
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
