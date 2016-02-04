import {Component, Output, EventEmitter} from 'angular2/core';
import {WeatherService} from './weather.service';
import {ForecastIO} from "./forecast.io.interface";


@Component({
  selector: 'forecast-io',
  template: `
  <div class="panel panel-default">
    <div class="panel-heading" (click)="show= !show">
      <span [class.down]="!show" [class.up]="show"></span>
      Forecast IO info
    </div>
    <div class="panel-body" [class.hide]="!show">
      <form (ngSubmit)="refresh()" #form="ngForm">
        <div class="form-group">
          <label>API Key</label>
          <input type=text required [(ngModel)]=dao.apikey placeholder="API Key" class="form-control">
        </div>
        <div class="form-group">
          <label>Latitude</label>
          <input type=number step=any required [(ngModel)]=dao.latitude placeholder="Latitude" class="form-control">
        </div>
        <div class="form-group">
          <label>Longitude</label>
          <input type=number step=any required [(ngModel)]=dao.longitude placeholder="Longitude" class="form-control">
        </div>
        <div class="form-group">
          <input type=submit value=Refresh [disabled]="!form.form.valid" class="btn btn-default">
        </div>
      </form>
    </div>
  </div>
  `,
  styleUrls: ['src/arrows.css']
})
export class ForecastIoComponent {
  @Output() refreshed: EventEmitter<ForecastIO> = new EventEmitter();

  constructor(private dao: WeatherService) {
  }

  refresh() {
    this.dao.refresh().then(weather => {
      this.refreshed.emit(weather);
    });
  }
}
