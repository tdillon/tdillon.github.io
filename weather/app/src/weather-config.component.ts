import {Component, Output, EventEmitter} from 'angular2/core';
import {Graph} from "./Graph";
import {ConfigService} from "./config.service";
import {ColorComponent} from  './color.component';


@Component({
  selector: 'weather-config',
  templateUrl: 'src/weather-config.component.html',
  styleUrls: ['src/arrows.css'],
  directives: [ColorComponent]
})
export class WeatherConfigComponent {
  @Output() refreshed:EventEmitter<any> = new EventEmitter();

  constructor(private graph:Graph, private config:ConfigService) {
  }

  refresh() {
    this.refreshed.emit(null);
  }
}
