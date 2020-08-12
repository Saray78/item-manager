import { NgModule } from '@angular/core';
import { ItemSearchComponent } from './item-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule
  ],
  exports: [
    ItemSearchComponent
  ],
  declarations: [
    ItemSearchComponent
  ],
  providers: []
})
export class ItemSearchModule {}
