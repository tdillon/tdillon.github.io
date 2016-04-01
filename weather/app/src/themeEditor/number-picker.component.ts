import {Component, Output, EventEmitter, Input} from 'angular2/core';


@Component({
  selector: 'number-picker',
  host: { '[class.picker]': 'true' },
  templateUrl: `src/themeEditor/number-picker.component.html`,
  styles: [':host{display: block;}']
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

  oldValue: number;

  onFocus() {
    this.oldValue = this.value;
    this.focus.emit(null);
  }

  onUpdate() {
    this.update.emit(this.value);
  }

  onCancel() {
    this.cancel.emit(this.oldValue);
  }

  onSave() {
    this.save.emit(this.value);
  }
}
