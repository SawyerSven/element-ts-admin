import axios, { AxiosInstance, AxiosResponse } from 'axios';
import URL_MAP from './network.address';

/* 引入elementUI的全局Loading组件 */
import { Loading, Message as message } from 'element-ui';
import { ElMessageComponent } from 'element-ui/types/message';

let loadingInstance: any;
const loadingOptions = {
  lock: true,
  text: 'Loading',
  spinner: 'el-icon-loading',
  background: 'rgba(0,0,0,.7)'
};

interface SelfAxiosInstance extends AxiosInstance {
  _BASE_URL?: string;
  _API_URL?: string;
  _UPLOAD_URL?: string;
}

/* axios实例 */
const axiosInstance: SelfAxiosInstance = axios.create({
  baseURL: URL_MAP.BASE_URL,
  timeout: 20000
});

/*
 * 拦截器：
 * send请求前拦截或添加/修改一些参数；
 * 响应获取后then与catch处理前对响应进行预处理
 * */

/*为axios实例添加请求拦截器*/
axiosInstance.interceptors.request.use(
  (req: any) => {
    const token = window.sessionStorage.getItem('token') || undefined;
    if (token) {
      req.headers.token = token;
    }
    // 这里写拦截操作
    /*if (req.url.includes('maps.google.cn/maps/api/geocode')) {
          delete req.headers.language
        }*/
    loadingInstance = Loading.service(loadingOptions);
    return req;
  },
  (error: Error) => {
    loadingInstance.close();
    return Promise.reject(error);
  }
);

/*为axios实例添加响应拦截器*/
axiosInstance.interceptors.response.use(
  (response: any): any => {
    loadingInstance.close();
    if (response.data.code !== 200) {
      // (message as any) &&
      message(response.data.message);
      if (
        response.data.code === 110005 ||
        response.data.code === 110006 ||
        response.data.code === 1003
      ) {
        sessionStorage.removeItem('token');
      }
      return Promise.reject(response.data);
    }
    return response.data;
  },
  (error: Error) => {
    loadingInstance.close();
    return Promise.reject(error);
  }
);

axiosInstance._BASE_URL = URL_MAP.BASE_URL;
axiosInstance._API_URL = URL_MAP.API_URL;
axiosInstance._UPLOAD_URL = URL_MAP.UPLOAD_URL;

export default axiosInstance;
