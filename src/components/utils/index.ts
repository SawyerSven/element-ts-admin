export const isType = (target: any): string =>
  Object.prototype.toString.call(target);

export const isObject = (target: any) => {
  return isType(target) === '[object Object]';
};

export const isNumber = (target: any) => typeof target === 'number';

export const isString = (traget: any) => typeof traget === 'string';

export const isArray = (target: any) => {
  return isType(target) === '[object Array]';
};
