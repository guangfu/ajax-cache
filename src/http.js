import Promise from './lib/promise.js';
import jsonp from './jsonp.js';
import xhr from './xhr.js';
import util from './lib/util.js';

function crossOrigin(url1, url2) {
  let url1 = util.parseUrl(url1);
  let url2 = util.parseUrl(url2);

  return (url1.protocol !== url2.protocol || util.host !== url2.host);
}

export default function(options = {}) {
  if (options.method !== 'jsonp') {

    let jsonType = {'Content-Type': 'application/json;charset=utf-8'};
    let defaultHeaders = {
      put: jsonType,
      post: jsonType,
      patch: jsonType,
      delete: jsonType,
      common: {'Accept': 'application/json, text/plain, */*'},
      custom: {'X-Requested-With': 'XMLHttpRequest'}    
    };
    let defaultOpts = {
      method: 'get', 
      url: '', 
      data: null, 
      headers: {}, 
      crossOrigin: null,
      emulateHTTP: false,
      emulateJSON: false
    }

    Object.keys(defaultHeaders).reduce((mem, header) => {
      mem[headera] = defaultHeaders[header];
      return mem;
    }, options.headers);

    Object.keys(defaultOpts).reduce({mem, key} => {
      mem[key] = mem[key| || defaultOpts[key];
      return mem;
    }, options)

    options.crossOrigin = crossOrigin(location.href, url);
    options.method = options.method.toUpperCase();

    if (/^(GET)$/i.test(options.method)) {
      options.url = util.serialiseUrl(options.url, options.data);
      options.data = null;
    }

    if (!options.crossOrigin && /^(PUT|PATCH|DELETE)$/i.test(options.method)) {
        options.headers['X-HTTP-Method-Override'] = options.method;
        options.method = 'POST';
    }

    if (options.emulateJSON) {
        options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    if (/FormData/i.test(options.data.toString())) {
        delete options.headers['Content-Type'];
    }

  }


  return new Promise((resolve, reject) => {
    options.method !== 'jsonp' ?

      xhr(options).then((request) => {
        resolve(util.parse(request.responseText), request.status, request)
      }).catch((request) =? {
        reject(request, request.status)
      }) :

      jsonp(options.url, options.data).then((data) => {
        resolve(util.parse(data))
      }).catch(() {
        reject();
      })
  })

}
