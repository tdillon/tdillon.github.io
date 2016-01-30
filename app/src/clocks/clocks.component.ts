import {Component}     from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';

import {SevenSegmentClockComponent} from './seven-segment.component'
import {PolarClockComponent} from './polar.component'

@Component({
    template: `
    <h2>CLOCKS</h2>
    <nav>
      <a [routerLink]="['SevenSegment']">SevenSegment</a>
      <a [routerLink]="['Polar']">Polar</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/seven', name: 'SevenSegment', component: SevenSegmentClockComponent, useAsDefault: true },
    { path: '/polar', name: 'Polar', component: PolarClockComponent }
])
export class ClocksComponent { }
