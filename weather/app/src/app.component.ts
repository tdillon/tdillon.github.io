import {ThemeCreatorComponent} from "./theme-creator.component";
import {Theme} from "./Theme.interface";
import {ThemePickerComponent} from "./theme-picker.component";
import {Component, AfterViewInit} from 'angular2/core';
import {WeatherService} from './weather.service';
import {ForecastIoComponent} from './forecast.io.component';
import {WidgetDisplayComponent} from './widget-display.component';
import {ForecastIO} from "./forecast.io.interface";
import {ConfigService} from "./config.service";


@Component({
  selector: 'weather-widget-number-one-prototype',
  template: `
    <widget-display [theme]="currentTheme" [data]="data" (click)="showMenu = !showMenu"></widget-display>
    <header [class.hideMenu]="!showMenu">

      <div class="btn-group">
        <button type="button" class="btn btn-default" [class.active]="tab === 1" (click)="tab = 1">Themes</button>
        <button type="button" class="btn btn-default" [class.active]="tab === 2" (click)="tab = 2">Theme Editor</button>
        <button type="button" class="btn btn-default" [class.active]="tab === 3" (click)="tab = 3">Configuration</button>
      </div>

      <theme-picker [hidden]="tab !== 1" (themePicked)="currentTheme = $event"></theme-picker>
      <theme-creator [hidden]="tab !== 2" (refreshed)="currentTheme = $event"></theme-creator>
      <div [hidden]="tab !== 3">
        Weather Data Last Retrieved: {{timestamp}}
        <forecast-io (refreshed)="newWeatherDataAvailable($event)"></forecast-io>
      </div>
    </header>
  `,
  styleUrls: ['src/app.component.css'],
  providers: [WeatherService, ConfigService],
  directives: [ForecastIoComponent, ThemePickerComponent, ThemeCreatorComponent, WidgetDisplayComponent]
})
export class AppComponent implements AfterViewInit {
  timestamp = '';
  showMenu = false;
  currentTheme: Theme;
  data: ForecastIO;

  constructor(private _weatherService: WeatherService, public config: ConfigService) {
  }

  ngAfterViewInit() {
    this.getWeather();
  }

  newWeatherDataAvailable(weather: ForecastIO) {
    var dt = new Date(weather.currently.time * 1000);
    this.timestamp = dt.toLocaleString();
    this.data = weather;
    this.draw();
  }

  getWeather() {
    this._weatherService.getWeather().then((weather: ForecastIO) => {
      var dt = new Date(weather.currently.time * 1000);
      this.timestamp = dt.toLocaleString();
      this.data = weather;
      this.draw();
    }, () => console.log('Data is not set, configure forecast io info!!!'));
  }

  draw() {
    //TODO trigger update in WidgetDisplayComponent
  }
}
