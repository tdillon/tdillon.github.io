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

      <nav [hidden]="tab !== 1" class="navbar navbar-light bg-faded">
        Themes
        <input type=button class="btn btn-default" value="New Theme" (click)="createTheme()">
      </nav>

      <theme-picker [hidden]="tab !== 1" (themePicked)="currentTheme = $event"></theme-picker>
      <theme-creator [hidden]="tab !== 2" (refreshed)="currentTheme = $event" (created)="themeCreated($event)" (canceled)="cancelThemeCreation()"></theme-creator>
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
  currentThemeBeforeCreatingTheme: Theme;//TODO name, essentially a holder for the selected theme prior to creating a theme, set back to this theme on cancel
  data: ForecastIO;
  tab = 1;//keeps track of state of app, rename and maybe use an enum

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

  createTheme() {
    this.tab = 2;
    this.currentThemeBeforeCreatingTheme = this.currentTheme;
  }

  cancelThemeCreation() {
    this.currentTheme = this.currentThemeBeforeCreatingTheme;
    this.tab = 1;
  }

  themeCreated(theme :Theme){
    this.currentTheme = theme;
    this.tab = 1;
  }

  draw() {
    //TODO trigger update in WidgetDisplayComponent
  }
}
