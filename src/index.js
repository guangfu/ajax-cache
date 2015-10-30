import http from './http.js';
import Storage from './storage.js';
import Promise from './lib/promise.js';
import util from './lib/util.js';

let storage = new Storage('ajaxCache');
  
function createArgHandler(handler) {
  if (typeof handler !== 'function') return handler;

  return (...args) => {
    if (args.length === 1 && typeof args[0] === 'object') {
        Object.keys(args[0]).forEach((key) => {
            handler(key, args[0][key]);
        });
    } else {
      handler(args[0], args[1]);
    }

    return Cache;
  }
}

let requestOpts = {
  headers: {},
  data: {},
  url: '',
  method: 'get'
}

let mappings = {},
    isClearCache = false,
    beforeSendCb = null;

const Cache = {
  config(options) {
    if (typeof options !== 'object') return;
  },

  connect: createArgHandler((key, value) => {
    mappings[key] = value
  }),

  header: createArgHandler((key, value) => {
    requestOpts.headers[key] = value;
  }),

  data: createArgHandler((key, value) => {
    requestOpts.data[key] = value;
  }),

  beforeSend(callback) {
    beforeSendCb = callback;

    return this;
  },

  http(options = {}) {
    Object.keys(options).reduce((mem, key) => {
      mem[key] = options[key];
    }, requestOpts)

    return this.end();
  },

  //清除对应的缓存
  clearCache(cb) {
    isClearCache = (typeof cb === 'function') ? cb.call(null) : true;

    return this;
  },

  end() {

    return new Promise((resolve, reject) => {
      let method = requestOpts.method,
          data = requestOpts.data,
          url = requestOpts.url,
          cache;

      //判断是否设置缓存
      if (mappings[url]) {

        //缓存参数只支持一层object对象
        if (method === 'get' || method === 'jsonp') {
          requestOpts.url = url = Object.keys(data).sort((value1, value2) => value1 - value2).reduce((mem, key) => {
            return mem + '/' + data[key];
          },  mappings[url])

        }
      }

      //判断是否需要清除对应的缓存，并缓存新的结果
      isClearCache && storage.removeItem(url);

      cache = storage.getItem(url) || undefined;

      cache ? resolve(util.parse(cache), 200) : 
        http(requestOpts).then((xhr) => {
          storage.setItem(url, xhr.responseText);
          resolve.call(null, util.parse(xhr.responseText), xhr.status)
        }).catch((xhr)=> {
          console.log('error xhr', xhr)
          reject.call(null, util.parse(xhr.responseText, xhr.status));
        })
    })    
  },

  fetch(method) {
    return (url) => {
      requestOpts.method = method;
      requestOpts.url = url;

      return this;
    }
  },

}

let methods = ['get', 'put', 'post', 'patch', 'delete', 'jsonp'];

export default methods.reduce((mem, method) => {
  mem[method] = mem.fetch(method);
  return mem;
}, Cache);

