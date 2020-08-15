import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemSortModel, Order, SortingFields } from '../../models/item-sort-model/item-sort-model';

@Component({
  selector: 'app-item-sort',
  templateUrl: './item-sort.component.html',
  styleUrls: ['./item-sort.component.scss']
})
export class ItemSortComponent implements OnInit {

  sortingFields: ItemSortModel[] = SortingFields;
  hasToShowSortingPanel: boolean = false;
  currentSortingField: string;
  readonly order = Order;
  // tslint:disable-next-line:variable-name
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

  @Output() handleSortItem: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleSortingPanel(forceStatus?: boolean): void {
    this.hasToShowSortingPanel = forceStatus || !this.hasToShowSortingPanel;
  }

  sortField(sortingField: string, descendantSorting: boolean = true, currentSortingField: string): void {
    this.currentSortingField = currentSortingField;
    this.handleSortItem.emit({
      sortingField,
      descendantSorting,
      isStringFieldType: sortingField !== 'price'
    });
  }
}
