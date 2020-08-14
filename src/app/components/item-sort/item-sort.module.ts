import { NgModule } from '@angular/core';
import { ItemSortComponent } from './item-sort.component';
import { CommonModule } from '@angular/common';
import { ClickOutsideModule } from 'ng-click-outside';


@NgModule({
  imports: [
    CommonModule,
    ClickOutsideModule
  ],
  exports: [
    ItemSortComponent
  ],
  declarations: [
    ItemSortComponent
  ],
  providers: []
})
export class ItemSortModule {
}
