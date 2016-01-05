import Promise from './lib/promise.js';
import util from './lib/util.js'

export default function(url, data = {}) {
  let callback = '_jonsp' + Math.random().toString(36).substr(2);

  data = Object.keys(data).reduce((mem, key) => {
    mem[key] = data[key];
    return mem;
  }, { 'callback': callback })
  
  url = util.serialiseUrl(url, data);

  return new Promise((resolve, reject)=> {
    let src = document.createElement('script'), data = null, response = {};

    src.src = url;
    src.type = 'text/javascript';
    src.async = true;

    window[callback] = (data) => {data = data}

    let handler = (event) => {
      delete window[callback];
      document.body.removeChild(src);

      response.status = event.type === 'error' ? 404 : 200;
      response.responseText = data;
      response.xhr = null;

      event.type === 'error' ? reject(response) : resolve(response);
    }

    src.onload = src.onerror = handler;

    document.body.appendChild(src);
  })
}