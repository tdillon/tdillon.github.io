import {ThemeCreatorComponent} from "./themeEditor/theme-creator.component";
import {Theme} from "./Theme.interface";
import {ThemePickerComponent} from "./themeList/theme-picker.component";
import {Component, AfterViewInit} from 'angular2/core';
import {WeatherService} from './weather.service';
import {WidgetDisplayComponent} from './widget-display.component';
import {ForecastIO} from "./forecast.io.interface";
import {ConfigService} from "./config.service";
import {ConfigComponent} from './config/config.component'


@Component({
  selector: 'weather-widget-number-one-prototype',
  templateUrl: `src/app.component.html`,
  styleUrls: ['src/app.component.css'],
  providers: [WeatherService, ConfigService],
  directives: [ThemePickerComponent, ThemeCreatorComponent, WidgetDisplayComponent, ConfigComponent]
})
export class AppComponent implements AfterViewInit {
  timestamp = '';
  showMenu = false;
  currentTheme: Theme;
  currentThemeBeforeCreatingTheme: Theme;//TODO name, essentially a holder for the selected theme prior to creating a theme, set back to this theme on cancel
  data: ForecastIO;
  currentPage: number;
  Pages = { Themes: 1, Editor: 2, Config: 3 };

  constructor(private _weatherService: WeatherService, public config: ConfigService) {
    this.currentPage = this.Pages.Themes;
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

  // createTheme() {
  //   this.tab = 2;
  //   this.currentThemeBeforeCreatingTheme = this.currentTheme;
  // }

  cancelThemeCreation() {
    this.currentTheme = this.currentThemeBeforeCreatingTheme;
    this.currentPage = this.Pages.Themes;
  }

  themeSave(theme: Theme) {
    this.currentTheme = theme;
    this.currentPage = this.Pages.Themes;
  }

  draw() {
    //TODO trigger update in WidgetDisplayComponent
  }
}
