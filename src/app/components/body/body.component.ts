import { Component, Input } from '@angular/core';
import Currency from 'src/app/models/Currency';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @Input() currencies: Currency[] = [];
}
