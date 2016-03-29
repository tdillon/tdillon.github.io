import {Component, Output, EventEmitter, Input} from 'angular2/core';
import {Color} from "../Color";


@Component({
  selector: 'color-picker',
  templateUrl: `src/themeEditor/color-picker.component.html`,
  styleUrls: ['src/themeEditor/picker-header.css']
})
export class ColorPickerComponent {
  @Output() focus: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<Color> = new EventEmitter();
  @Output() save: EventEmitter<Color> = new EventEmitter();
  @Output() update: EventEmitter<Color> = new EventEmitter();

  @Input() color = Color.white;
  @Input() disabled = false;
  @Input() title = 'Color';
  @Input() showalpha = true;

  constructor() {
  }

  onFocus() {
    this.focus.emit(null);
  }

  onUpdate() {
    this.update.emit(this.color);
  }

  onCancel() {
    //TODO send back original color
    this.cancel.emit(this.color);
  }

  onSave() {
    this.save.emit(this.color);
  }
}
