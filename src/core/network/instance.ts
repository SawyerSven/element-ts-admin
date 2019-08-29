import { get, post } from './methods';
import * as API from './api';

type MethodInstance = (data: any, header: any) => Promise<any>;

// 机构注册
export const set_register_org: MethodInstance = (data: any, header?: object): Promise<any> =>
  post(API.SET_REGISTER_ORG, data, header);

export const get_dict: MethodInstance = (data: any, header?: object): Promise<any> =>
  post(API.GET_DICT, data, header);
