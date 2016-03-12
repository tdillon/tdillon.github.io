import {Component, Output, EventEmitter, Input} from 'angular2/core';
import {Color} from "./Color";


@Component({
  selector: 'color',
  templateUrl: `src/color.component.html`,
  styleUrls: ['src/arrows.css'],
})
export class ColorComponent {
  @Output() refreshed: EventEmitter<Color> = new EventEmitter();

  @Input() color = Color.white;
  @Input() disabled = false;
  @Input() title = 'Color';
  @Input() showalpha = true;

  constructor() {
  }

  refresh() {
    this.refreshed.emit(this.color);
  }
}
