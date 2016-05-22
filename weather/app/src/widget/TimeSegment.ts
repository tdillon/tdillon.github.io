import {WidgetType} from "../WidgetType";
import {Ranges} from "../Ranges";
import {DataPoint} from "../forecast.io.interface";
import {Theme} from "../Theme.interface";
import {Point} from "./Point"
import {Box} from './Box'

export class TimeSegment {
  from: number;//unix epoch begin of timesegment
  to: number;//unix epoch end of timesegment
  graphDaytimes: Array<Box>;
  graphNighttimes: Array<Box>;
  timeBarDaytimes: Array<Box>;
  timeBarNighttimes: Array<Box>;
  cloudCover: number;
  //TODO other weather properties
  timeBarDisplay: string;
  windBearing: number;
  moonPhase: number;

  private _unitsPerDegree: number;
  private _unitsPerSecond: number;

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

  constructor(
    _theme: Theme,
    private _data: DataPoint,
    public graphBox: Box,
    public timeBarBox: Box,
    private _ranges: Ranges) {

    let secondsPerSegment = (_theme.widgetType === WidgetType.Daily ? 86400 : 3600);

    this._unitsPerDegree = this.graphBox.height / (this._ranges.temperature.max - this._ranges.temperature.min);
    this._unitsPerSecond = this.graphBox.width / secondsPerSegment;

    this.from = _data.time;
    this.to = this.from + secondsPerSegment;
    this.cloudCover = _data.cloudCover;
    this.windBearing = _data.windBearing;
    this.moonPhase = _data.moonPhase;

    //SETUP timeBarDisplay
    let day = new Date(this.from * 1000);
    let hour = day.getHours();

    if (_theme.widgetType === WidgetType.Hourly) {
      this.timeBarDisplay = ((hour % 4 === 0) ? (hour === 0 ? ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][day.getDay()] : hour.toString()) : '');
    } else {
      this.timeBarDisplay = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][day.getDay()];
    }

    let widthPerSecond = this.graphBox.width / secondsPerSegment;

    this.graphDaytimes = [];
    this.graphNighttimes = [];
    this.timeBarDaytimes = [];
    this.timeBarNighttimes = [];


    if (_data.sunsetTime < this.from || _data.sunriseTime > this.to) {  //sunset before segment, or sunrise after segment
      this.timeBarNighttimes.push(new Box(timeBarBox.left, timeBarBox.top, timeBarBox.width, timeBarBox.height));
      this.graphNighttimes.push(new Box(graphBox.left, graphBox.top, graphBox.width, graphBox.height));
    } else if (_data.sunriseTime < this.from) {  //sunrise before segment, sunset during or after segment
      this.timeBarDaytimes.push(new Box(timeBarBox.left, timeBarBox.top, (Math.min(_data.sunsetTime, this.to) - this.from) * widthPerSecond, timeBarBox.height));
      this.graphDaytimes.push(new Box(graphBox.left, graphBox.top, (Math.min(_data.sunsetTime, this.to) - this.from) * widthPerSecond, graphBox.height));
      if (_data.sunsetTime < this.to) {  //sunset during segment
        this.timeBarNighttimes.push(new Box(timeBarBox.left + (_data.sunsetTime - this.from) * widthPerSecond, timeBarBox.top, (this.to - _data.sunsetTime) * widthPerSecond, timeBarBox.height));
        this.graphNighttimes.push(new Box(graphBox.left + (_data.sunsetTime - this.from) * widthPerSecond, graphBox.top, (this.to - _data.sunsetTime) * widthPerSecond, graphBox.height));
      }
    } else {  //sunrise during segment, sunset during or after segment
      this.timeBarNighttimes.push(new Box(timeBarBox.left, timeBarBox.top, (_data.sunriseTime - this.from) * widthPerSecond, timeBarBox.height));
      this.graphNighttimes.push(new Box(graphBox.left, graphBox.top, (_data.sunriseTime - this.from) * widthPerSecond, graphBox.height));
      this.timeBarDaytimes.push(new Box(timeBarBox.left + (_data.sunriseTime - this.from) * widthPerSecond, timeBarBox.top, (Math.min(_data.sunsetTime, this.to) - _data.sunriseTime) * widthPerSecond, timeBarBox.height));
      this.graphDaytimes.push(new Box(graphBox.left + (_data.sunriseTime - this.from) * widthPerSecond, graphBox.top, (Math.min(_data.sunsetTime, this.to) - _data.sunriseTime) * widthPerSecond, graphBox.height));
      if (_data.sunsetTime < this.to) {  //sunset during segment
        this.timeBarNighttimes.push(new Box(timeBarBox.left + (_data.sunsetTime - this.from) * widthPerSecond, timeBarBox.top, (this.to - _data.sunsetTime) * widthPerSecond, timeBarBox.height));
        this.graphNighttimes.push(new Box(graphBox.left + (_data.sunsetTime - this.from) * widthPerSecond, graphBox.top, (this.to - _data.sunsetTime) * widthPerSecond, graphBox.height));
      }
    }
  }



  get precipIntensityMaxColor(): string {
    return this._dbzs.find(i => i.intensity < this._data.precipIntensityMax).color;
  }

  get precipIntensityColor(): string {
    return this._dbzs.find(i => i.intensity < this._data.precipIntensity).color;
  }



  get windSpeed(): Point {
    return {
      x: this.graphBox.center.x,
      y: this.graphBox.top + (this._ranges.windSpeed.max - this._data.windSpeed) * (this.graphBox.height / this._ranges.windSpeed.max)
    };
  }


  get moon() {
    return {
      x: this.graphBox.center.x,
      y: this.graphBox.top + Math.abs(.5 - this.moonPhase) * this.graphBox.height * 2
    };
  }


  get precipitation() {
    return {
      x: this.graphBox.left + (this._data.precipIntensityMaxTime - this.from) * this._unitsPerSecond,
      y: this.graphBox.top + (1 - this._data.precipProbability) * this.graphBox.height
    };
  }

  get apparentTemperatureMax() {
    return {
      x: this.graphBox.left + (this._data.apparentTemperatureMaxTime - this.from) * this._unitsPerSecond,
      y: this.graphBox.top + (this._ranges.temperature.max - this._data.apparentTemperatureMax) * this._unitsPerDegree
    };
  }

  get apparentTemperatureMin() {
    return {
      x: this.graphBox.left + (this._data.apparentTemperatureMinTime - this.from) * this._unitsPerSecond,
      y: this.graphBox.top + (this._ranges.temperature.max - this._data.apparentTemperatureMin) * this._unitsPerDegree
    };
  }

  get temperatureMax() {
    return {
      x: this.graphBox.left + (this._data.temperatureMaxTime - this.from) * this._unitsPerSecond,
      y: this.graphBox.top + (this._ranges.temperature.max - this._data.temperatureMax) * this._unitsPerDegree
    };
  }

  get temperatureMin() {
    return {
      x: this.graphBox.left + (this._data.temperatureMinTime - this.from) * this._unitsPerSecond,
      y: this.graphBox.top + (this._ranges.temperature.max - this._data.temperatureMin) * this._unitsPerDegree
    };
  }


  get humidity() {
    return {
      x: this.graphBox.center.x,
      y: this.graphBox.top + (1 - this._data.humidity) * this.graphBox.height
    };
  }

  get visibility() {
    return {
      x: this.graphBox.center.x,
      y: this.graphBox.top + (10 - this._data.visibility) * this.graphBox.height * .1
    };
  }

  get dewPoint() {
    return {
      x: this.graphBox.center.x,
      y: this.graphBox.top + (this._ranges.temperature.max - this._data.dewPoint) * this._unitsPerDegree
    };
  }

  get ozone() {
    return {
      x: this.graphBox.center.x,
      y: this.graphBox.top + (this._ranges.ozone.max - this._data.ozone) * (this.graphBox.height / (this._ranges.ozone.max - this._ranges.ozone.min))
    };
  }

  get pressure() {
    return {
      x: this.graphBox.center.x,
      y: this.graphBox.top + (this._ranges.pressure.max - this._data.pressure) * (this.graphBox.height / (this._ranges.pressure.max - this._ranges.pressure.min))
    };
  }

  get apparentTemperature() {
    return {
      x: this.graphBox.center.x,
      y: this.graphBox.top + (this._ranges.temperature.max - this._data.apparentTemperature) * this._unitsPerDegree
    };
  }

  get temperature() {
    return {
      x: this.graphBox.center.x,
      y: this.graphBox.top + (this._ranges.temperature.max - this._data.temperature) * this._unitsPerDegree
    };
  }

  get precipProbability() {
    return {
      x: this.graphBox.center.x,
      y: this.graphBox.top + (1 - this._data.precipProbability) * this.graphBox.height
    };
  }

  get precipAccumulation() {
    return {
      x: this.graphBox.center.x,
      y: this.graphBox.top + (this._ranges.precipAccumulation.max - this._data.precipAccumulation) * (this.graphBox.height / (this._ranges.precipAccumulation.max - this._ranges.precipAccumulation.min))
    };
  }


}
