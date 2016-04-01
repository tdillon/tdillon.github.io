import {Component, Output, EventEmitter, Input} from 'angular2/core';
import {Color} from "../Color";


@Component({
  selector: 'color-picker',
  host: { '[class.picker]': 'true' },
  templateUrl: `src/themeEditor/color-picker.component.html`,
  styles: [':host{display: block;}']
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

  oldColor = Color.white;

  onFocus() {
    this.oldColor = this.color.copyOf();
    this.focus.emit(null);
  }

  onUpdate() {
    this.update.emit(this.color);
  }

  onCancel() {
    this.cancel.emit(this.oldColor);
  }

  onSave() {
    this.save.emit(this.color);
  }
}
