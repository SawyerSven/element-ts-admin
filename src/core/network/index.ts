import * as API from '../../api/instance';
import axiosInstance from './base.config';

export default {
  _BASE_URL: axiosInstance._BASE_URL,
  _UPLOAD_URL: axiosInstance._UPLOAD_URL,
  _API_URL: axiosInstance._API_URL,
  ...API
};
