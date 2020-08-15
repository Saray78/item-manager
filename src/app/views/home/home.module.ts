import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';
import { HomeResolver } from '../../services/resolvers/home.resolver';
import { ItemCardModule } from '../../components/item-card/item-card.module';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ItemSearchModule } from '../../components/item-search/item-search.module';
import { FilterSearchPipe } from '../../pipes/filter-search/filter-search.pipe';
import { FilterSearchPipeModule } from '../../pipes/filter-search/filter-search.pipe.module';
import { ItemSortModule } from '../../components/item-sort/item-sort.module';
import { OrderByPipe } from '../../pipes/order-by/order-by.pipe';
import { OrderByPipeModule } from '../../pipes/order-by/order-by.pipe.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ItemFavoriteModalModule } from '../../components/item-favorite-modal/item-favorite-modal.module';
import { PureSlicePipeModule } from '../../pipes/pure-slice/pure-slice.pipe.module';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ItemCardModule,
    FormsModule,
    MatProgressSpinnerModule,
    ItemSearchModule,
    FilterSearchPipeModule,
    ItemSortModule,
    OrderByPipeModule,
    MatDialogModule,
    PureSlicePipeModule,
    ItemFavoriteModalModule

  ],
  exports: [
    HomeComponent
  ],
  declarations: [HomeComponent],
  providers: [
    HomeResolver,
    FilterSearchPipe,
    OrderByPipe
  ]
})
export class HomeModule {
}
