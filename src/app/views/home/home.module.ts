import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';
import { HomeResolver } from '../../services/resolvers/home.resolver';
import { ItemCardModule } from '../../components/item-card/item-card.module';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ItemSearchModule } from '../../components/item-search/item-search.module';



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ItemCardModule,
    FormsModule,
    MatProgressSpinnerModule,
    ItemSearchModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [HomeComponent],
  providers: [
    HomeResolver
  ]
})
export class HomeModule {
}
