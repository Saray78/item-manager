import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemCardData, ItemCardModel } from '../../models/item-card-model/item-card-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemCardData;
  item;
  show = 5;
  isLoading = true;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(({ itemData }: ItemCardData) => {
      this.isLoading = true;
      this.itemCardData = itemData;
      this.isLoading = false;
      console.log(this.itemCardData);
    });
  }

  increaseShow(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.show += 5;
      this.isLoading = false;
    }, 1000);
  }

  searchItem(item): void {
    this.itemCardData = [{
      title: 'iPhone 6S Oro',
      description: 'Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740. Las descripciones las puedes encontrar en la web de apple. Esta libre.',
      price: '740',
      email: 'iphonemail@wallapop.com',
      image: 'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/iphone.png'
    }];
    console.log(item);
  }

}
