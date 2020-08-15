import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ItemCardModel } from '../../models/item-card-model/item-card-model';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.scss']
})
export class ItemSearchComponent implements OnInit {
  item: ItemCardModel;
  @Output() handleItem: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  searchItem(item): void {
    this.handleItem.emit(item.inputItem);
  }
}
