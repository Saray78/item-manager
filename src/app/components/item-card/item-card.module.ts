import { NgModule } from '@angular/core';
import { ItemCardComponent } from './item-card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
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
