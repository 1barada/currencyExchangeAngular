import { Component, Input } from '@angular/core';
import Currency from 'src/app/models/Currency';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() codes: string[] = [];
  @Input() currencies: Currency[] = [];

  constructor() {
    this.currencies = this.currencies.filter(currency => this.codes.includes(currency.code));
  }
}
