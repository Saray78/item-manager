import { Component, OnInit } from '@angular/core';
import { ItemSortModel, SortingFields } from '../../models/item-sort-model/item-sort-model';

@Component({
  selector: 'app-item-sort',
  templateUrl: './item-sort.component.html',
  styleUrls: ['./item-sort.component.scss']
})
export class ItemSortComponent implements OnInit {

  sortingFields: ItemSortModel[] = SortingFields;
  hasToShowSortingPanel: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.sortingFields);
  }


  toggleSortingPanel(forceStatus?: boolean): void {
      this.hasToShowSortingPanel = forceStatus || !this.hasToShowSortingPanel;
    }
}
