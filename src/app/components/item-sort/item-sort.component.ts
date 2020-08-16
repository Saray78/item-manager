import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterBy, ItemSortModel, Order, SortingFields, SortingFieldsInput } from '../../models/item-sort-model/item-sort-model';

@Component({
  selector: 'app-item-sort',
  templateUrl: './item-sort.component.html',
  styleUrls: ['./item-sort.component.scss']
})
export class ItemSortComponent {

  sortingFields: ItemSortModel[] = SortingFields;
  hasToShowSortingPanel: boolean = false;
  currentSortingField: string;
  readonly order = Order;
  private _isNewSearch: boolean;
  @Input() set isNewSearch(value: boolean) {
    if (value) {
      this._isNewSearch = value;
      this.currentSortingField = null;
    }
  }

  get isNewSearch(): boolean {
    return this._isNewSearch;
  }

  @Output() handleSortItem: EventEmitter<SortingFieldsInput> = new EventEmitter<SortingFieldsInput>();

  toggleSortingPanel(forceStatus?: boolean): void {
    this.hasToShowSortingPanel = forceStatus || !this.hasToShowSortingPanel;
  }

  sortField(sortingField: string, descendantSorting: boolean = true, currentSortingField: string): void {
    this.currentSortingField = currentSortingField;
    this.handleSortItem.emit({
      sortingField,
      descendantSorting,
      isStringFieldType: sortingField !== FilterBy.price
    });
  }
}
