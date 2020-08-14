import { NgModule } from '@angular/core';
import { ItemSearchComponent } from './item-search.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
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
