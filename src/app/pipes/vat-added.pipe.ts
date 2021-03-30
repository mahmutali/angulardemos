import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform{



  transform(value: number, ratio: number): string | any {
    let currencyPipe = new CurrencyPipe("en-US","USD")
    let result =  value * ratio/100 + value;
    let pipeResult =  currencyPipe.transform(result);
    return pipeResult;
  }

}
