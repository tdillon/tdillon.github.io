import {WidgetType} from "./WidgetType";
import {Theme} from "./Theme.interface";
import {DataBlock, DataPoint, ForecastIO} from './forecast.io.interface';
import {Day} from "./Day";
import {ConfigService} from "./config.service";
import {Component, Input, AfterViewInit, DoCheck} from "angular2/core";
import {SegmentGeometry} from "./SegmentGeometry";
import {Ranges} from "./Ranges";
import {DotDrawer} from './DotDrawer'


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

  render() {
    this.widgetRatio *= 1;

    // http://html5rocks.com/en/tutorials/canvas/hidpi/
    let ratio = window.devicePixelRatio;
    let oldWidth = document.documentElement.clientWidth;
    let oldHeight = oldWidth / this.widgetRatio
    let widgetWidth = this.canvas.width = ratio * oldWidth;
    let widgetHeight = this.canvas.height = ratio * oldHeight;
    let fontSize = 12;

    this.canvas.style.width = oldWidth + 'px';
    this.canvas.style.height = oldHeight + 'px';
    //this.ctx.scale(5,5);

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //TODO draw background image?
    this.ctx.fillStyle = '#333';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.font = `${fontSize}px 'Roboto', 'Consolas', sans-serif`;
    let maxTempTextWidth = this.ctx.measureText('125').width;  //from testing ctx.measureText 125 seems to be as wide as any other reasonable temperature

    let PADDING = {
      left: maxTempTextWidth,
      // top: this.config.maxDotRadius,  TODO
      // right: this.config.maxDotRadius,  TODO
      top: 0, right: 0,
      bottom: fontSize
    };  //TODO account for 'time bar', 'temp bar', and dot radius

    let graphWidth = widgetWidth - PADDING.left - PADDING.right;
    let graphHeight = widgetHeight - PADDING.top - PADDING.bottom;
    let dayWidth = graphWidth / 8;
    let hourWidth = graphWidth / 49;
    const pxPerSec = dayWidth / (60 * 60 * 24);


    //TODO-hack delete me drawing 'widget' area
    this.ctx.fillStyle = '#111';
    this.ctx.fillRect(0, 0, widgetWidth, widgetHeight);
    //TODO-hack delete me drawing 'graph' area
    this.ctx.fillStyle = '#222';
    this.ctx.fillRect(PADDING.left, PADDING.top, graphWidth, graphHeight);


    let db = (this.theme.widgetType === WidgetType.Daily ? this.data.daily : this.data.hourly);
    let ranges = new Ranges(db, this.theme);


    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#fff';
    this.ctx.textBaseline = 'middle';

    //write temps in 5deg increments
    const pxPerDeg = graphHeight / (ranges.temperature.max - ranges.temperature.min);
    for (let i = Math.ceil(ranges.temperature.min / 5) * 5; i <= Math.floor(ranges.temperature.max / 5) * 5; i += 5) {
      this.ctx.fillText(i.toString(), maxTempTextWidth / 2, PADDING.top + (ranges.temperature.max - i) * pxPerDeg, maxTempTextWidth);
    }

    //TODO draw accumilation scale!!!
    const pxPerInch = graphHeight / ranges.precipAccumulation.max;
    for (let i = 1; i <= Math.floor(ranges.precipAccumulation.max); ++i) {
      this.ctx.fillText(i.toString(), widgetWidth - maxTempTextWidth / 2, PADDING.top + (ranges.precipAccumulation.max - i) * pxPerInch, maxTempTextWidth);
    }

    //TODO draw windSpeed scale!!!
    const pxPerMPH = graphHeight / ranges.windSpeed.max;
    for (let i = 1; i <= Math.floor(ranges.windSpeed.max); ++i) {
      this.ctx.fillText(i.toString(), widgetWidth - 2 * maxTempTextWidth / 2, PADDING.top + (ranges.windSpeed.max - i) * pxPerMPH, maxTempTextWidth);
    }

    //TODO other scales, how to generalize them? how to show them?



    let yesterday: Day, today: Day;

    for (let i = 0, d: DataPoint; d = db.data[i]; ++i) {
      yesterday = today;
      today = new Day(d, ranges, PADDING.left + i * (this.theme.widgetType === WidgetType.Hourly ? hourWidth : dayWidth), PADDING.left + (i + 1) * (this.theme.widgetType === WidgetType.Hourly ? hourWidth : dayWidth), PADDING.top, PADDING.top + graphHeight);  //TODO change with padding

      //Daylight bars
      if (this.theme.daylight) {
        this.theme.daylight.a = 1 - d.cloudCover;
        this.ctx.fillStyle = this.theme.daylight.rgba;
        if (this.theme.widgetType === WidgetType.Daily) {
          this.ctx.fillRect(today.sunriseX, today.sunTop, today.sunWidth, today.sunHeight);
        } else {
          //TODO draw on 'time bar'.  Signify daytime vs nighttime.
          this.ctx.fillRect(today.xLeft, today.sunTop, hourWidth, today.sunHeight);
        }
      }

      //draw times
      this.ctx.fillStyle = '#fff';
      this.ctx.textBaseline = 'bottom';
      this.ctx.textAlign = 'center';
      if (this.theme.widgetType === WidgetType.Hourly) {
        let day = new Date(d.time * 1000);
        let hour = day.getHours();
        if (hour % 4 === 0) {
          this.ctx.fillText((hour === 0 ? ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][day.getDay()] : hour.toString()), PADDING.left + i * hourWidth + 1800 * pxPerSec, widgetHeight);
        }
      } else {
        this.ctx.fillText(['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][new Date(d.time * 1000).getDay()], PADDING.left + i * dayWidth + 43200 * pxPerSec, widgetHeight);
      }

      /*
       * TODO:MainGraph
       * Padding: we are using the radius of the largest shown dot for top and right. do we care about the case where that large dot is not near the top or right?  i.e., do we shift the padding depending upon the nearest dot to the edge?
       * Padding: what if max dot radius is larger then 'time bar' or 'temp bar'?
       * IS THIS NECESSARY?  FIND AN EXAMPLE WHERE IT MATTERS -> Draw invert the order of the 2 for loops so that entire lines are drawn at once. this will allow for depth of lines to be set
       *
       * TODO:Dots
       * Rain, Sleet, Snow, Hail icons for PrecipProbability
       * visibility icon
       * pressure icon
       * hummidity icon
       *
       * TODO segments
       * Color precipProbability segments for precipIntensiy
       *
       * TODO Work List:
       * Toggle between daily and hourly.  work in progress figuring how hiding and showing of config options
       * Persist config options
       * I don't like config.global.type being H or D. seems clunky.
       * Background image configuration to simulate phone home screen widget.
       * Show 'alerts' in bottom left corner
       * do we need seperate font sizes for time and temp?
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
       * Add 'themes'
       * Add save/edit/delete theme capability
       *
       */

      for (let c of this.theme.options) {
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
              DotDrawer.simple(this.ctx, today[c.title].x, today[c.title].y, (c.dot.radius.global ? this.theme.globals.dot.radius : c.dot.radius.value), (c.dot.color.global ? this.theme.globals.dot.color.rgba : c.dot.color.value.rgba));
          }

          //Don't draw segment for precipProbability when yesterday was 0%.
          if ((c.segment.show.global ? this.theme.globals.segment.show : c.segment.show.value) && s.hasSegment && !(c.title === 'precipProbability' && yesterday.data.precipProbability === 0)) {
            this.ctx.fillStyle = (c.segment.color.global ? this.theme.globals.segment.color.rgba : c.segment.color.value.rgba);
            this.ctx.beginPath();
            this.ctx.arc(s.start.point.x, s.start.point.y, (c.dot.radius.global ? this.theme.globals.dot.radius : c.dot.radius.value), s.start.from, s.start.to, false);
            this.ctx.arc(s.end.point.x, s.end.point.y, (c.dot.radius.global ? this.theme.globals.dot.radius : c.dot.radius.value), s.end.from, s.end.to, false);
            this.ctx.fill();
            this.ctx.closePath();
          }
        }
      }
    }
  }
}
