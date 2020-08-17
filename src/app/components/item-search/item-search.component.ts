import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemCardModel } from '../../models/item-card-model/item-card-model';
import { ItemSearchMode, ItemSearchModel, SearchBy } from '../../models/item-search-model/item-search.model';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.scss']
})
export class ItemSearchComponent {
  @Input() set itemCardDataMode(value: string) {
    this.searchBy = value && value === ItemSearchMode.basicMode ? SearchBy.titleField : SearchBy.allFields;
  }

  @Output() handleItem: EventEmitter<string> = new EventEmitter<string>();
  item: ItemCardModel;
  searchBy: string = SearchBy.allFields;

  searchItem(itemSearched: ItemSearchModel): void {
    this.handleItem.emit(itemSearched.inputItem);
  }
}
