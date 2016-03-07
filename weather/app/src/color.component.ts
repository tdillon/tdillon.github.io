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
      <div class=row>
        <div [class.col-xs-3]="showalpha" [class.col-xs-4]="!showalpha">Red: {{color.r}}</div>
        <div [class.col-xs-3]="showalpha" [class.col-xs-4]="!showalpha">Green: {{color.g}}</div>
        <div [class.col-xs-3]="showalpha" [class.col-xs-4]="!showalpha">Blue: {{color.b}}</div>
        <div [class.col-xs-3]="showalpha" [class.col-xs-4]="!showalpha" *ngIf="showalpha">Alpha: {{color.a}}</div>
      </div>
      <div class="form-group row">
        <div [class.col-xs-3]="showalpha" [class.col-xs-4]="!showalpha"><input #red (input)="refresh(color.r = red.value * 1)" [value]=color.r [disabled]=disabled type=range min=0 max=255 step=1 class=form-control></div>
        <div [class.col-xs-3]="showalpha" [class.col-xs-4]="!showalpha"><input #green (input)="refresh(color.g = green.value * 1)" [value]=color.g [disabled]=disabled type=range min=0 max=255 step=1 class=form-control></div>
        <div [class.col-xs-3]="showalpha" [class.col-xs-4]="!showalpha"><input #blue (input)="refresh(color.b = blue.value * 1)" [value]=color.b [disabled]=disabled type=range min=0 max=255 step=1 class=form-control></div>
        <div [class.col-xs-3]="showalpha" [class.col-xs-4]="!showalpha" *ngIf="showalpha"><input #alpha (input)="refresh(color.a = alpha.value * 1)" [value]=color.a [disabled]=disabled type=range min=0 max=1 step=".1" class=form-control></div>
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
