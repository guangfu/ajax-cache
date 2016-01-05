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

//重置选项
function reset() {
  requestOpts = oriRequestOpts;
  mappings = oriMappings;
  isClearCache = false;
  beforeSendCb = null;
  timeoutDuration = null;
}

let requestOpts = {         //请求头
  headers: {},
  data: {},
  url: '',
  method: 'get'
}

let mappings = {},             //请求地址的映射
    isClearCache = false,      //是否清除缓存
    beforeSendCb = null,      //请求前的回调
    timeoutDuration = null,   //超时时间
    needCache = false,         //post需要增加缓存
    withCredentials;          //cookie跨域

let oriRequestOpts = util.clone(requestOpts),
    oriMappings = util.clone(mappings);

const Cache = {
  config(options) {
    if (typeof options !== 'object') return;
    withCredentials = options.withCredentials;

    return this;
  },

  setStorageMode(mode) {
    storage.use(mode);

    return this;
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

  timeout(duration) {
    timeoutDuration = duration || 10000;

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

  cache() {
    needCache = true;

    return this;
  },

  end() {

    return new Promise((resolve, reject) => {
      let method = requestOpts.method,
          data = requestOpts.data,
          url = requestOpts.url,
          cache, xhr;

      if (method === 'get' || method === 'jsonp') {
        requestOpts.mappingUrl = url;
      }

      if (method === 'post' && needCache) {
        requestOpts.mappingUrl = url = Object.keys(data).sort((value1, value2) => value1 - value2).reduce((mem, key) => {
          return mem + '/' + data[key];
        },  url)
      }

      //加上跨域头
      withCredentials && (requestOpts.withCredentials = withCredentials);

      //发送之前调用beforeSend回调函数
      (typeof beforeSendCb === 'function') && beforeSendCb.call(null);

      //判断是否需要清除对应的缓存，并缓存新的结果
      isClearCache && storage.removeItem(url);

      cache = storage.getItem(url) || undefined;

      if (cache) {
        resolve(util.parse(cache), 200)
      } else {
        let promise = http(util.clone(requestOpts));
        xhr = promise.xhr;
        method = promise.method.toLowerCase();
        let mappingUrl = promise.mappingUrl;

        promise.then((xhr) => {
          if (mappingUrl) {
            storage.setItem(mappingUrl, xhr.responseText);
            resolve.call(null, util.parse(xhr.responseText), xhr.status)
          } else {
            resolve.call(null, util.parse(xhr.responseText), xhr.status)
          }
        }).catch((xhr)=> {
          reject.call(null, new Error(xhr.statusText));
        })
      }

      //超时处理
      timeoutDuration && setTimeout(() => {
        xhr.abort();
      }, timeoutDuration)

      //重置选项，防止不同请求的配置篡改
      reset();
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
