import {Theme} from "./Theme.interface";
import {Injectable} from "angular2/core"
import {Color} from "./Color"
import {Http} from 'angular2/http'
import {Observable} from 'rxjs/Observable'
import {Observer} from 'rxjs/Observer'
import 'rxjs/add/operator/map'


//TODO WIP persist to local storage!!!!


@Injectable()
export class ConfigService {
  private _observer: Observer<Theme>;

  constructor(private _http: Http) {
  }

  private deserializeColors(obj: Object) {
    if (typeof obj !== 'object') {
      return;
    }

    Object.keys(obj).forEach(key => {
      if (key === 'color' || key === 'daylight') {
        if (obj[key].hasOwnProperty('value')) {
          obj[key].value = Color.getColor(obj[key].value);
        } else {
          obj[key] = Color.getColor(obj[key]);
        }
      } else {
        this.deserializeColors(obj[key]);
      }
    });
  }

  get themes(): Observable<Theme> {
    //TODO cache themes?

    return new Observable((observer: Observer<Theme>) => {
      this._observer = observer;

      this._http.get('src/preset-themes.json').map(res => {
        var themes = <Theme[]>(res.json());
        for (let t of themes) {
          this.deserializeColors(t);
        }
        return themes;
      }).subscribe(ta => ta.forEach(t => this._observer.next(t)));

    });

    // return this._http.get('preset-themes.json').map(res => {
    //   var themes = <Theme[]>(res.json());
    //   for (let t of themes) {
    //     this.deserializeColors(t);
    //   }
    //   return themes;
    // });
  }

  save(theme: Theme) {
    //TODO add theme to 'custom' theme repo (localStorage or app engine, etc.).
    this._observer.next(theme);
  }

  /**
   * TODO-hack for now now just look at all options. how to determine if they are shown on hourly/daily?
   *
   * @returns {Number|number} The largest radius of the any dot that is shown.
   */
  get maxDotRadius() {
    //TODO fix to use new way
    let max = 10;

    // this.global.dot.radius.value *= 1;
    // let max = this.global.dot.radius.value;
    //
    // for (let o of this.options) {
    //   o.dot.radius.value *= 1;
    //   if ((o.show.global && this.global.show.value || (!o.show.global && o.show.value)) && !o.dot.radius.global && o.dot.radius.value > max) {
    //     max = o.dot.radius.value;
    //   }
    // }

    return max;
  }

}
