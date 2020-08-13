import { Component, Input, OnInit } from '@angular/core';
import { ItemCardModel } from '../../models/item-card-model/item-card-model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() itemCardData: ItemCardModel[];
  constructor() {
  }

  ngOnInit(): void {
  }

  setFavoriteItem(item): void {
    item.isFavoriteItem = !item.isFavoriteItem;
  }

}
