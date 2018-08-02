import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { OrderModule } from "ngx-order-pipe";

import { AppComponent } from './app.component';
import { CoinlistComponent } from './components/coinlist/coinlist.component';
import { HttpModule} from '@angular/http';
import { NgModel } from "@angular/forms";
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router/src/router_module';
import { CoinDetailsComponent } from './components/coin-details/coin-details.component';
import { CoinFilterPipe } from './components/coinlist/coin-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CoinlistComponent,
    CoinDetailsComponent,
    CoinFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
