import {Color} from "./Color"
import {WidgetType} from "./WidgetType"
import {ConfigOption, GlobalOptions} from "./Option.interface"


export enum ThemeType {
  Preset, Custom
}


export interface Theme {  //TODO i don't like the name 'Theme'.  These are more like 'Widget Settings'.
  name: string;
  themeType: ThemeType;
  widgetType: WidgetType;
  daylight?: Color;
  /** These options apply to all 'options' in this.options for any property that prop.global === true */
  globals: GlobalOptions;
  options: Array<ConfigOption>;
}
