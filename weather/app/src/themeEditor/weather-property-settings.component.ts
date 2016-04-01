import {BooleanPickerComponent} from "./boolean-picker.component";
import {NumberPickerComponent} from "./number-picker.component";
import {ColorPickerComponent} from "./color-picker.component";
import {Theme} from "../Theme.interface";
import {ConfigService} from "../config.service";
import {ConfigOption, GlobalOptions} from '../Option.interface';
import {Component, Output, Input, EventEmitter} from 'angular2/core';


@Component({
  selector: 'weather-property-settings',
  host: { '[class.hide]': 'currentPicker', '[class.pickerGroup]': 'true' },
  templateUrl: `src/themeEditor/weather-property-settings.component.html`,
  styles: [':host{display: block;}'],
  directives: [ColorPickerComponent, NumberPickerComponent, BooleanPickerComponent]
})
export class WeatherPropertySettingsComponent {

  @Output() focus: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter();

  @Input() default: GlobalOptions;
  @Input() property: ConfigOption;
  @Input() title = '';

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
