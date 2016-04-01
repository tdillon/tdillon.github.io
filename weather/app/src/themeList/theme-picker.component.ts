import {Theme} from "../Theme.interface";
import {ConfigService} from "../config.service";
import {Component, Output, EventEmitter} from 'angular2/core';
import {WidgetType} from '../WidgetType'


@Component({
  selector: 'theme-picker',
  host: {
    '[class.show]': 'true',
    '[class.pickerGroup]': 'true'
  },
  templateUrl: `src/themeList/theme-picker.component.html`,
  styles: [':host{display: block;}']
})
export class ThemePickerComponent {
  @Output() themePicked: EventEmitter<Theme> = new EventEmitter();
  @Output() showConfig: EventEmitter<any> = new EventEmitter();
  @Output() createTheme: EventEmitter<any> = new EventEmitter();
  themes: Array<Theme> = [];
  current: Theme;
  WidgetType = WidgetType;

  constructor(_config: ConfigService) {
    _config.themes.subscribe(t => {
      this.themes.push(t);
      if (this.themes.length == 1) {
        this.onSelect(this.themes[0]);
      }
    });
  }

  onCreateTheme() {
    this.createTheme.emit(null);
  }

  onSelect(theme: Theme) {
    this.current = theme;
    this.themePicked.emit(theme);
  }

  onShowConfig() {
    this.showConfig.emit(null);
  }
}
