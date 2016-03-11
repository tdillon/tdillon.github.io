import {Component, Output, EventEmitter, Input} from 'angular2/core';


@Component({
  selector: 'boolean-picker',
  templateUrl: `src/boolean-picker.component.html`
})
export class BooleanPickerComponent {
  @Output() updated: EventEmitter<boolean> = new EventEmitter();

  @Input() title: string;
  @Input() subtitle: string;
  @Input() value = false;


  constructor() {
  }

  refresh() {
    this.updated.emit(this.value);
  }
}
