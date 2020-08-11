import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeResolver } from '../../services/resolvers/home.resolver';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      itemData: HomeResolver
    },
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {
}
