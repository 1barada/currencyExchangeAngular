import { Component, OnInit } from '@angular/core';
import Currency from './models/Currency';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currencies: Currency[] = [];
  headerCurrencies: Currency[] = [];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {  
    this.currencyService.getCurrentCurrencies().subscribe((currencies) => {
      this.currencies = currencies;
      this.headerCurrencies = currencies.filter(currency => currency.code !== 'UAH');
    });
  }
}
