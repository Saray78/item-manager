import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';
import { HomeResolver } from '../../services/resolvers/home.resolver';
import { ItemCardModule } from '../../components/item-card/item-card.module';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ItemSearchModule } from '../../components/item-search/item-search.module';
import { FilterSearchPipe } from '../../pipes/filter-search.pipe';
import { FilterSearchPipeModule } from '../../pipes/filter-search.pipe.module';
import { ItemSortModule } from '../../components/item-sort/item-sort.module';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ItemCardModule,
    FormsModule,
    MatProgressSpinnerModule,
    ItemSearchModule,
    FilterSearchPipeModule,
    ItemSortModule

  ],
  exports: [
    HomeComponent
  ],
  declarations: [HomeComponent],
  providers: [
    HomeResolver,
    FilterSearchPipe
  ]
})
export class HomeModule {
}
