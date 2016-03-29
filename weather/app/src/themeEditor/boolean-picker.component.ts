import {Component, Output, EventEmitter, Input} from 'angular2/core';


@Component({
  selector: 'boolean-picker',
  templateUrl: `src/themeEditor/boolean-picker.component.html`,
  styleUrls: ['src/themeEditor/picker-header.css']
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
