import {Injectable, Output, EventEmitter} from 'angular2/core';

@Injectable()
export class TimeService {
  @Output() secondChanged = new EventEmitter<number>();
  @Output() minuteChanged = new EventEmitter<number>();
  @Output() hourChanged = new EventEmitter<number>();
  handle: number;
  currentSecond = -1;
  currentMinute = -1;
  currentHour = -1;

  constructor() {
    let self = this;
    let tick = () => {
      let now = new Date();
      if (self.currentSecond !== now.getSeconds()) {
        self.currentSecond = now.getSeconds();
        this.secondChanged.emit(self.currentSecond);
      }
      if (self.currentMinute !== now.getMinutes()) {
        self.currentMinute = now.getMinutes();
        this.minuteChanged.emit(self.currentMinute);
      }
      if (self.currentHour !== now.getHours()) {
        self.currentHour = now.getHours();
        this.hourChanged.emit(self.currentHour);
      }
      self.handle = window.setTimeout(tick, 1000 - Date.now() % 1000);
    }
    this.handle = window.setTimeout(tick, 1000 - Date.now() % 1000); //TODO callback on 000 ms
  }
}
