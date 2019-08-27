import * as API from './instance';
import axiosInstance from './base.config';

export default {
    _BASE_URL: axiosInstance._BASE_URL,
    _UPLOAD_URL:axiosInstance._UPLOAD_URL,
    _TEMP_URL:axiosInstance._TEMP_URL,
    ...API
};