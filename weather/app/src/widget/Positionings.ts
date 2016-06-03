import {Point} from "./Point";
import {Ranges} from "./Ranges";
import {WidgetType} from "../WidgetType";
import {TimeSegment} from "./TimeSegment";
import {ForecastIO} from "../forecast.io.interface";
import {Theme} from "../Theme.interface"
import {Box} from './Box'


export enum ScaleType {
  Temperature, WindSpeed, Percentage, Pressure, Ozone, PrecipAccumulation
}

export class Positionings {
  private _ranges: Ranges;

  public client: Box;
  public widget: Box;
  public graph: Box;
  public timeBar: Box;
  public leftScale: Box;
  public rightScale: Box;
  public timeSegments: Array<TimeSegment>;
  public scales: Array<{ type: ScaleType, items: Array<{ value: string, center: Point }> }> = [];

  constructor(private _theme: Theme, private _data: ForecastIO, clientWidth: number, widgetRatio: number, devicePixelRatio: number, private maxTextWidth: number) {
    let db = (_theme.widgetType === WidgetType.Daily ? _data.daily : _data.hourly);
    this._ranges = new Ranges(db, this._theme);
    this.client = new Box({ left: 0, top: 0, width: clientWidth, height: clientWidth / widgetRatio });

    this.widget = new Box({ left: 0, top: 0, width: clientWidth * devicePixelRatio, height: clientWidth / widgetRatio * devicePixelRatio });

    let numLeftScales = (this._ranges.temperature ? 1 : 0);//TODO pull from theme
    let numRightScales = (this._ranges.windSpeed ? 1 : 0) + (this._ranges.ozone ? 1 : 0);//TODO pull from theme

    let padding = this.getPadding();

    this.leftScale = new Box(
      {
        left: 0,
        top: padding.top,
        width: maxTextWidth * numLeftScales,
        bottom: this.widget.height - Math.max(padding.bottom, this._theme.fontSize)
      }
    );

    this.rightScale = new Box(
      {
        width: maxTextWidth * numRightScales,
        right: this.widget.width,
        top: this.leftScale.top,
        bottom: this.leftScale.bottom
      });

    this.timeBar = new Box(
      {
        left: Math.max(this.leftScale.width, padding.left),
        right: this.widget.width - Math.max(padding.right, this.rightScale.width),
        top: this.widget.height - this._theme.fontSize,
        bottom: this.widget.height
      }
    );

    this.graph = new Box({
      left: this.timeBar.left,
      right: this.timeBar.right,
      top: padding.top,
      bottom: this.widget.height - Math.max(this.timeBar.height, padding.bottom)
    });



    this.timeSegments = [];


    let i = 0;
    let segWidth = this.graph.width / db.data.length;
    for (let dp of db.data) {
      if (_theme.widgetType === WidgetType.Hourly) {  //add sunrise sunset
        //TODO need to get data[x] for the right day
        let currentDay = _data.daily.data.reduce((prev, curr) => curr.time <= dp.time ? curr : prev);
        dp.sunriseTime = currentDay.sunriseTime;
        dp.sunsetTime = currentDay.sunsetTime;
      }

      this.timeSegments.push(
        new TimeSegment(
          _theme,
          dp,
          new Box({
            left: this.graph.left + i * segWidth,
            top: this.graph.top,
            width: segWidth,
            height: this.graph.height
          }),
          new Box({
            left: this.timeBar.left + i * segWidth,
            top: this.timeBar.top,
            width: segWidth,
            height: this.timeBar.height
          }),
          this._ranges
        )
      );
      ++i;
    }

    this.getScales();
  }

  private getScales() {
    //TODO whether a scale is shown or not, should be configurable (themed)
    //TODO for now if you have a weather prop, show the scale

    //TEMPERATURE SCALE
    if (this._ranges.temperature) {
      let x = { type: ScaleType.Temperature, items: [] };
      this.scales.push(x);
      const pxPerDeg = this.graph.height / (this._ranges.temperature.max - this._ranges.temperature.min);
      let t = this._ranges.temperature;
      //write temps in 5deg increments
      for (let i = Math.ceil(t.min / 5) * 5; i <= Math.floor(t.max / 5) * 5; i += 5) {
        x.items.push({
          value: i.toString(),
          center: new Point(this.leftScale.center.x, this.graph.top + (t.max - i) * pxPerDeg)
        });
      }
    }

    let numRightScalesUsed = 0;

    //WIND SPEED SCALE
    if (this._ranges.windSpeed) {
      ++numRightScalesUsed;
      let x = { type: ScaleType.WindSpeed, items: [] };
      this.scales.push(x);
      const pxPerMPH = this.graph.height / this._ranges.windSpeed.max;
      for (let i = 1; i <= Math.floor(this._ranges.windSpeed.max); ++i) {
        x.items.push({
          value: i.toString(),
          center: new Point(this.rightScale.left + (this.maxTextWidth / 2 * numRightScalesUsed), this.graph.top + (this._ranges.windSpeed.max - i) * pxPerMPH)
        });
      }
    }

    //TODO Percentage

    //Ozone
    if (this._ranges.ozone) {
      ++numRightScalesUsed;
      let x = { type: ScaleType.Ozone, items: [] };
      this.scales.push(x);
      const pxPerDobson = this.graph.height / (this._ranges.ozone.max - this._ranges.ozone.min);
      for (let i = Math.ceil(this._ranges.ozone.min / 5) * 5; i <= Math.floor(this._ranges.ozone.max / 5) * 5; i += 5) {
        x.items.push({
          value: i.toString(),
          center: new Point(this.rightScale.left + (this.maxTextWidth / 2 * numRightScalesUsed), this.graph.top + (this._ranges.ozone.max - i) * pxPerDobson)
        });
      }
    }

    //Pressure
    if (this._ranges.pressure) {
      ++numRightScalesUsed;
      let x = { type: ScaleType.Pressure, items: [] };
      this.scales.push(x);
      const pxPerMB = this.graph.height / (this._ranges.pressure.max - this._ranges.pressure.min);
      for (let i = Math.ceil(this._ranges.pressure.min / 5) * 5; i <= Math.floor(this._ranges.pressure.max / 5) * 5; i += 5) {
        x.items.push({
          value: i.toString(),
          center: new Point(this.rightScale.left + (this.maxTextWidth / 2 * numRightScalesUsed), this.graph.top + (this._ranges.pressure.max - i) * pxPerMB)
        });
      }
    }

    //accumilation

  }

  private getPadding(): { top: number, bottom: number, left: number, right: number } {

    //todo hack try and get the 'left most' dot based on size, can you?
    let db = (this._theme.widgetType === WidgetType.Daily ? this._data.daily : this._data.hourly);

    for (let o of this._theme.options) {
      for (let dp of db.data) {

      }
    }

    let maxDot = 0, tempDot;

    //hack: for now use the biggest dot
    for (let o of this._theme.options) {
      if ((tempDot = (o.dot.radius.global ? this._theme.globals.dot.radius : o.dot.radius.value)) > maxDot) {
        maxDot = tempDot;
      }
    }

    return { top: maxDot, bottom: maxDot, left: maxDot, right: maxDot };
  }

}
