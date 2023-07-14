import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import GetCurrenciesResponseData from '../models/GetCurrenciesResponseData';
import { Observable, map } from 'rxjs';
import Currency from '../models/Currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }
  //https://api.currencyapi.com/v3/latest?apikey=cur_live_TeIpRsrUwz8N4ZnF0OeZhEZJUBgn1ZpvUNyIZulG&currencies=EUR%2CUSD%2CUAH&base_currency=UAH
  getCurrentCurrencies(): Observable<Currency[]> {
    return this.http.get<GetCurrenciesResponseData>('https://api.currencyapi.com/v3/latest?apikey=cur_live_TeIpRsrUwz8N4ZnF0OeZhEZJUBgn1ZpvUNyIZulG&currencies=EUR%2CUSD%2CUAH&base_currency=UAH')
    .pipe(
      map(response => {
        const currencies: Currency[] = [];
        for (const [key, value] of Object.entries(response.data)) {
          currencies.push(value);
        }

        return currencies;
      })
    );
  }
}
