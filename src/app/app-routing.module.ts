import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from "@angular/router";
import { CoinlistComponent } from './components/coinlist/coinlist.component';
import { RouterModule } from '@angular/router';
import { CoinDetailsComponent } from './components/coin-details/coin-details.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: CoinlistComponent },
  { path: 'home', component: CoinlistComponent },
  { path: 'detail', component: CoinDetailsComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
