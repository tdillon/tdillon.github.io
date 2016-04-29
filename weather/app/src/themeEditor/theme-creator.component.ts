import {Color} from "../Color";
import {Theme, ThemeType} from "../Theme.interface"
import {WidgetType} from '../WidgetType'
import {ConfigService} from "../config.service"
import {Component, Output, Input, EventEmitter} from 'angular2/core'
import {ConfigOption} from '../Option.interface'
import {TextPickerComponent} from './text-picker.component'
import {WidgetTypePickerComponent} from './widget-type-picker.component'
import {BooleanPickerComponent} from './boolean-picker.component'
import {ColorPickerComponent} from "./color-picker.component";
import {WeatherPropertyPickerComponent} from './weather-property-picker.component'
import {DefaultThemeSettingsComponent} from "./default-theme-settings.component";
import {WeatherPropertySettingsComponent} from "./weather-property-settings.component";

export enum ThemeCreatorMode { New, Edit, Copy }

@Component({
  selector: 'theme-creator',
  host: {
    '[class.hide]': 'currentPicker',
    '[class.show]': '!currentPicker',
    '[class.pickerGroup]': 'true'
  },
  templateUrl: 'src/themeEditor/theme-creator.component.html',
  styles: [':host { display: block; }'],
  directives: [
    ColorPickerComponent,
    BooleanPickerComponent,
    TextPickerComponent,
    WidgetTypePickerComponent,
    WeatherPropertyPickerComponent,
    DefaultThemeSettingsComponent,
    WeatherPropertySettingsComponent,
  ]
})
export class ThemeCreatorComponent {
  @Output('save') save11 = new EventEmitter<Theme>();
  @Output('update') update11 = new EventEmitter<Theme>();
  @Output('cancel') cancel11 = new EventEmitter<any>();

  @Input() mode: ThemeCreatorMode;
  // @Input() inputTheme: Theme;
  @Input() set inputTheme(t:Theme) {
    console.log('set theme in theme-creator.component', t);
  }

  theme: Theme;
  WidgetType = WidgetType;
  availableOptions: Array<ConfigOption>;
  currentPicker: any;
  ThemeCreatorMode = ThemeCreatorMode;

  constructor(private _config: ConfigService) {
    this.currentPicker = null;
    this.availableOptions = this.allOptions;
    this.resetTheme();
    this.onUpdate();
  }

  updateDaylight(showDaylight: boolean) {
    if (showDaylight) {
      this.theme.daylight = Color.white;
    } else {
      delete this.theme.daylight;
    }
    this.onUpdate();
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
    this.onUpdate();
  }

  remove(o: ConfigOption) {
    this.availableOptions.push(o);
    this.theme.options.splice(this.theme.options.indexOf(o), 1);
    this.onUpdate();
  }

  onSave() {
    //TODO validate this.theme
    this._config.save(this.theme);
    this.save11.emit(this.theme);
  }

  onCancel() {
    this.cancel11.emit(null);
  }

  new() {
    this.theme = null;
    this.resetTheme();
  }

  onUpdate() {
    this.update11.emit(this.theme);
  }
}
