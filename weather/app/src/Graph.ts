import {DataBlock, DataPoint, ForecastIO} from './forecast.io.interface';
import {Day} from "./Day";
import {ConfigService, ConfigOption} from "./config.service";
import {Injectable} from "angular2/core";
import {SegmentGeometry} from "./SegmentGeometry";
import {Ranges} from "./Ranges";
import {DotDrawer} from './DotDrawer'


@Injectable()
export class Graph {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  data: ForecastIO;
  /** width to height */
  widgetRatio = 2;

  constructor(private config: ConfigService) {
  }

  init() {
    this.canvas = <HTMLCanvasElement>document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.height = document.documentElement.clientHeight;
    this.canvas.width = document.documentElement.clientWidth;
  }

  render() {
    this.widgetRatio *= 1;

    let widgetWidth = this.canvas.width;
    let widgetHeight = widgetWidth / this.widgetRatio;;
    let fontSize = 12;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //TODO draw background image?
    this.ctx.fillStyle = '#333';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.font = `${fontSize}px 'Roboto', 'Consolas', sans-serif`;
    let maxTempTextWidth = this.ctx.measureText('125').width;  //from testing ctx.measureText 125 seems to be as wide as any other reasonable temperature

    let PADDING = {
      left: maxTempTextWidth,
      top: this.config.maxDotRadius,
      right: this.config.maxDotRadius,
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


    let db = (this.config.global.type === 'd' ? this.data.daily : this.data.hourly);
    let ranges = new Ranges(db, this.config);


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
      this.ctx.fillText(i.toString(), widgetWidth - maxTempTextWidth / 2, PADDING.top + (ranges.windSpeed.max - i) * pxPerMPH, maxTempTextWidth);
    }

    //TODO other scales, how to generalize them? how to show them?



    let yesterday: Day, today: Day;

    for (let i = 0, d: DataPoint; d = db.data[i]; ++i) {
      yesterday = today;
      today = new Day(d, ranges, PADDING.left + i * (this.config.global.type === 'h' ? hourWidth : dayWidth), PADDING.left + (i + 1) * (this.config.global.type === 'h' ? hourWidth : dayWidth), PADDING.top, PADDING.top + graphHeight);  //TODO change with padding

      //Daylight bars
      if (this.config.daylight.show) {
        this.config.daylight.color.a = d.cloudCover;
        this.ctx.fillStyle = this.config.daylight.color.rgba;
        this.ctx.fillRect(today.sunriseX, today.sunTop, today.sunWidth, today.sunHeight);
      }

      //draw times
      this.ctx.fillStyle = '#fff';
      this.ctx.textBaseline = 'bottom';
      this.ctx.textAlign = 'center';
      if (this.config.global.type === 'h') {
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
       * Draw invert the order of the 2 for loops so that entire lines are drawn at once. this will allow for depth of lines to be set
       *
       * TODO:Hourly
       * Moon: draw moon on hourly at midnight. are their any other daily options that we want to show on hourly?
       *
       * TODO:Dots
       * Wind Speed: direction
       * Moon: draw icon as moon phase. how to abstract that out for others? e.g., rain drops, or snow flakes, or visibility eye?
       * PrecipProbability: i don't want to show a dot/segment if it is 0. Could that be the case for other options?
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
       *
       * TODO:Themes
       * Add 'themes'
       * Add save/edit/delete theme capability
       *
       */

      for (let o of this.config.options) {
        let c = <ConfigOption>this.config[o.title];
        let s = new SegmentGeometry(c, this.config.global, (yesterday ? yesterday[o.title].x : null), (yesterday ? yesterday[o.title].y : null), today[o.title].x, today[o.title].y);
        if ((c.show.global && this.config.global.show.value) || (!c.show.global && c.show.value)) {
          switch (o.title) {
            case 'moon':
              DotDrawer.moon(this.ctx, today[o.title].x, today[o.title].y, (c.dot.radius.global ? this.config.global.dot.radius.value : c.dot.radius.value), (c.dot.color.global ? this.config.global.dot.color.value.rgba : c.dot.color.value.rgba), d.moonPhase);
              break;
            default:
              DotDrawer.simple(this.ctx, today[o.title].x, today[o.title].y, (c.dot.radius.global ? this.config.global.dot.radius.value : c.dot.radius.value), (c.dot.color.global ? this.config.global.dot.color.value.rgba : c.dot.color.value.rgba));
          }

          if ((c.segment.show.global ? this.config.global.segment.show.value : c.segment.show.value) && s.hasSegment) {
            this.ctx.fillStyle = (c.segment.color.global ? this.config.global.segment.color.value.rgba : c.segment.color.value.rgba);
            this.ctx.beginPath();
            this.ctx.arc(s.start.point.x, s.start.point.y, (c.dot.radius.global ? this.config.global.dot.radius.value : c.dot.radius.value), s.start.from, s.start.to, false);
            this.ctx.arc(s.end.point.x, s.end.point.y, (c.dot.radius.global ? this.config.global.dot.radius.value : c.dot.radius.value), s.end.from, s.end.to, false);
            this.ctx.fill();
          }
        }
      }
    }
  }
}
