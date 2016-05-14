import {WidgetType} from "./WidgetType";
import {Theme} from "./Theme.interface";
import {DataBlock, DataPoint, ForecastIO} from './forecast.io.interface';
import {Day} from "./Day";
import {ConfigService} from "./config.service";
import {Component, Input, AfterViewInit, DoCheck} from "angular2/core";
import {SegmentGeometry} from "./SegmentGeometry";
import {Ranges} from "./Ranges";
import {DotDrawer} from './DotDrawer'
import {ConfigOption} from './Option.interface'




/*
 * TODO:MainGraph
 * Padding: we are using the radius of the largest shown dot for top and right. do we care about the case where that large dot is not near the top or right?  i.e., do we shift the padding depending upon the nearest dot to the edge?
 * Padding: what if max dot radius is larger then 'time bar' or 'temp bar'?
 * IS THIS NECESSARY?  FIND AN EXAMPLE WHERE IT MATTERS -> Draw invert the order of the 2 for loops so that entire lines are drawn at once. this will allow for depth of lines to be set
 *
 * TODO:Dots
 * create 'ring' type
 * Rain, Sleet, Snow, Hail icons for PrecipProbability
 * visibility icon
 * pressure icon
 * hummidity icon
 *
 * TODO segments
 * Allow precipProbability segment to be solid color (as well as 'intensity color'), i.e., configurable.
 * somehow set opacity when using 'intensity color'.
 *
 * TODO Work List:
 * Figuring how hiding and showing of config options based on daily/hourly
 * Background image configuration to simulate phone home screen widget.
 * Show 'alerts'.  in one of the corners?
 * Do we need seperate font sizes for time and temp?
 * Make weather properties sortable to simulate depth.
 *
 * TODO:Time
 * Color the time bar in hourly mode per the cloudcover and sunrise/sunset
 *
 * TODO:Scaling
 * Wind Speed: how is intensity identified?  Colors? Y axis (left or right) like temp?  Icon (probably too small to use)?
 * Ozone: what scale? same as wind speed questions.
 * Pressure: what scale? same as wind speed questions.
 *
 * TODO:Themes
 * Finalize/cleanup theme workflow
 *
 */





@Component({
  selector: 'widget-display',
  template: `
    <canvas></canvas>
  `,
  styles: ['canvas{display:block}']
})
export class WidgetDisplayComponent implements AfterViewInit, DoCheck {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  @Input() data: ForecastIO;
  /** width to height */
  widgetRatio = 2;
  @Input() theme: Theme;

  /** Dimensions used in rendering the widget */
  private _dims = {
    /** The number of 'scales' that are shown in the left scale region.  e.g., temperatures, %, mph.  This will need initialized. */
    numLeftScales: 0,
    /** The number of 'scales' that are shown in the right scale region.  e.g., temperatures, %, mph.  This will need initialized. */
    numRightScales: 0,
    /** TODO */
    widgetRatio: 2,
    /** TODO */
    fontSize: 12,
    /** The window.devicePixelRatio  Probably 1 for laptops, > 1 for phones, e.g., 3.5 for Nexus 6 */
    get devicePixelRatio() { return window.devicePixelRatio; },
    /** TODO */
    get clientWidth() { return document.documentElement.clientWidth; },
    /** TODO */
    get clientHeight() { return this.clientWidth / this.widgetRatio },
    /** TODO */
    get widgetWidth() { return this.devicePixelRatio * this.clientWidth; },
    /** TODO */
    get widgetHeight() { return this.devicePixelRatio * this.clientHeight; },
    /** TODO set in constructor from canvas 'measureText' */
    maxTextWidth: 0,
    /** TODO */
    get padding() {
      return {
        left: this.numLeftScales * this.maxTextWidth,//0 or maxTextWidth or other?, will be set in initDims
        // top: this.config.maxDotRadius,  TODO
        right: this.numRightScales * this.maxTextWidth,//0 or maxTextWidth or other?, will be set in initDims
        // right: this.config.maxDotRadius,  TODO
        top: 0,
        bottom: this.fontSize
      };  //TODO account for 'time bar', 'temp bar', and dot radius
    }
    ,
    /** TODO */
    get graphWidth() { return this.widgetWidth - this.padding.left - this.padding.right; },
    /** TODO */
    get graphHeight() { return this.widgetHeight - this.padding.top - this.padding.bottom; },
    /** TODO */
    get dayWidth() { return this.graphWidth / 8; },
    /** TODO */
    get hourWidth() { return this.graphWidth / 49; },
    /** TODO */
    get pxPerSec() { return this.dayWidth / (60 * 60 * 24); }
  };

  ngAfterViewInit() {
    this.canvas = <HTMLCanvasElement>document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
  }

  ngDoCheck() {
    //TODO how else can i get notified if this.theme.XXX has changed?, this hits too often
    if (this.data && this.theme) {
      this.render();
    }
  }

  private initDims(ranges: Ranges) {
    this.ctx.font = `${this._dims.fontSize}px 'Roboto', 'Consolas', sans-serif`;
    this._dims.maxTextWidth = this.ctx.measureText('125').width;  //from testing ctx.measureText 125 seems to be as wide as any other reasonable temperature

    //TODO currently this is the best way to determine if a 'temperature' property is chosen, can the Ranges class give a property for a check?  Or should that check be done somewhere else?
    this._dims.numLeftScales = (ranges.temperature.min <= ranges.temperature.max ? 1 : 0);

    //TODO how do determine number of scales?
    this._dims.numRightScales = 2;
  }

  private renderWidgetBackground() {
    this.ctx.fillStyle = 'transparent';//111  //TODO get from config
    this.ctx.fillRect(0, 0, this._dims.widgetWidth, this._dims.widgetHeight);
  }

  private renderGraphBackground() {
    this.ctx.fillStyle = 'transparent';//222  //TODO get from config
    this.ctx.fillRect(this._dims.padding.left, this._dims.padding.top, this._dims.graphWidth, this._dims.graphHeight);
  }

  private renderTimeBackground() {
    this.ctx.fillStyle = 'rgba(0,0,0,.5)';//222  //TODO get from config
    this.ctx.fillRect(0, this._dims.graphHeight + this._dims.padding.top, this._dims.widgetWidth, this._dims.fontSize);

  }

  private renderLeftScaleBackground() {
    //TODO left scale isn't rendered when no temp item is selected
    this.ctx.fillStyle = 'rgba(0,0,0,.25)';//222  //TODO get from config
    this.ctx.fillRect(0, 0, this._dims.padding.left, this._dims.widgetHeight);

  }

  private renderRightScaleBackground() {
    //TODO need to figure out what is rendered in right scale
    this.ctx.fillStyle = 'rgba(rgba(0,0,0,.25)';//222  //TODO get from config
    //TODO figure out positions
    this.ctx.fillRect(this._dims.widgetWidth - this._dims.maxTextWidth * this._dims.numRightScales, 0, this._dims.maxTextWidth * this._dims.numRightScales, this._dims.widgetHeight);

  }

  private renderDaylight(db: DataBlock, ranges: Ranges) {
    let yesterday: Day, today: Day;

    for (let i = 0, d: DataPoint; d = db.data[i]; ++i) {
      yesterday = today;
      today = new Day(d, ranges, this._dims.padding.left + i * (this.theme.widgetType === WidgetType.Hourly ? this._dims.hourWidth : this._dims.dayWidth), this._dims.padding.left + (i + 1) * (this.theme.widgetType === WidgetType.Hourly ? this._dims.hourWidth : this._dims.dayWidth), this._dims.padding.top, this._dims.padding.top + this._dims.graphHeight);  //TODO change with padding

      //Daylight bars
      if (this.theme.daylight) {
        this.theme.daylight.a = 1 - d.cloudCover;
        this.ctx.fillStyle = this.theme.daylight.rgba;
        if (this.theme.widgetType === WidgetType.Daily) {
          this.ctx.fillRect(today.sunriseX, today.sunTop, today.sunWidth, today.sunHeight);
        } else {
          //TODO draw on 'time bar'.  Signify daytime vs nighttime.
          this.ctx.fillRect(today.xLeft, today.sunTop, this._dims.hourWidth, today.sunHeight);
        }
      }
    }
  }

  private renderTimeText(db: DataBlock) {
    //draw times
    for (let i = 0, d: DataPoint; d = db.data[i]; ++i) {
      this.ctx.fillStyle = '#fff';
      this.ctx.textBaseline = 'bottom';
      this.ctx.textAlign = 'center';
      if (this.theme.widgetType === WidgetType.Hourly) {
        let day = new Date(d.time * 1000);
        let hour = day.getHours();
        if (hour % 4 === 0) {
          this.ctx.fillText((hour === 0 ? ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][day.getDay()] : hour.toString()), this._dims.padding.left + i * this._dims.hourWidth + 1800 * this._dims.pxPerSec, this._dims.widgetHeight);
        }
      } else {
        this.ctx.fillText(['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][new Date(d.time * 1000).getDay()], this._dims.padding.left + i * this._dims.dayWidth + 43200 * this._dims.pxPerSec, this._dims.widgetHeight);
      }
    }
  }

  private renderLeftAxisText(ranges: Ranges) {
    //TODO for now just draw degrees if needed, in future maybe  other stuff is rendered here
    //TODO use a variable font size???

    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#fff';
    this.ctx.textBaseline = 'middle';

    //write temps in 5deg increments
    const pxPerDeg = this._dims.graphHeight / (ranges.temperature.max - ranges.temperature.min);
    for (let i = Math.ceil(ranges.temperature.min / 5) * 5; i <= Math.floor(ranges.temperature.max / 5) * 5; i += 5) {
      this.ctx.fillText(i.toString(), this._dims.maxTextWidth / 2, this._dims.padding.top + (ranges.temperature.max - i) * pxPerDeg, this._dims.maxTextWidth);
    }
  }

  private renderRightAxisText(ranges: Ranges) {
    //TODO for now just draw degrees if needed, in future maybe  other stuff is rendered here
    //TODO use a variable font size???

    //TODO how do i conditionally show these?

    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#fff';
    this.ctx.textBaseline = 'middle';

    //TODO draw accumilation scale!!!
    const pxPerInch = this._dims.graphHeight / ranges.precipAccumulation.max;
    for (let i = 1; i <= Math.floor(ranges.precipAccumulation.max); ++i) {
      this.ctx.fillText(
        i.toString(),
        this._dims.widgetWidth - this._dims.maxTextWidth / 2,
        this._dims.padding.top + (ranges.precipAccumulation.max - i) * pxPerInch,
        this._dims.maxTextWidth
      );
    }

    //TODO draw windSpeed scale!!!
    const pxPerMPH = this._dims.graphHeight / ranges.windSpeed.max;
    for (let i = 1; i <= Math.floor(ranges.windSpeed.max); ++i) {
      this.ctx.fillText(
        i.toString(),
        this._dims.widgetWidth - 3 * this._dims.maxTextWidth / 2,
        this._dims.padding.top + (ranges.windSpeed.max - i) * pxPerMPH,
        this._dims.maxTextWidth
      );
    }

    //TODO other scales, how to generalize them? how to show them?

  }

  private renderWeatherProperty(db: DataBlock, ranges: Ranges, c: ConfigOption) {

    let yesterday: Day, today: Day;

    for (let i = 0, d: DataPoint; d = db.data[i]; ++i) {
      yesterday = today;
      today = new Day(d, ranges, this._dims.padding.left + i * (this.theme.widgetType === WidgetType.Hourly ? this._dims.hourWidth : this._dims.dayWidth), this._dims.padding.left + (i + 1) * (this.theme.widgetType === WidgetType.Hourly ? this._dims.hourWidth : this._dims.dayWidth), this._dims.padding.top, this._dims.padding.top + this._dims.graphHeight);  //TODO change with padding

      //Don't show dots/segments for 0% precipitation probability
      if (!(c.title === 'precipProbability' && d.precipProbability === 0)) {
        let s = new SegmentGeometry(c, this.theme.globals, (yesterday ? yesterday[c.title].x : null), (yesterday ? yesterday[c.title].y : null), today[c.title].x, today[c.title].y);

        switch (c.title) {
          case 'moon':
            DotDrawer.moon(this.ctx, today[c.title].x, today[c.title].y, (c.dot.radius.global ? this.theme.globals.dot.radius : c.dot.radius.value), (c.dot.color.global ? this.theme.globals.dot.color.rgba : c.dot.color.value.rgba), d.moonPhase);
            break;
          case 'windSpeed':
            DotDrawer.wind(this.ctx, today[c.title].x, today[c.title].y, (c.dot.radius.global ? this.theme.globals.dot.radius : c.dot.radius.value), (c.dot.color.global ? this.theme.globals.dot.color.rgba : c.dot.color.value.rgba), d.windBearing);
            break;
          default:
            DotDrawer.simple(this.ctx, today[c.title].x, today[c.title].y, (c.dot.radius.global ? this.theme.globals.dot.radius : c.dot.radius.value), (c.title === 'precipProbability') ? (this.theme.widgetType === WidgetType.Hourly ? today.precipIntensityColor : today.precipIntensityMaxColor) : (c.dot.color.global ? this.theme.globals.dot.color.rgba : c.dot.color.value.rgba));
        }

        //Don't draw segment for precipProbability when yesterday was 0%.
        if ((c.segment.show.global ? this.theme.globals.segment.show : c.segment.show.value) && s.hasSegment && !(c.title === 'precipProbability' && yesterday.data.precipProbability === 0)) {
          if (c.title === 'precipProbability') {  //gradient
            let gradient = this.ctx.createLinearGradient(yesterday[c.title].x, yesterday[c.title].y, today[c.title].x, today[c.title].y);
            gradient.addColorStop(0, this.theme.widgetType === WidgetType.Hourly ? yesterday.precipIntensityColor : yesterday.precipIntensityMaxColor);
            gradient.addColorStop(1, this.theme.widgetType === WidgetType.Hourly ? today.precipIntensityColor : today.precipIntensityMaxColor);
            this.ctx.fillStyle = gradient;
          } else {
            this.ctx.fillStyle = (c.segment.color.global ? this.theme.globals.segment.color.rgba : c.segment.color.value.rgba);
          }
          this.ctx.beginPath();
          this.ctx.arc(s.start.point.x, s.start.point.y, (c.dot.radius.global ? this.theme.globals.dot.radius : c.dot.radius.value), s.start.from, s.start.to, false);
          this.ctx.arc(s.end.point.x, s.end.point.y, (c.dot.radius.global ? this.theme.globals.dot.radius : c.dot.radius.value), s.end.from, s.end.to, false);
          this.ctx.fill();
          this.ctx.closePath();
        }
      }
    }
  }

  render() {
    this.widgetRatio *= 1;

    this.canvas.width = this._dims.widgetWidth;
    this.canvas.height = this._dims.widgetHeight;

    this.canvas.style.width = this._dims.clientWidth + 'px';
    this.canvas.style.height = this._dims.clientHeight + 'px';

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    /*
     * Render Sequence:
     *  x) Main background (simulate wallpaper on mobile)  //or is this the page's background?
     *  1) Widget background (background color w/opacity of entire widget)
     *  2) Graph overlay (background color w/ opacity of graph region)
     *  3) Time overlay (background color w/ opacity of time bar)
     *  4) Left axis overlay (background color w/ opacity of left axis overlay i.e., temp scale)
     *  5) Right axis overlay (background color w/ opacity of right axis overlay i.e., %, MPH, etc., scales)
     *  6) Daylight
     *  7) time text
     *  8) left axis text
     *  9) right axis text
     * 10) draw each weather property (dot&segment) for the entire time period //this will effect layering
     */

    let db = (this.theme.widgetType === WidgetType.Daily ? this.data.daily : this.data.hourly);
    let ranges = new Ranges(db, this.theme);

    this.initDims(ranges);
    this.renderWidgetBackground();     //1
    this.renderGraphBackground();      //2
    this.renderTimeBackground();       //3
    this.renderLeftScaleBackground();  //4
    this.renderRightScaleBackground(); //5
    this.renderDaylight(db, ranges);   //6
    this.renderTimeText(db);           //7
    this.renderLeftAxisText(ranges);   //8
    this.renderRightAxisText(ranges);  //9
    for (let c of this.theme.options) {
      this.renderWeatherProperty(db, ranges, c);  //10
    }
  }
}
