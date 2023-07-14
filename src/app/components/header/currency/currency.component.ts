import { Component, Input } from '@angular/core';
import Currency from 'src/app/models/Currency';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrenciesComponent {
  @Input() currency: Currency = {code: '', value: 0};
}
