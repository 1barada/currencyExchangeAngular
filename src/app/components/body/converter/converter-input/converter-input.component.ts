import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-converter-input',
  templateUrl: './converter-input.component.html',
  styleUrls: ['./converter-input.component.css']
})
export class ConverterInputComponent {
  @Input() options: string[] = [];
  @Input() value: number = 0;
  @Output() inputValue = new EventEmitter<number>();
  @Output() inputCode = new EventEmitter<string>();

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.inputValue.emit(parseFloat(input.value));
  }

  onSelectChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.inputCode.emit(select.value);
  }
}
