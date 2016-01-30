import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ClocksComponent} from './clocks/clocks.component';
/*import {HeroListComponent}     from './heroes/hero-list.component';
import {HeroDetailComponent}   from './heroes/hero-detail.component';
import {DialogService}         from './dialog.service';
import {HeroService}           from './heroes/hero.service';*/


@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Component Router</h1>
    <nav>
      <a [routerLink]="['Clocks']">Clocks</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { // Crisis Center child route
    path: 'app/clocks/...',
    name: 'Clocks',
    component: ClocksComponent,
    useAsDefault: true
  }
])
export class AppComponent { }
