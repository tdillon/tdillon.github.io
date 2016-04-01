import {WidgetType} from "../WidgetType";
import {Component, Output, EventEmitter, Input} from 'angular2/core';


@Component({
  selector: 'widget-type-picker',
  host: { '[class.picker]': 'true' },
  templateUrl: `src/themeEditor/widget-type-picker.component.html`,
  styles: [':host{display: block;}']
})
export class WidgetTypePickerComponent {
  @Output() focus: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<WidgetType> = new EventEmitter();
  @Output() save: EventEmitter<WidgetType> = new EventEmitter();
  @Output() update: EventEmitter<WidgetType> = new EventEmitter();

  @Input() type: WidgetType;

  oldType: WidgetType;
  WidgetType = WidgetType;

  onFocus() {
    this.oldType = this.type;
    this.focus.emit(null);
  }

  onCancel() {
    this.cancel.emit(this.oldType);
  }

  onSave() {
    this.save.emit(this.type);
  }

  onUpdate() {
    this.update.emit(this.type);
  }
}
