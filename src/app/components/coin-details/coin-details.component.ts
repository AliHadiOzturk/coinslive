import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Coin } from '../../models/coin.model';
import { Http } from '@angular/http';
import { error } from 'util';
import { CoinService } from '../../services/coin.service';
import { Price } from '../../models/price.model';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  providers: [CoinService]
})
export class CoinDetailsComponent implements OnInit {
  id: string;
  prices: Price;
  ExchangeList;
  exchange:"Coinbase";
  coin;
  tsymbol: string;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private http: Http, private coinService: CoinService) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params["id"];
      this.coinService.getCoinById(this.id).subscribe(p => this.coin = p);
      this.http.get("https://min-api.cryptocompare.com/data/price?fsym=" + this.id + "&tsyms=USD" + this.tsymbol + "&e=" + this.exchange)
        .map(p => p.json()).subscribe(p => { this.prices = p; }, error => console.log(error));
      this.ExchangeList = this.coinService.getExchangeList();
    });
  }
  ngOnInit() {
  }
  onChange(newValue) {
    this.http.get("https://min-api.cryptocompare.com/data/price?fsym=" + this.id + "&tsyms=USD," + this.tsymbol + "&e=" + newValue)
      .map(p => p.json()).subscribe(p => { this.prices = p; }, error => console.log(error));
  }
  getPriceFromCompare() {
    console.log(this.coin);

  }

}
