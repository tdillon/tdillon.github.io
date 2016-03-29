import {Component, Output, EventEmitter} from 'angular2/core'
import {ForecastIO} from '../forecast.io.interface'
import {ForecastIoComponent} from './forecast.io.component'



@Component({
  selector: 'config',
  templateUrl: 'src/config/config.component.html',
  directives: [ForecastIoComponent],
  styles: [':host{display: block;}']
})
export class ConfigComponent {
  @Output() close: EventEmitter<any> = new EventEmitter();
  timestamp:string;

  onClose() {
    this.close.emit(null);
  }


    newWeatherDataAvailable(weather: ForecastIO) {
      var dt = new Date(weather.currently.time * 1000);
      this.timestamp = dt.toLocaleString();
      //this.data = weather;
    }
}
