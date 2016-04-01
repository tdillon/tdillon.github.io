import {Component, Output, EventEmitter, Input} from 'angular2/core';


@Component({
  selector: 'boolean-picker',
  host: {'[class.picker]': 'true'},
  templateUrl: `src/themeEditor/boolean-picker.component.html`,
  styles:[`
    :host{display: block;}
    header > h1 { display:flex; flex-direction: row; }
    header > h1 > span { flex-grow:1; }`
  ]
})
export class BooleanPickerComponent {
  @Output() update: EventEmitter<boolean> = new EventEmitter();

  @Input() disabled = false;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() value = false;

  onUpdate() {
    this.update.emit(this.value);
  }
}
