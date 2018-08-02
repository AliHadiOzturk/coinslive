import { Pipe, PipeTransform } from '@angular/core';
import { Coin } from '../../models/coin.model';

@Pipe({
  name: 'coinFilter'
})
export class CoinFilterPipe implements PipeTransform {

  transform(value: Coin[], filterText: string): Coin[] {
    filterText=filterText?filterText.toLocaleLowerCase():null;
    return filterText?value.filter(p=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
