import {Component, Output, EventEmitter, Input} from 'angular2/core';


@Component({
  selector: 'text-picker',
  templateUrl: `src/themeEditor/text-picker.component.html`,
  styleUrls: ['src/themeEditor/picker-header.css']
})
export class TextPickerComponent {
  @Output() focus: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<string> = new EventEmitter();
  @Output() save: EventEmitter<string> = new EventEmitter();
  @Output() update: EventEmitter<string> = new EventEmitter();

  @Input() title: string;
  @Input() value = '';

  constructor() {
  }

  onFocus() {
    this.focus.emit(null);
  }

  onUpdate() {
    this.update.emit(this.value);
  }

  onCancel() {
    //TODO send back original value
    this.cancel.emit(this.value);
  }

  onSave() {
    this.save.emit(this.value);
  }
}
