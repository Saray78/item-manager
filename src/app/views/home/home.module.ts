import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';
import { HomeResolver } from '../../services/resolvers/home.resolver';
import { ItemCardModule } from '../../components/item-card/item-card.module';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ItemCardModule,
    FormsModule,
    MatProgressSpinnerModule
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
