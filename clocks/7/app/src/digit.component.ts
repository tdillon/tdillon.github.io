import {Component, Input, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef} from 'angular2/core'
import {Seven, Digit} from 'seven-segment/7'


@Component({
  selector: 'digit',
  template: `<canvas #canvas></canvas>`
})
export class DigitComponent implements AfterViewInit {
  @Output() refreshed: EventEmitter<any> = new EventEmitter();
  @ViewChild('canvas') canvasElementReference: ElementRef;
  @Input() value = Digit.BLANK;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  seven: Seven;

  ngOnChanges() {
    if (this.canvas) {
      this.draw();
    }
  }

  ngAfterViewInit() {
    this.seven = new Seven();
    this.canvas = this.canvasElementReference.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.draw();
  }

  draw() {
    try {
      this.seven.digit = this.value;
    } catch (e) {
      this.seven.digit = Digit.BLANK;
    }
    this.canvas.width = this.seven.width;
    this.canvas.height = this.seven.height;
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    for (let s of this.seven.segments) {
      this.ctx.beginPath();
      this.ctx.moveTo(s.points[0].x, s.points[0].y);
      for (let p of s.points) {
        this.ctx.lineTo(p.x, p.y);
      }
      this.ctx.fillStyle = `rgba(255,255,255, ${s.on ? '1' : '.2'})`;
      this.ctx.closePath();
      this.ctx.fill();
    }
  }

  refresh() {
    this.refreshed.emit(null);
  }
}
