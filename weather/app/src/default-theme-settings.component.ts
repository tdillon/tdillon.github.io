import {NumberPickerComponent} from "./number-picker.component";
import {ColorComponent} from "./color.component";
import {Theme} from "./Theme.interface";
import {ConfigService} from "./config.service";
import {GlobalOptions} from './Option.interface';
import {Component, Output, Input, EventEmitter} from 'angular2/core';


@Component({
  selector: 'default-theme-settings',
  templateUrl: `src/default-theme-settings.component.html`,
  directives: [ColorComponent, NumberPickerComponent]
})
export class DefaultThemeSettingsComponent {
  @Input() default: GlobalOptions;
  @Output() refreshed: EventEmitter<any> = new EventEmitter();

  constructor() {
  }


  refresh() {
    this.refreshed.emit(null);
  }

}
