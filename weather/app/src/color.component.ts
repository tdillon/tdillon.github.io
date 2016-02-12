import {Component, Output, EventEmitter, Input} from 'angular2/core';
import {Color} from "./Color";


@Component({
  selector: 'color',
  template: `
  <div class="panel panel-default">
    <div class="panel-heading" (click)="show= !show">
      <span [class.down]="!show" [class.up]="show"></span>
      {{title}}:
      <span [ngSwitch]="showalpha">
        <template [ngSwitchWhen]="true">{{color.rgba}}</template>
        <template [ngSwitchWhen]="false">{{color.rgb}}</template>
      </span>
    </div>
    <div class="panel-body" [class.hide]="!show">
      <div class="form-group row">
        <div class=col-xs-4>Red: {{color.r}}</div>
        <div class=col-xs-8><input #red (input)="refresh(color.r = red.value * 1)" [value]=color.r [disabled]=disabled type=range min=0 max=255 step=1 class=form-control></div>
      </div>
      <div class="form-group row">
        <div class=col-xs-4>Green: {{color.g}}</div>
        <div class=col-xs-8><input #green (input)="refresh(color.g = green.value * 1)" [value]=color.g [disabled]=disabled type=range min=0 max=255 step=1 class=form-control></div>
      </div>
      <div class="form-group row">
        <div class=col-xs-4>Blue: {{color.b}}</div>
        <div class=col-xs-8><input #blue (input)="refresh(color.b = blue.value * 1)" [value]=color.b [disabled]=disabled type=range min=0 max=255 step=1 class=form-control></div>
      </div>
      <div class="form-group row" *ngIf="showalpha">
        <div class=col-xs-4>Alpha: {{color.a}}</div>
        <div class=col-xs-8><input #alpha (input)="refresh(color.a = alpha.value * 1)" [value]=color.a [disabled]=disabled type=range min=0 max=1 step=".1" class=form-control></div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['src/arrows.css'],
})
export class ColorComponent {
  @Output() refreshed:EventEmitter<Color> = new EventEmitter();

  @Input() color = Color.white;
  @Input() disabled:boolean = false;
  @Input() title = 'Color';
  @Input() showalpha = true;

  constructor() {
  }

  refresh() {
    this.refreshed.emit(this.color);
  }
}
