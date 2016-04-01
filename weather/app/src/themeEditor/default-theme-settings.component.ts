import {BooleanPickerComponent} from "./boolean-picker.component";
import {NumberPickerComponent} from "./number-picker.component";
import {ColorPickerComponent} from "./color-picker.component";
import {Theme} from "../Theme.interface";
import {ConfigService} from "../config.service";
import {GlobalOptions} from '../Option.interface';
import {Component, Output, Input, EventEmitter} from 'angular2/core';


@Component({
  selector: 'default-theme-settings',
  host: { '[class.hide]': 'currentPicker', '[class.pickerGroup]': 'true' },
  templateUrl: `src/themeEditor/default-theme-settings.component.html`,
  styles: [':host{display: block;}'],
  directives: [ColorPickerComponent, NumberPickerComponent, BooleanPickerComponent]
})
export class DefaultThemeSettingsComponent {
  @Output() focus: EventEmitter<string> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter();

  @Input() default: GlobalOptions;

  currentPicker: any;

  constructor() {
    this.currentPicker = null;
  }

  onFocus(picker: any) {
    this.currentPicker = picker;
    this.focus.emit(null);
  }

  onUpdate() {
    this.update.emit(null);
  }

  onCancel() {
    this.currentPicker = null;
  }

  onCancelMe() {
    this.cancel.emit(null);
  }

  onSave() {
    this.currentPicker = null;
  }

  onSaveMe() {
    this.save.emit(null);
  }
}
