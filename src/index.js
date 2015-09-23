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

    return this;
  }
}

const Cache = {
  config(options) {
    if (typeof options !== 'object') return;
  },

  connect: createArgHandler((key, value) => {
    this.mappings[key] = value
  }),

  headers: createArgHandler((key, value) => {
    this.requestOpts.headers[key] = value;
  }),

  data: createArgHandler((key, value) => {
    this.requestOpts.data[key] = value;
  }),

  set: createArgHandler((key, value) => {
    storage.setItem(key, value);
  }),

  beforeSend(callback) {
    callback();
  },

  http(options = {}) {
    Object.keys(options).reduce((mem, key) => {
      mem[key] = options[key];
    }, requestOpts)

    return this.end();
  },

  end() {
    return new Promise((resolve, reject) => {
      let cache;

      cache = storage.getItem(url) ? 
        resolve(cache) : 
        http(this.requestOpts).then((...args) => {
          resolve.apply(null, args)
        }).catch((...args)=> {
          reject.apply(null, args);
        })
    })    
  },

  fetch() {
    this.requestOpts.url = url;
    this.requestOpts.method = method;
    return this; 
  }

  requestOpts: {
    headers: {},
    data: {},
    url: '',
    method: 'get'
  },

  mappings: {}

}

let methods = ['get', 'put', 'post', 'patch', 'delete', 'jsonp'];

export default methods.reduce((mem, method) => {
  mem[method] = mem.fetch(url, method);
  return mem;
}, Cache);