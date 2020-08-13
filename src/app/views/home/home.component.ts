import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemCardData, ItemCardModel } from '../../models/item-card-model/item-card-model';
import { FilterSearchPipe } from '../../pipes/filter-search.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemCardData: ItemCardModel[];
  itemCardDataFiltered: ItemCardModel[];
  item: ItemCardModel;
  itemsToShow: number = 5;
  isLoading: boolean = false;

  constructor(private route: ActivatedRoute,
              private filterSearchPipe: FilterSearchPipe) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(({ itemData }: ItemCardData) => {
      this.itemCardData = itemData;
      this.itemCardDataFiltered = [...this.itemCardData];
      this.truncateItemDescription(this.itemCardDataFiltered);
      console.log(this.itemCardData);
    });
  }

  private truncateItemDescription(itemCardDataFiltered: ItemCardModel[]): void {
    itemCardDataFiltered.forEach((item: ItemCardModel) => {
      item.description = `${item.description.substring(0, 175 - 2)}…`;
    });
  }

  increaseShow(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.itemsToShow += 5;
      this.isLoading = false;
    }, 1000);
  }

  searchItem(item): void {
    this.itemCardDataFiltered = this.filterSearchPipe
      .transform(this.itemCardData, item.inputItem, ['title', 'description', 'price', 'email']);
  }

}
