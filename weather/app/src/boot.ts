import 'zone.js/dist/zone.min.js'
import 'reflect-metadata'


import {bootstrap} from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http'
import {AppComponent} from './app.component'

bootstrap(AppComponent, [HTTP_PROVIDERS]);
