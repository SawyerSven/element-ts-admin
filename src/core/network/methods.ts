import axios from './base.config';

export function get(url, data = null) {
  return instantiateRequest('get', url, data);
}

export function post(url, data = null, headers = null) {
  console.log(url);
  return instantiateRequest('post', url, data, headers);
}
export function upload(url, data, headers) {
  console.log(headers);
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, headers)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function instantiateRequest(method, url, data, headers) {
  return new Promise((resolve, reject) => {
    axios({ method, url, data, headers })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
}
