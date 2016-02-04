import {Injectable} from "angular2/core";
import {Color} from "./Color";

export interface ConfigOption {
  title: string,
  type?: string,
  show: {
    global?: boolean,
    value: boolean
  },
  dot: {
    color: {
      global?: boolean,
      value: Color
    },
    radius: {
      global?: boolean,
      value: number
    }
  },
  segment: {
    show: {
      global?: boolean,
      value: boolean,
    }
    color: {
      global?: boolean,
      value: Color
    },
    angle: {
      global?: boolean,
      value: number
    },
    padding: {
      global?: boolean,
      value: number
    }
  }
}


@Injectable()
export class ConfigService {
  public options: Array<ConfigOption> = [];
  _global: ConfigOption;

  private _optNames = ['moon', 'humidity', 'visibility', 'dewPoint', 'apparentTemperatureMax', 'apparentTemperatureMin', 'temperatureMin', 'temperatureMax', 'windSpeed', 'ozone', 'pressure', 'apparentTemperature', 'temperature', 'precipProbability', 'precipAccumulation'];

  public daylight = { color: new Color(0, 168, 255), show: true };

  constructor() {
    this._global = {
      title: 'Global',
      show: { value: false },
      type: 'h',
      dot: {
        color: { value: Color.white },
        radius: { value: 5 }
      },
      segment: {
        show: { value: true },
        color: { value: Color.whiteFifty },
        angle: { value: 40 },
        padding: { value: 6 }
      }
    };

    for (let o of this._optNames) {
      this.options.push(this[o] = {
        title: o,
        show: {
          global: true,
          value: true
        },
        dot: {
          color: {
            global: true,
            value: Color.white
          },
          radius: {
            global: true,
            value: 3
          }
        },
        segment: {
          show: {
            global: true,
            value: true
          },
          color: {
            global: true,
            value: Color.white
          },
          angle: {
            global: true,
            value: 5
          },
          padding: {
            global: true,
            value: 5
          }
        }
      });
    }
  }

  item(name: string): ConfigOption {
    return this[name];
  }

  get global() {
    return this._global;
  }

  /**
   * TODO-hack for now now just look at all options. how to determine if they are shown on hourly/daily?
   *
   * @returns {Number|number} The largest radius of the any dot that is shown.
   */
  get maxDotRadius() {
    this.global.dot.radius.value *= 1;
    let max = this.global.dot.radius.value;

    for (let o of this.options) {
      o.dot.radius.value *= 1;
      if ((o.show.global && this.global.show.value || (!o.show.global && o.show.value)) && !o.dot.radius.global && o.dot.radius.value > max) {
        max = o.dot.radius.value;
      }
    }

    return max;
  }

}
