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
    this.client = new Box();
    this.client.width = clientWidth;
    this.client.height = clientWidth / widgetRatio;

    this.widget = new Box();
    this.widget.width = clientWidth * devicePixelRatio;
    this.widget.height = clientWidth / widgetRatio * devicePixelRatio;

    let numLeftScales = 1;//TODO pull from theme
    let timeBarFontSize = 12;//TODO pull from theme
    let numRightScales = 2;//TODO pull from theme

    this.leftScale = new Box();
    this.leftScale.width = maxTextWidth * numLeftScales;
    this.rightScale = new Box(this.widget.width - (maxTextWidth * numRightScales));
    this.rightScale.right = this.widget.width;

    this.timeBar = new Box(this.leftScale.right, this.widget.height - timeBarFontSize);
    this.timeBar.right = this.rightScale.left;
    this.timeBar.bottom = this.widget.height;

    this.leftScale.height = this.timeBar.top;

    this.rightScale.bottom = this.timeBar.top;

    this.graph = new Box(this.leftScale.width);
    this.graph.right = this.rightScale.left;
    this.graph.bottom = this.timeBar.top;



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
          new Box(this.graph.left + i * segWidth, 0, segWidth, this.graph.height),
          new Box(this.timeBar.left + i * segWidth, this.timeBar.top, segWidth, this.timeBar.height),
          ranges
        )
      );
      ++i;
    }
  }
}
