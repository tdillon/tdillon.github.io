import {Component} from 'angular2/core'
import {ClockComponent} from './clock.component'

@Component({
  selector: 'seven-segment-clock',
  template: `
    <clock></clock>
  `,
  directives: [ClockComponent]
})
export class AppComponent { }
