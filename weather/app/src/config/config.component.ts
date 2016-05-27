import {ForecastIoRefresherComponent} from "./forecast.io.refresher.component";
import {Component, Output, EventEmitter} from '@angular/core'
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
  @Output('close') close4 = new EventEmitter<any>();
  @Output('refresh') refresh4 = new EventEmitter<ForecastIO>();

  currentPicker: any;

  constructor() {
    this.currentPicker = null;
  }

  onClose() {
    this.close4.emit(null);
  }

  onRefresh(weather: ForecastIO) {
    this.refresh4.emit(weather);
  }
}
