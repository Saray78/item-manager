import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ItemSortModel, SortingFields } from '../../models/item-sort-model/item-sort-model';
import { ItemManagerService } from '../../services/item-manager.service';
import { SortItemService } from '../../services/sort-item.service';

@Component({
  selector: 'app-item-sort',
  templateUrl: './item-sort.component.html',
  styleUrls: ['./item-sort.component.scss']
})
export class ItemSortComponent implements OnInit {

  sortingFields: ItemSortModel[] = SortingFields;
  hasToShowSortingPanel: boolean = false;
  constructor(private sortItemService: SortItemService) {
  }

  ngOnInit(): void {
  }


  toggleSortingPanel(forceStatus?: boolean): void {
    this.hasToShowSortingPanel = forceStatus || !this.hasToShowSortingPanel;
  }

  sortField(sortingField, sortingDirection = true): void {
    this.sortItemService.saveSorting({
      sortingField,
      sortingDirection
    });
  }
}
