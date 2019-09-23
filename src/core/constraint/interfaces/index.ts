import { Form } from 'element-ui';
import { AxiosBasicCredentials } from 'axios';

type width = string | number;
type SwitchValue = string | number | boolean;

export interface BaseFormComponent {
  label: string;
  type: string;
  prop: string;
  disabled?: boolean;
  'label-width'?: width;
  width?: width;
}

export interface InputComponent extends BaseFormComponent {
  placeholder?: string;
  clearable?: boolean;
}
export interface RadioComponent extends BaseFormComponent {
  options?: any[];
}
export interface CheckboxComponet extends BaseFormComponent {
  trueValue: number | string;
  falseValue: number | string;
  text?: string;
  options?: any[];
  min?: number;
  max?: number;
}
export interface SelectComponent extends BaseFormComponent {
  clearable?: boolean;
  multiple?: boolean;
  options?: any[];
}
export interface DateComponent extends BaseFormComponent {
  dateConfig?: DateConfig;
}
export interface TextComponent extends BaseFormComponent {
  class?: string;
}
export interface SwitchComponent extends BaseFormComponent {
  width?: number;
  activeText?: string;
  inactiveText?: string;
  activeValue: SwitchValue;
  inactiveValue: SwitchValue;
}
export type FormComponents =
  | DateComponent
  | InputComponent
  | RadioComponent
  | CheckboxComponet
  | SelectComponent
  | TextComponent
  | SwitchComponent;

export interface DateConfig {
  type: string;
  format?: string;
  'unlink-panels'?: boolean;
  'picker-options'?: object;
  'range-separator'?: string;
  'start-placeholder'?: string;
  'end-placeholder'?: string;
}
