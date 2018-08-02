import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import { Coin} from '../models/coin.model';
import { Exchanges } from '../models/price.model';



@Injectable()
export class CoinService {

  coin: Coin[];
  constructor(private http: Http) { }

  getCoins(): Observable<Coin[]> {
    return this.http.get("https://api.coinmarketcap.com/v1/ticker/").map(response=>response.json());
    // return this.http.get(this.apiUrl + "/ticker").map(response => response.json());
  }
  getCoinById(id:string):Observable<any>{
    return this.http.get("https://coincap.io/page/"+id).map(response=>response.json());
  }
  getPriceFromCompare(id:string,tsyms:string,exchange:string):Observable<any>{
    return this.http.get("https://min-api.cryptocompare.com/data/price?fsym=" + id + "&tsyms="+tsyms.split(",") +"&e=" + exchange)
  }
  getExchangeList(){
    return Exchanges;
  }
}
