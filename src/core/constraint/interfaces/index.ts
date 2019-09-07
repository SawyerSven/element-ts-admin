import { Form } from 'element-ui';

type width = string | number;

export interface FilterObject {
  label: string;
  type: string;
  prop: string;
  'label-width'?: width;
  width?: width;
  placeholder?: string;
  options?: any[];
  clearable?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  dateConfig?: DateConfig;
}

export interface DateConfig {
  type: string;
  format?: string;
  'unlink-panels'?: boolean;
  'picker-options'?: object;
  'range-separator'?: string;
  'start-placeholder'?: string;
  'end-placeholder'?: string;
}
