import {Theme} from "./Theme.interface";
import {DataBlock} from "./forecast.io.interface";
import {ConfigService} from "./config.service";


export class Ranges {
  minTemp:number;
  minOzone:number;
  minPressure:number;
  maxTemp:number;
  maxOzone:number;
  maxPressure:number;
  maxWindSpeed:number;
  maxPrecipAccumulation:number;

  constructor(db:DataBlock, config:Theme) {
    this.minTemp = this.minOzone = this.minPressure = Number.MAX_SAFE_INTEGER;
    this.maxTemp = this.maxOzone = this.maxPressure = this.maxWindSpeed = this.maxPrecipAccumulation = Number.MIN_SAFE_INTEGER;
    let temperatureOptions = ['temperatureMax', 'temperatureMin', 'dewPoint', 'apparentTemperatureMax', 'apparentTemperatureMin', 'apparentTemperature', 'temperature'];

    for (let d of db.data) {
      for (let t of temperatureOptions) {
        if (config.options.some(o => o.title === t)) {
          if (d[t] > this.maxTemp) {
            this.maxTemp = d[t];
          }
          if (d[t] < this.minTemp) {
            this.minTemp = d[t];
          }
        }
      }

      if (d.windSpeed > this.maxWindSpeed) {
        this.maxWindSpeed = d.windSpeed;
      }
      if (d.ozone > this.maxOzone) {
        this.maxOzone = d.ozone;
      }
      if (d.ozone < this.minOzone) {
        this.minOzone = d.ozone;
      }
      if (d.pressure > this.maxPressure) {
        this.maxPressure = d.pressure;
      }
      if (d.pressure < this.minPressure) {
        this.minPressure = d.pressure;
      }
      if (d.precipAccumulation > this.maxPrecipAccumulation) {
        this.maxPrecipAccumulation = d.precipAccumulation;
      }
    }
  }

  get temperature() {
    return {
      min: this.minTemp,
      max: this.maxTemp
    }
  }

  get ozone() {
    return {
      min: this.minOzone,
      max: this.maxOzone
    }
  }

  get pressure() {
    return {
      min: this.minPressure,
      max: this.maxPressure
    }
  }

  get windSpeed() {
    return {
      min: 0,
      max: this.maxWindSpeed
    }
  }

  get precipAccumulation() {
    return {
      min: 0,
      max: this.maxPrecipAccumulation
    }
  }
}
