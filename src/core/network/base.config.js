import axios from 'axios';
import Vue from 'vue';

/*引入elementUI的全局loading组件*/
import { Loading, Message as message } from 'element-ui';

let loadingInstance;
let loadingOptions = {
  lock: true,
  text: 'Loading',
  spinner: 'el-icon-loading',
  background: 'rgba(0,0,0,.7)'
};

/*服务器地址*/
const SERVER_URL_MAP = {
  BASAL_URL: 'http://192.168.4.8:8080', // 内网基盘服务
  // BASAL_URL: 'http://192.168.4.11:8070', // 内网东哥地址
  // BASAL_URL: 'http://47.103.89.150:8080', // 外网基盘服务
  // BASAL_URL: 'http://47.102.253.35:8080', // 外网基盘服务

  API_URL: 'http://192.168.4.8:8070', // 内网业务服务
  // API_URL: 'http://192.168.4.11:8070', // 内网东哥业务服务
  // API_URL: 'http://47.103.89.150:8080', // 外网业务服务
  // API_URL: 'http://47.102.253.35:8080', // 外网业务服务

  UPLOAD_URL: '/file/upload'
};
const BASAL_URL = SERVER_URL_MAP.BASAL_URL;
const API_URL = SERVER_URL_MAP.API_URL;
const UPLOAD_URL = SERVER_URL_MAP.UPLOAD_URL;
const TEMP_URL = SERVER_URL_MAP.TEMP_URL;

/*创建一个axios实例*/
let axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 20000 //ms
  /*headers: {
      'lang': language,
      'channelId':1
    }*/
});

/*
 * 拦截器：
 * send请求前拦截或添加/修改一些参数；
 * 响应获取后then与catch处理前对响应进行预处理
 * */

/*为axios实例添加请求拦截器*/
axiosInstance.interceptors.request.use(
  function(req) {
    let token = window.sessionStorage.getItem('token') || undefined;
    if (token) {
      req.headers.token = token;
    }
    //这里写拦截操作
    /*if (req.url.includes('maps.google.cn/maps/api/geocode')) {
          delete req.headers.language
        }*/
    if (!req.headers.noloading)
      loadingInstance = Loading.service(loadingOptions);
    return req;
  },
  function(error) {
    loadingInstance.close();
    return Promise.reject(error);
  }
);

/*为axios实例添加响应拦截器*/
axiosInstance.interceptors.response.use(
  function(response) {
    setTimeout(() => {
      loadingInstance.close();
      if (response.data.code !== 200) {
        message & message(response.data.message);
        if (
          response.data.code === 110005 ||
          response.data.code === 110006 ||
          response.data.code === 1003
        ) {
          sessionStorage.removeItem('token');
        }
        return Promise.reject(response.data);
      }
    }, 300);
    return response.data;
  },
  function(error) {
    loadingInstance.close();
    return Promise.reject(error);
  }
);

axiosInstance._BASE_URL = BASAL_URL;
axiosInstance._API_URL = API_URL;
axiosInstance._UPLOAD_URL = UPLOAD_URL;
axiosInstance._TEMP_URL = TEMP_URL;
// axiosInstance._request = request;

export default axiosInstance;
