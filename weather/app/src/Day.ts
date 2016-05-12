import {DataPoint} from "./forecast.io.interface";
import {Ranges} from "./Ranges";


export class Day {
  /** Beginning of day in unix epoch seconds. */
  bod: number;
  /** End of day in unix epoch seconds. */
  eod: number;
  /** Sunrise in unix epoch seconds. */
  sunrise: number;
  /** Sunset in unix epoch seconds. */
  sunset: number;

/**
 * http://radar.weather.gov/Legend/N0R/DMX_N0R_Legend_0.gif
 * https://en.wikipedia.org/wiki/DBZ_(meteorology)
 */
  private _dbzs = [
    { intensity: 69.9, color: 'rgb(253, 253, 253)' },
    { intensity: 34, color: 'rgb(152, 84, 198)' },
    { intensity: 16.6, color: 'rgb(248, 0, 253)' },
    { intensity: 8, color: 'rgb(188, 0, 0)' },
    { intensity: 4, color: 'rgb(212, 0, 0)' },
    { intensity: 1.9, color: 'rgb(253, 0, 0)' },
    { intensity: .92, color: 'rgb(253, 149, 0)' },
    { intensity: .45, color: 'rgb(229, 188, 0)' },
    { intensity: .22, color: 'rgb(253, 248, 2)' },
    { intensity: .1, color: 'rgb(0, 142, 0)' },
    { intensity: .05, color: 'rgb(1, 197, 1)' },
    { intensity: .02, color: 'rgb(2, 253, 2)' },
    { intensity: .01, color: 'rgb(3, 0, 244)' },
    { intensity: .006, color: 'rgb(1, 159, 244)' },
    { intensity: .003, color: 'rgb(4, 233, 231)' },
    { intensity: 0, color: 'rgb(4, 233, 231)' }  //TODO I don't know what to do for this color/intensity.
  ];

  constructor(public data: DataPoint,
    public ranges: Ranges,
    public xLeft: number,
    public xRight: number,
    public yTop: number,
    public yBottom: number) {
    this.bod = this.data.time;
    this.eod = this.data.time + Day.SECONDS_PER_DAY;
    this.sunrise = this.data.sunriseTime;
    this.sunset = this.data.sunsetTime;
  }

  static get SECONDS_PER_DAY() {
    return 86400;
  }

  get precipitation() {
    return {
      x: this.xLeft + (this.data.precipIntensityMaxTime - this.bod) * this.unitsPerSecond,
      y: this.yTop + (1 - this.data.precipProbability) * this.dayHeight
    };
  }

  get precipIntensityMaxColor(): string {
    return this._dbzs.find(i => i.intensity < this.data.precipIntensityMax).color;
  }

  get precipIntensityColor(): string {
    return this._dbzs.find(i => i.intensity < this.data.precipIntensity).color;
  }

  get apparentTemperatureMax() {
    return {
      x: this.xLeft + (this.data.apparentTemperatureMaxTime - this.bod) * this.unitsPerSecond,
      y: this.yTop + (this.ranges.temperature.max - this.data.apparentTemperatureMax) * this.unitsPerDegree
    };
  }

  get apparentTemperatureMin() {
    return {
      x: this.xLeft + (this.data.apparentTemperatureMinTime - this.bod) * this.unitsPerSecond,
      y: this.yTop + (this.ranges.temperature.max - this.data.apparentTemperatureMin) * this.unitsPerDegree
    };
  }

  get temperatureMax() {
    return {
      x: this.xLeft + (this.data.temperatureMaxTime - this.bod) * this.unitsPerSecond,
      y: this.yTop + (this.ranges.temperature.max - this.data.temperatureMax) * this.unitsPerDegree
    };
  }

  get temperatureMin() {
    return {
      x: this.xLeft + (this.data.temperatureMinTime - this.bod) * this.unitsPerSecond,
      y: this.yTop + (this.ranges.temperature.max - this.data.temperatureMin) * this.unitsPerDegree
    };
  }

  get moon() {
    return {
      x: this.xLeft + (this.xRight - this.xLeft) / 2,
      y: this.yTop + Math.abs(.5 - this.data.moonPhase) * this.dayHeight * 2
    };
  }

  get humidity() {
    return {
      x: this.xLeft + (this.xRight - this.xLeft) / 2,
      y: this.yTop + (1 - this.data.humidity) * this.dayHeight
    };
  }

  get visibility() {
    return {
      x: this.xLeft + (this.xRight - this.xLeft) / 2,
      y: this.yTop + (10 - this.data.visibility) * this.dayHeight * .1
    };
  }

  get dewPoint() {
    return {
      x: this.xLeft + (this.xRight - this.xLeft) / 2,
      y: this.yTop + (this.ranges.temperature.max - this.data.dewPoint) * this.unitsPerDegree
    };
  }

  get windSpeed() {
    return {
      x: this.xLeft + (this.xRight - this.xLeft) / 2,
      y: this.yTop + (this.ranges.windSpeed.max - this.data.windSpeed) * (this.dayHeight / this.ranges.windSpeed.max)
    };
  }

  get ozone() {
    return {
      x: this.xLeft + (this.xRight - this.xLeft) / 2,
      y: this.yTop + (this.ranges.ozone.max - this.data.ozone) * (this.dayHeight / (this.ranges.ozone.max - this.ranges.ozone.min))
    };
  }

  get pressure() {
    return {
      x: this.xLeft + (this.xRight - this.xLeft) / 2,
      y: this.yTop + (this.ranges.pressure.max - this.data.pressure) * (this.dayHeight / (this.ranges.pressure.max - this.ranges.pressure.min))
    };
  }

  get apparentTemperature() {
    return {
      x: this.xLeft + (this.xRight - this.xLeft) / 2,
      y: this.yTop + (this.ranges.temperature.max - this.data.apparentTemperature) * this.unitsPerDegree
    };
  }

  get temperature() {
    return {
      x: this.xLeft + (this.xRight - this.xLeft) / 2,
      y: this.yTop + (this.ranges.temperature.max - this.data.temperature) * this.unitsPerDegree
    };
  }

  get precipProbability() {
    return {
      x: this.xLeft + (this.xRight - this.xLeft) / 2,
      y: this.yTop + (1 - this.data.precipProbability) * this.dayHeight
    };
  }

  get precipAccumulation() {
    return {
      x: this.xLeft + (this.xRight - this.xLeft) / 2,
      y: this.yTop + (this.ranges.precipAccumulation.max - this.data.precipAccumulation) * (this.dayHeight / (this.ranges.precipAccumulation.max - this.ranges.precipAccumulation.min))
    };
  }

  get unitsPerSecond() {
    return this.dayWidth / Day.SECONDS_PER_DAY;
  }

  get unitsPerDegree() {
    return this.dayHeight / (this.ranges.temperature.max - this.ranges.temperature.min);
  }

  get sunriseX() {
    return this.xLeft + (this.sunrise - this.bod) * this.unitsPerSecond;//TODO
  }

  get sunsetX() {
    return this.xLeft + (this.sunset - this.bod) * this.unitsPerSecond;//TODO
  }

  get sunTop() {
    return this.yTop;//TODO padding? for now default to top of day
  }

  get dayHeight() {
    return this.yBottom - this.yTop;
  }

  get dayWidth() {
    return this.xRight - this.xLeft;
  }

  get sunHeight() {
    return this.dayHeight;//TODO padding?, for now default to dayHeight
  }

  get sunWidth() {
    return this.sunSeconds * this.unitsPerSecond;
  }

  get sunSeconds() {
    return this.sunset - this.sunrise;
  }
}
