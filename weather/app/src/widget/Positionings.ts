import {Point} from "./Point";
import {Ranges} from "./Ranges";
import {WidgetType} from "../WidgetType";
import {TimeSegment} from "./TimeSegment";
import {ForecastIO} from "../forecast.io.interface";
import {Theme, ScaleType, ScalePosition} from "../Theme.interface"
import {Box} from './Box'



export class Positionings {
  private _ranges: Ranges;
  private _padding: { top: number, bottom: number, left: number, right: number };

  public client: Box;
  public widget: Box;
  public graph: Box;
  public timeBar: Box;
  public leftScale: Box;
  public rightScale: Box;
  public timeSegments: Array<TimeSegment>;
  // public leftScales: Array<{ box: Box, items: Array<{ value: string, center: Point }> }>;
  // public rightScales: Array<{ box: Box, items: Array<{ value: string, center: Point }> }>;
  public scales: Array<{ type: ScaleType, position: ScalePosition, box: Box, items: Array<{ value: string, center: Point }> }> = [];

  constructor(private _theme: Theme, private _data: ForecastIO, clientWidth: number, widgetRatio: number, devicePixelRatio: number, private getTextWidth: (text: string) => number) {
    let db = (_theme.widgetType === WidgetType.Daily ? _data.daily : _data.hourly);
    this._ranges = new Ranges(db, this._theme);
    this.client = new Box({ left: 0, top: 0, width: clientWidth, height: clientWidth / widgetRatio });
    this.widget = new Box({ left: 0, top: 0, width: clientWidth * devicePixelRatio, height: clientWidth / widgetRatio * devicePixelRatio });




    //TODO get padding: for now it will be biggest dot
    this._padding = this.getPadding();
    let padding = this._padding;

    //TODO get all scales
    this.getScales();


    //TODO i'm golden now







    //TODO for now assume this box contains all scales that are 'left'
    this.leftScale = new Box(
      {
        left: 0,
        top: padding.top,
        width: this.scales.filter(s => s.position === ScalePosition.Left).reduce((a, b) => { if (b.box.left < a.min) { a.min = b.box.left; } if (b.box.right > a.max) { a.max = b.box.right; } return a; }, { min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER, get diff(): number { return this.max - this.min } }).diff,
        bottom: this.widget.height - Math.max(padding.bottom, this._theme.fontSize)
      }
    );

    //TODO for now assume this box contains all scales that are 'right'
    this.rightScale = new Box(
      {
        width: this.scales.filter(s => s.position === ScalePosition.Right).reduce((a, b) => { if (b.box.left < a.min) { a.min = b.box.left; } if (b.box.right > a.max) { a.max = b.box.right; } return a; }, { min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER, get diff(): number { return this.max - this.min } }).diff,
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
  }

  private getScales() {
    let leftMostScale = 0;
    let rightMostScale = this.widget.right;
    let myScale = this._theme.scales.find(s => s.type === ScaleType.Temperature)

    //TODO whether a scale is shown or not, should be configurable (themed)
    //TODO for now if you have a weather prop, show the scale

    //TEMPERATURE
    if (this._ranges.temperature && myScale) {
      const pxPerDeg = (this.widget.height - Math.max(this._padding.bottom, this._theme.fontSize) - this._padding.top) / (this._ranges.temperature.max - this._ranges.temperature.min);

      let scaleTexts: Array<number> = [];
      let maxTextWidth = Number.MIN_SAFE_INTEGER, tempTextWidth;
      let t = this._ranges.temperature;
      for (let i = Math.ceil(t.min / 5) * 5; i <= Math.floor(t.max / 5) * 5; i += 5) {
        scaleTexts.push(i);
        if ((tempTextWidth = this.getTextWidth(i.toString())) > maxTextWidth) {
          maxTextWidth = tempTextWidth;
        }
      }

      let x = {
        type: ScaleType.Temperature,
        position: myScale.position,
        box: new Box({
          top: this._padding.top,
          bottom: this.widget.height - Math.max(this._padding.bottom, this._theme.fontSize),
          width: maxTextWidth,
          left: (myScale.position === ScalePosition.Left ? leftMostScale : rightMostScale - maxTextWidth)
        }),
        items: []
      };
      this.scales.push(x);

      if (x.position === ScalePosition.Left) {
        leftMostScale = x.box.right;
      } else {
        rightMostScale = x.box.left;
      }

      scaleTexts.forEach(t => x.items.push({
        value: t.toString(),
        center: new Point(
          x.box.center.x,
          this._padding.top + (this._ranges.temperature.max - t) * pxPerDeg
        )
      }));
    }


    // //TODO Percentage


    //WIND SPEED
    myScale = this._theme.scales.find(s => s.type === ScaleType.WindSpeed)
    if (this._ranges.windSpeed && myScale) {
      const pxPerMPH = (this.widget.height - Math.max(this._padding.bottom, this._theme.fontSize) - this._padding.top) / this._ranges.windSpeed.max;

      let scaleTexts: Array<number> = [];
      let maxTextWidth = Number.MIN_SAFE_INTEGER, tempTextWidth;
      for (let i = 1; i <= Math.floor(this._ranges.windSpeed.max); ++i) {
        scaleTexts.push(i);
        if ((tempTextWidth = this.getTextWidth(i.toString())) > maxTextWidth) {
          maxTextWidth = tempTextWidth;
        }
      }


      let x = {
        type: ScaleType.WindSpeed,
        position: myScale.position,
        box: new Box({
          top: this._padding.top,
          bottom: this.widget.height - Math.max(this._padding.bottom, this._theme.fontSize),
          width: maxTextWidth,
          left: (myScale.position === ScalePosition.Left ? leftMostScale : rightMostScale - maxTextWidth)
        }),
        items: []
      };
      this.scales.push(x);

      if (x.position === ScalePosition.Left) {
        leftMostScale = x.box.right;
      } else {
        rightMostScale = x.box.left;
      }

      scaleTexts.forEach(t => x.items.push({
        value: t.toString(),
        center: new Point(
          x.box.center.x,
          this._padding.top + (this._ranges.windSpeed.max - t) * pxPerMPH
        )
      }));
    }



    //Ozone
    myScale = this._theme.scales.find(s => s.type === ScaleType.Ozone)
    if (this._ranges.ozone && myScale) {
      const pxPerDobson = (this.widget.height - Math.max(this._padding.bottom, this._theme.fontSize) - this._padding.top) / (this._ranges.ozone.max - this._ranges.ozone.min);

      let scaleTexts: Array<number> = [];
      let maxTextWidth = Number.MIN_SAFE_INTEGER, tempTextWidth;
      for (let i = Math.ceil(this._ranges.ozone.min / 5) * 5; i <= Math.floor(this._ranges.ozone.max / 5) * 5; i += 5) {
        scaleTexts.push(i);
        if ((tempTextWidth = this.getTextWidth(i.toString())) > maxTextWidth) {
          maxTextWidth = tempTextWidth;
        }
      }

      let x = {
        type: ScaleType.Ozone,
        position: myScale.position,
        box: new Box({
          top: this._padding.top,
          bottom: this.widget.height - Math.max(this._padding.bottom, this._theme.fontSize),
          width: maxTextWidth,
          left: (myScale.position === ScalePosition.Left ? leftMostScale : rightMostScale - maxTextWidth)
        }),
        items: []
      };
      this.scales.push(x);

      if (x.position === ScalePosition.Left) {
        leftMostScale = x.box.right;
      } else {
        rightMostScale = x.box.left;
      }

      scaleTexts.forEach(t => x.items.push({
        value: t.toString(),
        center: new Point(
          x.box.center.x,
          this._padding.top + (this._ranges.ozone.max - t) * pxPerDobson
        )
      }));
    }

    //Pressure
    myScale = this._theme.scales.find(s => s.type === ScaleType.Pressure)
    if (this._ranges.pressure && myScale) {
      const pxPerMB = (this.widget.height - Math.max(this._padding.bottom, this._theme.fontSize) - this._padding.top) / (this._ranges.pressure.max - this._ranges.pressure.min);

      let scaleTexts: Array<number> = [];
      let maxTextWidth = Number.MIN_SAFE_INTEGER, tempTextWidth;
      for (let i = Math.ceil(this._ranges.pressure.min / 5) * 5; i <= Math.floor(this._ranges.pressure.max / 5) * 5; i += 5) {
        scaleTexts.push(i);
        if ((tempTextWidth = this.getTextWidth(i.toString())) > maxTextWidth) {
          maxTextWidth = tempTextWidth;
        }
      }

      let x = {
        type: ScaleType.Pressure,
        position: myScale.position,
        box: new Box({
          top: this._padding.top,
          bottom: this.widget.height - Math.max(this._padding.bottom, this._theme.fontSize),
          width: maxTextWidth,
          left: (myScale.position === ScalePosition.Left ? leftMostScale : rightMostScale - maxTextWidth)
        }),
        items: []
      };
      this.scales.push(x);

      if (x.position === ScalePosition.Left) {
        leftMostScale = x.box.right;
      } else {
        rightMostScale = x.box.left;
      }

      scaleTexts.forEach(t => x.items.push({
        value: t.toString(),
        center: new Point(
          x.box.center.x,
          this._padding.top + (this._ranges.pressure.max - t) * pxPerMB
        )
      }));
    }




    //
    // //accumilation

  }

  private getPadding(): { top: number, bottom: number, left: number, right: number } {
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
