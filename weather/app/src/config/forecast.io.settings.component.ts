import {Component, Output, EventEmitter} from 'angular2/core';
import {WeatherService} from '../weather.service';
import {ForecastIO} from "../forecast.io.interface";


@Component({
  selector: 'forecast-io-settings',
  host: { '[class.picker]': 'true' },
  templateUrl: `src/config/forecast.io.settings.component.html`,
  styles: [':host{display: block;}']
})
export class ForecastIoSettingsComponent {
  @Output() focus: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor(private dao: WeatherService) {
  }

  onFocus() {
    this.focus.emit(null);
  }

  onCancel() {
    this.cancel.emit(null);
  }

  onSave() {
    this.save.emit(null);
  }
}
