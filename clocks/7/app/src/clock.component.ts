import {Component} from '@angular/core'
import {DigitComponent} from './digit.component'
import {TimeService} from './time.service'
import {Digit} from 'seven-segment'

@Component({
  selector: 'clock',
  template: `
    <digit [value]=ht></digit>
    <digit [value]=ho></digit>
    :
    <digit [value]=mt></digit>
    <digit [value]=mo></digit>
    :
    <digit [value]=st></digit>
    <digit [value]=so></digit>
    .
  `,
  directives: [DigitComponent],
  providers: [TimeService]
})
export class ClockComponent {
  so: Digit = Digit.BLANK;
  st: Digit = Digit.BLANK;
  mt: Digit = Digit.BLANK;
  mo: Digit = Digit.BLANK;
  ht: Digit = Digit.BLANK;
  ho: Digit = Digit.BLANK;

  constructor(private _timeService: TimeService) {
    _timeService.secondChanged.subscribe((s: number) => {
      this.so = s % 10;
      this.st = Math.floor(s / 10);
    });
    _timeService.minuteChanged.subscribe((m: number) => {
      this.mo = m % 10;
      this.mt = Math.floor(m / 10);
    });
    _timeService.hourChanged.subscribe((h: number) => {
      this.ho = h % 10;
      this.ht = Math.floor(h / 10);
    });
  }
}
