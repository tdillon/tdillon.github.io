import {Color} from "../Color";
import {BooleanPickerComponent} from "./boolean-picker.component";
import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {ConfigOption} from '../Option.interface'


@Component({
  selector: 'weather-property-picker',
  templateUrl: `src/themeEditor/weather-property-picker.component.html`,
  styleUrls: ['src/themeEditor/picker-header.css'],
  directives: [BooleanPickerComponent]
})
export class WeatherPropertyPickerComponent {
  private _passedInProps: Array<ConfigOption>;
  @Output() focus: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter();

  _properties = [
    { picked: false, summary: 'TODO explain', displayTitle: 'Dew Point', title: 'dewPoint' },
    { picked: false, summary: 'TODO explain', displayTitle: 'Humidity', title: 'humidity' },
    { picked: false, summary: 'TODO explain', displayTitle: 'Moon', title: 'moon' },
    { picked: false, summary: 'TODO explain', displayTitle: 'Ozone', title: 'ozone' },
    { picked: false, summary: 'TODO explain', displayTitle: 'Precip Prob', title: 'precipProbability' },
    { picked: false, summary: 'TODO explain', displayTitle: 'Precip Accum', title: 'precipAccumulation' },
    { picked: false, summary: 'TODO explain', displayTitle: 'Pressure', title: 'pressure' },
    { picked: false, summary: 'TODO explain', displayTitle: 'Temp Feel', title: 'apparentTemperature' },
    { picked: false, summary: 'TODO explain', displayTitle: 'Temp Real', title: 'temperature' },
    { picked: false, summary: 'TODO explain', displayTitle: 'Temp Max Feel', title: 'apparentTemperatureMax' },
    { picked: false, summary: 'TODO explain', displayTitle: 'Temp Max Real', title: 'temperatureMax' },
    { picked: false, summary: 'TODO explain', displayTitle: 'Temp Min Feel', title: 'apparentTemperatureMin' },
    { picked: false, summary: 'TODO explain', displayTitle: 'Temp Min Real', title: 'temperatureMin' },
    { picked: false, summary: 'TODO explain', displayTitle: 'Visibility', title: 'visibility' },
    { picked: false, summary: 'TODO explain', displayTitle: 'Wind Speed', title: 'windSpeed' }];

  constructor() {
  }

  @Input() set properties(props: Array<ConfigOption>) {
    this._passedInProps = props;
    props.forEach(p => this._properties.find(p2 => p.title === p2.title).picked = true);
  }

  onFocus(){
    this.focus.emit(null)
  }

  onUpdate(opt: any, show: boolean) {
    if (show) {
      this._passedInProps.push(this.getDefaultConfigOption(opt.title));
    } else {
      this._passedInProps.splice(this._passedInProps.findIndex(p=> p.title === opt.title), 1);
    }
    this.update.emit(null);
  }

  onCancel() {
    this.cancel.emit(null);
  }

  onSave(){
    this.save.emit(null);
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
}
