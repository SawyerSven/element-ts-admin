import { isNumber, isString } from './index';

/* 转换传入的String或者number值为可以用单位 */
export function filterBlockUnit(unit: number | string): string {
  if (isString(unit) && !Number(unit)) {
    return unit as string;
  } else {
    return `${unit}px`;
  }
}
