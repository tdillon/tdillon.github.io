import {Component, Output, EventEmitter} from 'angular2/core';
import {WeatherService} from '../weather.service';
import {ForecastIO} from "../forecast.io.interface";


@Component({
  selector: 'forecast-io-refresher',
  host: { '[class.picker]': 'true' },
  templateUrl: `src/config/forecast.io.refresher.component.html`,
  styles: [':host{display: block;}']
})
export class ForecastIoRefresherComponent {
  @Output('refresh') refresh5 = new EventEmitter<ForecastIO>();

  timestamp: string;
  refreshing = false;

  constructor(private dao: WeatherService) {
    dao.getWeather().then(weather => {
      var dt = new Date(weather.currently.time * 1000);
      this.timestamp = dt.toLocaleString();
    });
  }

  onRefresh() {
    if (this.refreshing) {
      return;
    }
    this.refreshing = true;

    this.dao.refresh().then(weather => {
      this.refreshing = false;
      var dt = new Date(weather.currently.time * 1000);
      this.timestamp = dt.toLocaleString();
      this.refresh5.emit(weather);
    });
  }
}
