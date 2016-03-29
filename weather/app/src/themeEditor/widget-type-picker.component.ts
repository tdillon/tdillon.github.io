import {WidgetType} from "../WidgetType";
import {Component, Output, EventEmitter, Input} from 'angular2/core';


@Component({
  selector: 'widget-type-picker',
  templateUrl: `src/themeEditor/widget-type-picker.component.html`,
  styleUrls: ['src/themeEditor/picker-header.css']
})
export class WidgetTypePickerComponent {
  @Output() focus: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<WidgetType> = new EventEmitter();
  @Output() save: EventEmitter<WidgetType> = new EventEmitter();
  @Output() update: EventEmitter<WidgetType> = new EventEmitter();

  @Input() type: WidgetType;

  WidgetType = WidgetType;

  constructor() {
  }

  onFocus() {
    this.focus.emit(null);
  }

  onCancel() {
    //TODO send back original value
    this.cancel.emit(this.type);
  }

  onSave() {
    this.save.emit(this.type);
  }

  onUpdate() {
    this.update.emit(this.type);
  }
}
