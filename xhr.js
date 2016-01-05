import Promise from './lib/promise.js';
import util from './lib/util.js';

export default function({ method = 'GET', url = '', data = null, headers = {}, crossOrigin = false, withCredentials = false, mappingUrl = '' } = {}) {
  let request = new XMLHttpRequest();

  if (window.XDomainRequest && crossOrigin) {
      request = new XDomainRequest();
  }

  if (withCredentials) {
    request.withCredentials = true;
  }

  let promise = new Promise((resolve, reject) => {
    request.open(method, url, true);

    Object.keys(headers).forEach((header)=> {
      request.setRequestHeader(header, headers[header]);
    })

    request.onload = request.onabort = request.onerror = (event) => {
      (event.type === 'load' && request.status && request.status >= 200 && request.status < 300) ?
        resolve(request) : reject(request);
    };

    request.send(util.stringify(data));

  })

  promise.xhr = request;
  promise.method = method;
  promise.mappingUrl = mappingUrl;

  return promise;
}
