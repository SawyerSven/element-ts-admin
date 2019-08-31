export const isType = (target: any): string => Object.prototype.toString.call(target);

export const isObject = (target: any) => {
  return isType(target) === '[object Object]';
};

export const isArray = (target: any) => {
  return isType(target) === '[object array]';
};
