import {Component, Output, EventEmitter, Input} from 'angular2/core';


@Component({
  selector: 'number-picker',
  templateUrl: `src/themeEditor/number-picker.component.html`,
  styleUrls: ['src/themeEditor/picker-header.css']
})
export class NumberPickerComponent {
  @Output() focus: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<number> = new EventEmitter();
  @Output() save: EventEmitter<number> = new EventEmitter();
  @Output() update: EventEmitter<number> = new EventEmitter();

  @Input() title: string;
  @Input() min = 1;
  @Input() max = 100;
  @Input() step = 1;
  @Input() value = 0;

  constructor() {
  }

  onFocus() {
    this.focus.emit(null);
  }

  onUpdate() {
    this.update.emit(this.value);
  }

  onCancel() {
    //TODO send back original color
    this.cancel.emit(this.value);
  }

  onSave() {
    this.save.emit(this.value);
  }
}
