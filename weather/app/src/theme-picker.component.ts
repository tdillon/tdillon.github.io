import {Theme} from "./Theme.interface";
import {ConfigService} from "./config.service";
import {Component, Output, EventEmitter} from 'angular2/core';


@Component({
  selector: 'theme-picker',
  template: `
    <div class="list-group">
      <input type=button [class.active]="t===current" class="list-group-item" *ngFor="#t of themes" (click)="onSelect(t)" [value]="t.name">
    </div>
  `
})
export class ThemePickerComponent {
  @Output() themePicked: EventEmitter<Theme> = new EventEmitter();
  themes: Array<Theme> = [];
  current:Theme;

  constructor(_config: ConfigService) {
    _config.themes.subscribe(t => this.themes.push(t));
  }

  onSelect(theme:Theme){
    this.current = theme;
    this.themePicked.emit(theme);
  }
}
