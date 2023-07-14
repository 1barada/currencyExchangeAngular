import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import Currency from 'src/app/models/Currency';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnChanges {
  @Input() currencies: Currency[] = [];
  options:string[] = [];
  leftCode:string = 'EUR';
  rightCode:string = 'EUR';
  leftValue:number = 1;
  rightValue:number = 1; 

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currencies']) {
      this.options = this.currencies.map(currency => currency.code);
    }
  }

  recalculateLeft() {
    const leftCurrency = this.currencies.find(currency => currency.code === this.leftCode);
    const rightCurrency = this.currencies.find(currency => currency.code === this.rightCode);

    this.leftValue = leftCurrency!.value / rightCurrency!.value * this.rightValue;
  }

  recalculateRight() {
    const leftCurrency = this.currencies.find(currency => currency.code === this.leftCode);
    const rightCurrency = this.currencies.find(currency => currency.code === this.rightCode);

    this.rightValue = rightCurrency!.value / leftCurrency!.value * this.leftValue;
  }

  changeLeftInputValue(value: number) {
    this.leftValue = value;
    this.recalculateRight();
  }

  changeRightInputValue(value: number) {
    this.rightValue = value;
    this.recalculateLeft();
  }

  changeLeftInputCode(value: string) {
    this.leftCode = value;
    this.recalculateRight();
  }

  changeRightInputCode(value: string) {
    this.rightCode = value;
    this.recalculateLeft();
  }
}
