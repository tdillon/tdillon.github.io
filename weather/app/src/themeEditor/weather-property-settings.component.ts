import {BooleanPickerComponent} from "./boolean-picker.component";
import {NumberPickerComponent} from "./number-picker.component";
import {ColorPickerComponent} from "./color-picker.component";
import {Theme} from "../Theme.interface";
import {ConfigService} from "../config.service";
import {ConfigOption,GlobalOptions} from '../Option.interface';
import {Component, Output, Input, EventEmitter} from 'angular2/core';


@Component({
  selector: 'weather-property-settings',
  templateUrl: `src/themeEditor/weather-property-settings.component.html`,
  styleUrls: ['src/themeEditor/picker-header.css'],
  directives: [ColorPickerComponent, NumberPickerComponent, BooleanPickerComponent]
})
export class WeatherPropertySettingsComponent {
  @Input() default: GlobalOptions;
  @Input() property: ConfigOption;
  @Output() refreshed: EventEmitter<any> = new EventEmitter();

  constructor() {
  }


  refresh() {
    this.refreshed.emit(null);
  }

}
