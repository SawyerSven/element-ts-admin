import axios from './base.config';
import { AxiosRequestConfig } from 'axios';

export function get(url: string, data: any = null, headers: any = null) {
  return instantiateRequest('get', url, data, headers);
}

export function post(url: string, data: any = null, headers: any = null) {
  return instantiateRequest('post', url, data, headers);
}
export function upload(url: string, data: any, headers: any) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, headers)
      .then((res: object) => {
        resolve(res);
      })
      .catch((err: Error) => {
        reject(err);
      });
  });
}

function instantiateRequest(
  method: string,
  url: string,
  data: any,
  headers: any
) {
  return new Promise((resolve, reject) => {
    axios({ method, url, data, headers } as AxiosRequestConfig)
      .then((res: object) => {
        resolve(res);
      })
      .catch((err: Error) => {
        reject(err);
      });
  });
}
