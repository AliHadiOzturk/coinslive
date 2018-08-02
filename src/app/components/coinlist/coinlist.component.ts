import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../services/coin.service';
import { Coin } from '../../models/coin.model';
import { Http } from '@angular/http';
import { error } from 'util';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { Router } from '@angular/router';
import { OrderPipe } from "ngx-order-pipe";

@Component({
  selector: 'app-coinlist',
  templateUrl: 'coinlist.component.html',
  providers: [CoinService]
})
export class CoinlistComponent implements OnInit {

  key: string;
  reverse: boolean = false;
  coin: Coin[];
  filterText:string;
  constructor(private coinService: CoinService, private http: Http, private router: Router,private orderPipe:OrderPipe ) {
    this.coinService.getCoins().subscribe(p => this.coin = p);
    this.orderPipe.transform(this.coin,'rank');
  }
  ngOnInit() {
  }
  sort(key){
    this.key=key;
    this.reverse=!this.reverse;
  }
  
  trClick(id: string) {
    console.log(id);
    this.router.navigate(['/detail'], { queryParams: { "id": id } });
  }
}
