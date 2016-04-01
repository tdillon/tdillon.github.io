import {ForecastIoRefresherComponent} from "./forecast.io.refresher.component";
import {Component, Output, EventEmitter} from 'angular2/core'
import {ForecastIO} from '../forecast.io.interface'
import {ForecastIoSettingsComponent} from './forecast.io.settings.component'



@Component({
  selector: 'config',
  host: {
    '[class.hide]': 'currentPicker',
    '[class.show]': '!currentPicker',
    '[class.pickerGroup]': 'true'
  },
  templateUrl: 'src/config/config.component.html',
  directives: [ForecastIoSettingsComponent, ForecastIoRefresherComponent],
  styles: [':host{display: block;}']
})
export class ConfigComponent {
  @Output() close: EventEmitter<any> = new EventEmitter();
  timestamp: string;
  currentPicker: any;

  constructor() {
    this.currentPicker = null;
  }

  onClose() {
    this.close.emit(null);
  }


  newWeatherDataAvailable(weather: ForecastIO) {
    var dt = new Date(weather.currently.time * 1000);
    this.timestamp = dt.toLocaleString();
    //this.data = weather;
  }
}
