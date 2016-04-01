import {Component, Output, EventEmitter, Input} from 'angular2/core';


@Component({
  selector: 'text-picker',
  host: { '[class.picker]': 'true' },
  templateUrl: `src/themeEditor/text-picker.component.html`,
  styles: [':host{display: block;}']
})
export class TextPickerComponent {
  @Output() focus: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<string> = new EventEmitter();
  @Output() save: EventEmitter<string> = new EventEmitter();

  @Input() title: string;
  @Input() value = '';
  oldValue: string;

  onFocus() {
    this.oldValue = this.value;
    this.focus.emit(null);
  }

  onCancel() {
    this.cancel.emit(this.oldValue);
  }

  onSave() {
    this.save.emit(this.value);
  }
}
