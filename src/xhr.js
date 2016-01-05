import Promise from './lib/promise.js';

export default function({ method = 'GET', url = '', data = null, headers = {}, crossOrigin = false } = {}) {
  let request = new XMLHttpRequest();

  if (window.XDomainRequest && crossOrigin) {
      request = new XDomainRequest();
  }

  return new Promise((resolve, reject) => {
    request.open(method, url, true);

    Object.keys(headers).forEach((header)=> {
      request.setRequestHeader(header, headers[header]);
    })

    request.onload = request.onabort = request.onerror = (event) => {
      (event.type === 'load' && request.status && request.status >= 200 && request.status < 300) ?
        resolve(request) : reject(request);
    };

    request.send(data);

  })
}