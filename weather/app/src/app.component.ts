import {Component, AfterViewInit} from 'angular2/core';
import {WeatherService} from './weather.service';
import {ForecastIoComponent} from './forecast.io.component';
import {Graph} from './Graph';
import {ForecastIO} from "./forecast.io.interface";
import {WeatherConfigComponent} from "./weather-config.component";
import {ConfigService} from "./config.service";


@Component({
  selector: 'weather-widget-number-one-prototype',
  template: `
    <canvas (click)="showMenu = !showMenu"></canvas>
    <header [class.hideMenu]="!showMenu">
      Weather Data Last Retrieved: {{timestamp}}
      <weather-config (refreshed)="draw()"></weather-config>
      <forecast-io (refreshed)="newWeatherDataAvailable($event)"></forecast-io>
    </header>
  `,
  styleUrls: ['src/app.component.css'],
  providers: [WeatherService, Graph, ConfigService],
  directives: [ForecastIoComponent, WeatherConfigComponent]
})
export class AppComponent implements AfterViewInit {
  timestamp = '';
  showMenu = false;

  constructor(private _weatherService: WeatherService, public graph: Graph, public config: ConfigService) {
  }

  ngAfterViewInit() {
    this.graph.init();
    this.getWeather();
  }

  newWeatherDataAvailable(weather: ForecastIO) {
    this.graph.data = weather;
    this.draw();
  }

  getWeather() {
    this._weatherService.getWeather().then((weather: ForecastIO) => {
      var dt = new Date(weather.currently.time * 1000);
       this.timestamp = dt.toLocaleString();
      this.graph.data = weather;
      this.draw();
    }, () => console.log('Data is not set, configure forecast io info!!!'));
  }

  draw() {
    //TODO don't draw before data is returned.
    this.graph.render();
  }
}
