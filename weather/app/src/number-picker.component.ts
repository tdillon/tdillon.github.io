import {Component, Output, EventEmitter, Input} from 'angular2/core';


@Component({
  selector: 'number-picker',
  templateUrl: `src/number-picker.component.html`
})
export class NumberPickerComponent {
  @Output() updated: EventEmitter<number> = new EventEmitter();

  @Input() title: string;
  @Input() min = 1;
  @Input() max = 100;
  @Input() step = 1;
  @Input() value = 0;

  constructor() {
  }

  refresh() {
    this.updated.emit(this.value);
  }
}
