import {Point} from "./Point";

export class Box {
  private _left: number;
  private _right: number;
  private _top: number;
  private _bottom: number;
  private _width: number;
  private _height: number;
  private _center: Point;

  /*
   *
   * @param {Point} point The top left corner of the position.
   */
  constructor(left = 0, top = 0, width = 0, height = 0) {
    this._center = new Point();
    this._left = left;
    this._top = top;
    this.width = width;
    this.height = height;
  }

  set width(w: number) {
    this._width = w;
    this._right = this._left + this._width;
    this.updateCenter();
  }

  set height(h: number) {
    this._height = h;
    this._bottom = this._top + this._height;
    this.updateCenter();
  }

  set right(r: number) {
    this._right = r;
    this._width = this._right - this._left;
    this.updateCenter();
  }

  set bottom(b: number) {
    this._bottom = b;
    this._height = this._bottom - this._top;
    this.updateCenter();
  }

  private updateCenter() {
    this._center.x = this.left + this.width / 2;
    this._center.y = this.top + this.height / 2;
  }

  get top(): number { return this._top; }
  get left(): number { return this._left; }
  get width(): number { return this._width; }
  get height(): number { return this._height; }
  get right(): number { return this._right; }
  get bottom(): number { return this._bottom; }
  get center(): Point { return this._center; }
}
