import {DefaultThemeSettingsComponent} from "./default-theme-settings.component";
import {WeatherPropertySettingsComponent} from "./weather-property-settings.component";
import {ColorPickerComponent} from "./color-picker.component";
import {Color} from "../Color";
import {Theme, ThemeType} from "../Theme.interface"
import {WidgetType} from '../WidgetType'
import {ConfigService} from "../config.service"
import {Component, Output, EventEmitter} from 'angular2/core'
import {ConfigOption} from '../Option.interface'
import {WeatherPropertyPickerComponent} from './weather-property-picker.component'
import {BooleanPickerComponent} from './boolean-picker.component'
import {TextPickerComponent} from './text-picker.component'
import {WidgetTypePickerComponent} from './widget-type-picker.component'



@Component({
  selector: 'theme-creator',
  host: {
    '[class.hide]': 'currentPicker !== Pickers.None',
    '[class.show]': 'currentPicker === Pickers.None'
  },
  templateUrl: 'src/themeEditor/theme-creator.component.html',
  styleUrls: ['src/themeEditor/theme-creator.component.css'],
  directives: [ColorPickerComponent,
    DefaultThemeSettingsComponent,
    WeatherPropertyPickerComponent,
    BooleanPickerComponent,
    WeatherPropertySettingsComponent,
    TextPickerComponent,
    WidgetTypePickerComponent
  ]
})
export class ThemeCreatorComponent {
  @Output() created: EventEmitter<Theme> = new EventEmitter();
  @Output() refreshed: EventEmitter<Theme> = new EventEmitter();
  @Output() canceled: EventEmitter<any> = new EventEmitter();
  theme: Theme;
  addingNew = false;
  WidgetType = WidgetType;
  availableOptions: Array<ConfigOption>;
  currentPicker: number;
  Pickers = { None: 0, ThemeName: 1, WidgetType: 2, Defaults: 3, PropertyPicker: 4, DaylightColor: 5 };

  constructor(private _config: ConfigService) {
    this.currentPicker = this.Pickers.None;
    this.availableOptions = this.allOptions;
    this.resetTheme();
    this.refresh();
  }

  updateDaylight(showDaylight: boolean) {
    if (showDaylight) {
      this.theme.daylight = Color.white;
    } else {
      delete this.theme.daylight;
    }
    this.refresh();
  }


  resetTheme() {
    if (this.theme) {
      this.theme.name = '';
      this.theme.themeType = ThemeType.Custom;
      this.theme.widgetType = WidgetType.Daily;
      this.theme.globals.dot.color = Color.white;
      this.theme.globals.dot.radius = 5;
      this.theme.globals.segment.show = true;
      this.theme.globals.segment.color = Color.white;
      this.theme.globals.segment.angle = 40;
      this.theme.globals.segment.padding = 4;

      while (this.theme.options.length) {
        this.availableOptions.push(this.theme.options.pop());
      }
    } else {
      this.theme = {
        name: '',
        themeType: ThemeType.Custom,
        widgetType: WidgetType.Daily,
        globals: {
          dot: {
            color: Color.white,
            radius: 5
          },
          segment: {
            show: true,
            color: Color.white,
            angle: 40,
            padding: 4
          }
        },
        options: []
      }
    }
  }

  get allOptions(): Array<ConfigOption> {
    let x = ['moon', 'humidity', 'visibility', 'dewPoint', 'apparentTemperatureMax', 'apparentTemperatureMin', 'temperatureMin', 'temperatureMax', 'windSpeed', 'ozone', 'pressure', 'apparentTemperature', 'temperature', 'precipProbability', 'precipAccumulation'];
    return x.map(o => this.getDefaultConfigOption(o));
  }


  getDefaultConfigOption(title: string): ConfigOption {
    return {
      title: title,
      dot: {
        color: { global: true, value: Color.white },
        radius: { global: true, value: 5 },
      },
      segment: {
        show: { global: true, value: true },
        color: { global: true, value: Color.white },
        angle: { global: true, value: 40 },
        padding: { global: true, value: 5 }
      }
    }
  }

  add(o: ConfigOption) {
    this.theme.options.push(o);
    this.availableOptions.splice(this.availableOptions.indexOf(o), 1);
    this.refresh();
  }

  remove(o: ConfigOption) {
    this.availableOptions.push(o);
    this.theme.options.splice(this.theme.options.indexOf(o), 1);
    this.refresh();
  }

  save() {
    //TODO validate this.theme
    this._config.save(this.theme);
    this.addingNew = false;
    this.created.emit(this.theme);
  }

  cancel() {
    this.addingNew = false;
    this.canceled.emit(null);
  }

  new() {
    this.theme = null;
    this.addingNew = true;
    this.resetTheme();
  }

  refresh() {
    this.refreshed.emit(this.theme);
  }
}





/*
//OLD weather-config.component
import {Component, Output, EventEmitter} from 'angular2/core';
import {ConfigService} from "./config.service";
import {ColorPickerComponent} from  './color-picker.component';


@Component({
  selector: 'weather-config',
  templateUrl: 'src/weather-config.component.html',
  styleUrls: ['src/arrows.css'],
  directives: [ColorPickerComponent]
})
export class WeatherConfigComponent {
  @Output() refreshed:EventEmitter<any> = new EventEmitter();

  constructor(private config:ConfigService) {
    //config.getGlobalThemes().subscribe(a => console.log(a));
  }

  refresh() {
    this.refreshed.emit(null);
  }
}
*/
