import {Ranges} from "../Ranges";
import {WidgetType} from "../WidgetType";
import {TimeSegment} from "./TimeSegment";
import {ForecastIO} from "../forecast.io.interface";
import {Theme} from "../Theme.interface"
import {Box} from './Box'


export class Positionings {
  public client: Box;
  public widget: Box;
  public graph: Box;
  public timeBar: Box;
  public leftScale: Box;
  public rightScale: Box;
  public timeSegments: Array<TimeSegment>;

  constructor(private _theme: Theme, private _data: ForecastIO, clientWidth: number, widgetRatio: number, devicePixelRatio: number, maxTextWidth: number) {
    this.client = new Box({ left: 0, top: 0, width: clientWidth, height: clientWidth / widgetRatio });

    this.widget = new Box({ left: 0, top: 0, width: clientWidth * devicePixelRatio, height: clientWidth / widgetRatio * devicePixelRatio });



    //TODO handle for padding
    //TODO get top/bottom/left/right paddings!
    let padding = this.getPadding();


    let numLeftScales = 1;    //TODO determine from theme
    let timeBarFontSize = 12; //TODO pull from theme
    let numRightScales = 2;   //TODO determine from theme

    this.leftScale = new Box(
      {
        left: 0,
        top: padding.top,
        width: maxTextWidth * numLeftScales,
        bottom: this.widget.height - Math.max(padding.bottom, timeBarFontSize)
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
        top: this.widget.height - timeBarFontSize,
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

    let db = (_theme.widgetType === WidgetType.Daily ? _data.daily : _data.hourly);
    let ranges = new Ranges(db, this._theme);

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
          ranges
        )
      );
      ++i;
    }
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
