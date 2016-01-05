(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _srcJsonpJs = __webpack_require__(1);

	var _srcJsonpJs2 = _interopRequireDefault(_srcJsonpJs);

	var _srcStorageJs = __webpack_require__(4);

	var _srcStorageJs2 = _interopRequireDefault(_srcStorageJs);

	var _srcXhrJs = __webpack_require__(5);

	var _srcXhrJs2 = _interopRequireDefault(_srcXhrJs);

	var _srcHttpJs = __webpack_require__(6);

	var _srcHttpJs2 = _interopRequireDefault(_srcHttpJs);

	var _srcIndexJs = __webpack_require__(7);

	var _srcIndexJs2 = _interopRequireDefault(_srcIndexJs);

	var should = chai.should();
	var expect = chai.expect;

	// describe('jsonp test', () => {
	//   it('should invoke error fun when the url is invalid', () => {
	//     return jsonp('http://int.dpool.sina.com.cn/iploodkup/iplookup.php?format=js').catch((response) => {
	//       response.status.should.equal(404);
	//     });
	//   })

	//   it('should invoke success fun when the url is valid', () => {
	//     return jsonp('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js').then((response) => {
	//       response.status.should.equal(200);
	//     })
	//   })
	// })

	// describe('storage test', () => {
	//   describe('sessionStorage test', () => {
	//     it('should get correct value', () => {
	//       let storage = new Storage('sessionStorage');
	//       storage.setItem('a', {hello: 'world'});
	//       storage.setItem('b', {goodbye: 'world'});
	//       storage.getItem('a').hello.should.equal('world');
	//       storage.getItem('b').goodbye.should.equal('world');
	//       storage.getAllItems().should.have.length(2);
	//       storage.getAllItems().should.include({hello: 'world'});
	//       storage.removeItem('a');
	//       should.not.exist(storage.getItem('a'))
	//       storage.getItem('b').goodbye.should.equal('world');
	//       storage.clear();
	//       should.not.exist(storage.getItem('b'))

	//     })
	//   })

	//   describe('localStorage test', () => {
	//     it('should get correct value', () => {
	//       let storage = new Storage('localStorage');
	//       storage.use('localStorage');
	//       storage.setItem('a', {hello: 'world'});
	//       storage.setItem('b', {goodbye: 'world'});
	//       storage.getItem('a').hello.should.equal('world');
	//       storage.getItem('b').goodbye.should.equal('world');
	//       storage.getAllItems().should.have.length(2);
	//       storage.getAllItems().should.include({hello: 'world'});
	//       storage.removeItem('a');
	//       should.not.exist(storage.getItem('a'))
	//       storage.getItem('b').goodbye.should.equal('world');
	//       storage.clear();
	//       should.not.exist(storage.getItem('b'))

	//     })
	//   })

	//   describe('memory', () => {
	//     it('should get correct value', () => {
	//       let storage = new Storage('memory');
	//       storage.use('memory');
	//       storage.setItem('a', {hello: 'world'});
	//       storage.setItem('b', {goodbye: 'world'});
	//       storage.getItem('a').hello.should.equal('world');
	//       storage.getItem('b').goodbye.should.equal('world');
	//       storage.getAllItems().should.have.length(2);
	//       storage.getAllItems().should.include({hello: 'world'});
	//       storage.removeItem('a');
	//       should.not.exist(storage.getItem('a'))
	//       storage.getItem('b').goodbye.should.equal('world');
	//       storage.clear();
	//       should.not.exist(storage.getItem('b'))

	//     })
	//   })
	// })

	// describe('xhr test', () => {
	//   let obj = {
	//     method: 'GET',
	//     url: 'http://apis.baidu.com/apistore/weatherservice/citylist?cityname=%E6%9C%9D%E9%98%B3'
	//   }
	//   it('should invoke success fn', () => {
	//     return xhr(obj).then((response) => {
	//       response.status.should.equal(200);
	//     })
	//   })

	//   it('should invoke fail fn', () => {
	//     return xhr({ url: 'http://wwww.baidu.com' }).catch((response) => {
	//       response.status.should.equal(0);
	//     })
	//   })

	// })

	// describe('http test', () => {
	//   let options, wrongUrl;
	//   beforeEach(() => {
	//     options = {
	//         url: 'http://localhost:3000/posts',
	//         data: { author: 'wuguangfu', id: 1 }
	//     }
	//     wrongUrl = 'http://localhost:3000/movie';   
	//   })

	//   it('should success via get mehtod', () => {
	//     options.method = 'GET';
	//     return http(options).then((response) => {
	//       response.status.should.equal(200);
	//     })

	//     options.url = wrongUrl;

	//     return http(options).catch((response) => {
	//       response.status.should.equal(0);
	//     })
	//   })

	// it('should success via post method', () => {
	//   options.method = 'POST';
	//   return http(options).then((response) => {
	//     response.status.should.equal(200);
	//   })

	//   options.url = wrongUrl;

	//   return http(options).catch((response) => {
	//     response.status.should.equal(0);
	//   })
	// })

	// it('should success via put method', () => {
	//   options.method = 'PUT';
	//   return http(options).then((response) => {
	//     response.status.should.equal(200);
	//   })

	//   options.url = wrongUrl;

	//   return http(options).catch((response) => {
	//     response.status.should.equal(0);
	//   })   
	// })

	// it('should success via delete method', () => {
	//   options.method = 'DELETE';
	//   return http(options).then((response) => {
	//     response.status.should.equal(200);
	//   })

	//   options.url = wrongUrl;

	//   return http(options).catch((response) => {
	//     response.status.should.equal(0);
	//   })   
	// })

	// it('should success via patch method', () => {
	//   options.method = 'PATCH';
	//   return http(options).then((response) => {
	//     response.status.should.equal(200);
	//   })

	//   options.url = wrongUrl;

	//   return http(options).catch((response) => {
	//     response.status.should.equal(0);
	//   })     
	// })
	// })

	// describe('cache test', () => {
	//   beforeEach(() => {

	//   })

	//   it('should success via get method', () => {
	//     Cache.connect('posts', 'http://localhost:3000/posts');
	//     return Cache
	//       .get('posts')
	//       .data({
	//         id: 1
	//       })
	//       .end()
	//       .then((data, status) => {
	//         expect(data.author).to.equal('typicode');
	//       })
	//   })

	// })

	_srcIndexJs2['default'].connect('posts', 'http://localhost:3000/posts');
	_srcIndexJs2['default'].get('posts').data({
	  id: 'aaa'
	}).clearCache(function () {
	  return true;
	}).end().then(function (data, status) {
	  console.log('success', data);
	})['catch'](function (error, status) {
	  console.log('error', error);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libPromiseJs = __webpack_require__(2);

	var _libPromiseJs2 = _interopRequireDefault(_libPromiseJs);

	var _libUtilJs = __webpack_require__(3);

	var _libUtilJs2 = _interopRequireDefault(_libUtilJs);

	exports['default'] = function (url) {
	  var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  var callback = '_jonsp' + Math.random().toString(36).substr(2);

	  data = Object.keys(data).reduce(function (mem, key) {
	    mem[key] = data[key];
	    return mem;
	  }, { 'callback': callback });

	  url = _libUtilJs2['default'].serialiseUrl(url, data);

	  return new _libPromiseJs2['default'](function (resolve, reject) {
	    var src = document.createElement('script'),
	        data = null,
	        response = {};

	    src.src = url;
	    src.type = 'text/javascript';
	    src.async = true;

	    window[callback] = function (data) {
	      data = data;
	    };

	    var handler = function handler(event) {
	      delete window[callback];
	      document.body.removeChild(src);

	      response.status = event.type === 'error' ? 404 : 200;
	      response.responseText = data;
	      response.xhr = null;

	      event.type === 'error' ? reject(response) : resolve(response);
	    };

	    src.onload = src.onerror = handler;

	    document.body.appendChild(src);
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Promises/A+ polyfill v1.1.0 (https://github.com/bramstein/promis)
	 */

	'use strict';

	var RESOLVED = 0;
	var REJECTED = 1;
	var PENDING = 2;

	function Promise(executor) {

	    this.state = PENDING;
	    this.value = undefined;
	    this.deferred = [];

	    var promise = this;

	    try {
	        executor(function (x) {
	            promise.resolve(x);
	        }, function (r) {
	            promise.reject(r);
	        });
	    } catch (e) {
	        promise.reject(e);
	    }
	}

	Promise.reject = function (r) {
	    return new Promise(function (resolve, reject) {
	        reject(r);
	    });
	};

	Promise.resolve = function (x) {
	    return new Promise(function (resolve, reject) {
	        resolve(x);
	    });
	};

	Promise.all = function all(iterable) {
	    return new Promise(function (resolve, reject) {
	        var count = 0,
	            result = [];

	        if (iterable.length === 0) {
	            resolve(result);
	        }

	        function resolver(i) {
	            return function (x) {
	                result[i] = x;
	                count += 1;

	                if (count === iterable.length) {
	                    resolve(result);
	                }
	            };
	        }

	        for (var i = 0; i < iterable.length; i += 1) {
	            iterable[i].then(resolver(i), reject);
	        }
	    });
	};

	Promise.race = function race(iterable) {
	    return new Promise(function (resolve, reject) {
	        for (var i = 0; i < iterable.length; i += 1) {
	            iterable[i].then(resolve, reject);
	        }
	    });
	};

	var p = Promise.prototype;

	p.resolve = function resolve(x) {
	    var promise = this;

	    if (promise.state === PENDING) {
	        if (x === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }

	        var called = false;

	        try {
	            var then = x && x['then'];

	            if (x !== null && typeof x === 'object' && typeof then === 'function') {
	                then.call(x, function (x) {
	                    if (!called) {
	                        promise.resolve(x);
	                    }
	                    called = true;
	                }, function (r) {
	                    if (!called) {
	                        promise.reject(r);
	                    }
	                    called = true;
	                });
	                return;
	            }
	        } catch (e) {
	            if (!called) {
	                promise.reject(e);
	            }
	            return;
	        }
	        promise.state = RESOLVED;
	        promise.value = x;
	        promise.notify();
	    }
	};

	p.reject = function reject(reason) {
	    var promise = this;

	    if (promise.state === PENDING) {
	        if (reason === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }

	        promise.state = REJECTED;
	        promise.value = reason;
	        promise.notify();
	    }
	};

	p.notify = function notify() {
	    var promise = this;

	    async(function () {
	        if (promise.state !== PENDING) {
	            while (promise.deferred.length) {
	                var deferred = promise.deferred.shift(),
	                    onResolved = deferred[0],
	                    onRejected = deferred[1],
	                    resolve = deferred[2],
	                    reject = deferred[3];

	                try {
	                    if (promise.state === RESOLVED) {
	                        if (typeof onResolved === 'function') {
	                            resolve(onResolved.call(undefined, promise.value));
	                        } else {
	                            resolve(promise.value);
	                        }
	                    } else if (promise.state === REJECTED) {
	                        if (typeof onRejected === 'function') {
	                            resolve(onRejected.call(undefined, promise.value));
	                        } else {
	                            reject(promise.value);
	                        }
	                    }
	                } catch (e) {
	                    reject(e);
	                }
	            }
	        }
	    });
	};

	p['catch'] = function (onRejected) {
	    return this.then(undefined, onRejected);
	};

	p.then = function then(onResolved, onRejected) {
	    var promise = this;

	    return new Promise(function (resolve, reject) {
	        promise.deferred.push([onResolved, onRejected, resolve, reject]);
	        promise.notify();
	    });
	};

	var queue = [];
	var async = function async(callback) {
	    queue.push(callback);

	    if (queue.length === 1) {
	        async.async();
	    }
	};

	async.run = function () {
	    while (queue.length) {
	        queue[0]();
	        queue.shift();
	    }
	};

	if (window.MutationObserver) {
	    var el = document.createElement('div');
	    var mo = new MutationObserver(async.run);

	    mo.observe(el, {
	        attributes: true
	    });

	    async.async = function () {
	        el.setAttribute("x", 0);
	    };
	} else {
	    async.async = function () {
	        setTimeout(async.run);
	    };
	}

	module.exports = window.Promise || Promise;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var util = {
	  serialise: function serialise(params) {
	    if (typeof params != 'object') return obj;

	    return Object.keys(params).reduce(function (mem, key) {
	      mem.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
	      return mem;
	    }, []).join('&');
	  },

	  serialiseUrl: function serialiseUrl(url, params) {
	    if (url === undefined) url = '';

	    url = url + (url.indexOf('?') !== -1 ? '&' : '?');
	    return url + this.serialise(params);
	  },

	  parseUrl: function parseUrl(url) {
	    var a = document.createElement('a');
	    a.href = url;

	    return a;
	  },

	  stringify: function stringify() {
	    return item === Object(item) ? JSON.stringify(item) : item;
	  },

	  parse: function parse(data) {
	    try {
	      return data && JSON.parse(data);
	    } catch (e) {
	      return data;
	    }
	  }
	};

	exports['default'] = util;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function serialize(item) {
	  return item === Object(item) ? JSON.stringify(item) : item;
	}

	function deserialize(data) {
	  try {
	    return data && JSON.parse(data);
	  } catch (e) {
	    return data;
	  }
	}

	var Storage = (function () {
	  function Storage() {
	    var name = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

	    _classCallCheck(this, Storage);

	    this.name = '_guangfuStorage' + name;
	    this.storage = window.sessionStorage;
	    this.vessels = this._fetchVessels();
	  }

	  _createClass(Storage, [{
	    key: '_fetchVessels',
	    value: function _fetchVessels() {
	      return this.storage.getItem(this.name) ? this.storage.getItem(this.name).split(',') : [];
	    }
	  }, {
	    key: '_getKey',
	    value: function _getKey(key) {
	      return this.name + '-' + key;
	    }
	  }, {
	    key: '_savekeys',
	    value: function _savekeys() {
	      return this.storage.setItem(this.name, this.vessels.join(','));
	    }
	  }, {
	    key: 'use',
	    value: function use() {
	      var method = arguments.length <= 0 || arguments[0] === undefined ? 'sessionStorage' : arguments[0];

	      var methods = ['localStorage', 'sessionStorage', 'memory'];
	      if (methods.indexOf(method) === -1) throw 'the method of storage must be one of localStorage,sessionStorage and memory';

	      this.storage = method !== 'memory' ? window[method] : {
	        cache: {},
	        setItem: function setItem(key, value) {
	          return this.cache[key] = value;
	        },
	        getItem: function getItem(key) {
	          return this.cache[key];
	        },
	        removeItem: function removeItem(key) {
	          delete this.cache[key];
	        }
	      };

	      this.vessels = this._fetchVessels();
	    }
	  }, {
	    key: 'setItem',
	    value: function setItem(key, value) {
	      var encryptKey = this._getKey(key);
	      this.storage.setItem(encryptKey, serialize(value));
	      if (this.vessels.indexOf(key) == -1) this.vessels.push(key);

	      return this._savekeys();
	    }
	  }, {
	    key: 'getItem',
	    value: function getItem(key) {
	      var encryptKey = this._getKey(key);

	      return this.vessels.indexOf(key) === -1 ? undefined : deserialize(this.storage.getItem(encryptKey));
	    }
	  }, {
	    key: 'removeItem',
	    value: function removeItem(key) {
	      var encryptKey = this._getKey(key),
	          index = this.vessels.indexOf(key);

	      if (index === -1) return false;

	      this.storage.removeItem(encryptKey);
	      this.vessels.splice(index, 1);

	      return this._savekeys();
	    }
	  }, {
	    key: 'getAllItems',
	    value: function getAllItems() {
	      var _this = this;

	      return this.vessels.map(function (item, index) {
	        return _this.getItem(item);
	      });
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var _this2 = this;

	      this.vessels.forEach(function (item, index) {
	        _this2.removeItem(item);
	      });
	    }
	  }]);

	  return Storage;
	})();

	exports['default'] = Storage;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libPromiseJs = __webpack_require__(2);

	var _libPromiseJs2 = _interopRequireDefault(_libPromiseJs);

	exports['default'] = function () {
	  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  var _ref$method = _ref.method;
	  var method = _ref$method === undefined ? 'GET' : _ref$method;
	  var _ref$url = _ref.url;
	  var url = _ref$url === undefined ? '' : _ref$url;
	  var _ref$data = _ref.data;
	  var data = _ref$data === undefined ? null : _ref$data;
	  var _ref$headers = _ref.headers;
	  var headers = _ref$headers === undefined ? {} : _ref$headers;
	  var _ref$crossOrigin = _ref.crossOrigin;
	  var crossOrigin = _ref$crossOrigin === undefined ? false : _ref$crossOrigin;

	  var request = new XMLHttpRequest();

	  if (window.XDomainRequest && crossOrigin) {
	    request = new XDomainRequest();
	  }

	  return new _libPromiseJs2['default'](function (resolve, reject) {
	    request.open(method, url, true);

	    Object.keys(headers).forEach(function (header) {
	      request.setRequestHeader(header, headers[header]);
	    });

	    request.onload = request.onabort = request.onerror = function (event) {
	      event.type === 'load' && request.status && request.status >= 200 && request.status < 300 ? resolve(request) : reject(request);
	    };

	    request.send(data);
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libPromiseJs = __webpack_require__(2);

	var _libPromiseJs2 = _interopRequireDefault(_libPromiseJs);

	var _jsonpJs = __webpack_require__(1);

	var _jsonpJs2 = _interopRequireDefault(_jsonpJs);

	var _xhrJs = __webpack_require__(5);

	var _xhrJs2 = _interopRequireDefault(_xhrJs);

	var _libUtilJs = __webpack_require__(3);

	var _libUtilJs2 = _interopRequireDefault(_libUtilJs);

	function crossOrigin(url1, url2) {
	  url1 = _libUtilJs2['default'].parseUrl(url1);
	  url2 = _libUtilJs2['default'].parseUrl(url2);

	  return url1.protocol !== url2.protocol || _libUtilJs2['default'].host !== url2.host;
	}

	exports['default'] = function () {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  if (options.method !== 'jsonp') {
	    (function () {

	      var defaultHeaders = {
	        'Accept': 'application/json, text/plain, */*',
	        // 'X-Requested-With': 'XMLHttpRequest',
	        'Content-Type': 'application/json;charset=utf-8'
	      };
	      var defaultOpts = {
	        method: 'GET',
	        url: '',
	        data: null,
	        headers: {},
	        crossOrigin: null,
	        emulateHTTP: true,
	        emulateJSON: false
	      };

	      options.headers = options.headers || {};
	      options.data = options.data || {};

	      Object.keys(defaultHeaders).reduce(function (mem, header) {
	        mem[header] = defaultHeaders[header];
	        return mem;
	      }, options.headers);

	      Object.keys(defaultOpts).reduce(function (mem, key) {
	        mem[key] = mem[key] || defaultOpts[key];
	        return mem;
	      }, options);

	      options.crossOrigin = crossOrigin(location.href, options.url);

	      options.method = options.method.toUpperCase();

	      if (/^(GET)$/i.test(options.method)) {
	        // {
	        //   'Cache-Control': 'no-cache',
	        //   'If-Modified-Since': '0'
	        // }
	        options.data._timestamp = +new Date();
	        options.url = _libUtilJs2['default'].serialiseUrl(options.url, options.data);
	        options.data = null;
	        delete options.headers['X-Requested-With'];
	      }

	      if (options.emulateHTTP && !options.crossOrigin && /^(PUT|PATCH|DELETE)$/i.test(options.method)) {
	        options.headers['X-HTTP-Method-Override'] = options.method;
	        options.method = 'POST';
	      }

	      if (options.emulateJSON) {
	        options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	      }

	      if (/FormData/i.test(typeof options.data === 'string' ? options.data.toString() : '')) {
	        delete options.headers['Content-Type'];
	      }
	    })();
	  }

	  return options.method !== 'jsonp' ? (0, _xhrJs2['default'])(options) : (0, _jsonpJs2['default'])(options.url, options.data);

	  // return new Promise((resolve, reject) => {
	  //   options.method !== 'jsonp' ?

	  //     xhr(options).then((request) => {
	  //       resolve(util.parse(request.responseText), request.status, request)
	  //     }).catch((request) =? {
	  //       reject(request, request.status)
	  //     }) :

	  //     jsonp(options.url, options.data).then((data) => {
	  //       resolve(util.parse(data))
	  //     }).catch(() {
	  //       reject();
	  //     })
	  // })
	};

	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _httpJs = __webpack_require__(6);

	var _httpJs2 = _interopRequireDefault(_httpJs);

	var _storageJs = __webpack_require__(4);

	var _storageJs2 = _interopRequireDefault(_storageJs);

	var _libPromiseJs = __webpack_require__(2);

	var _libPromiseJs2 = _interopRequireDefault(_libPromiseJs);

	var _libUtilJs = __webpack_require__(3);

	var _libUtilJs2 = _interopRequireDefault(_libUtilJs);

	var storage = new _storageJs2['default']('ajaxCache');

	function createArgHandler(handler) {
	  if (typeof handler !== 'function') return handler;

	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    if (args.length === 1 && typeof args[0] === 'object') {
	      Object.keys(args[0]).forEach(function (key) {
	        handler(key, args[0][key]);
	      });
	    } else {
	      handler(args[0], args[1]);
	    }

	    return Cache;
	  };
	}

	var requestOpts = {
	  headers: {},
	  data: {},
	  url: '',
	  method: 'get'
	};

	var mappings = {},
	    isClearCache = false,
	    beforeSendCb = null;

	var Cache = {
	  config: function config(options) {
	    if (typeof options !== 'object') return;
	  },

	  connect: createArgHandler(function (key, value) {
	    mappings[key] = value;
	  }),

	  header: createArgHandler(function (key, value) {
	    requestOpts.headers[key] = value;
	  }),

	  data: createArgHandler(function (key, value) {
	    requestOpts.data[key] = value;
	  }),

	  beforeSend: function beforeSend(callback) {
	    beforeSendCb = callback;

	    return this;
	  },

	  http: function http() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    Object.keys(options).reduce(function (mem, key) {
	      mem[key] = options[key];
	    }, requestOpts);

	    return this.end();
	  },

	  //清除对应的缓存
	  clearCache: function clearCache(cb) {
	    isClearCache = typeof cb === 'function' ? cb.call(null) : true;

	    return this;
	  },

	  end: function end() {

	    return new _libPromiseJs2['default'](function (resolve, reject) {
	      var method = requestOpts.method,
	          data = requestOpts.data,
	          url = requestOpts.url,
	          cache = undefined;

	      //判断是否设置缓存
	      if (mappings[url]) {

	        //缓存参数只支持一层object对象
	        if (method === 'get' || method === 'jsonp') {
	          requestOpts.url = url = Object.keys(data).sort(function (value1, value2) {
	            return value1 - value2;
	          }).reduce(function (mem, key) {
	            return mem + '/' + data[key];
	          }, mappings[url]);
	        }
	      }

	      //判断是否需要清除对应的缓存，并缓存新的结果
	      isClearCache && storage.removeItem(url);

	      cache = storage.getItem(url) || undefined;

	      cache ? resolve(_libUtilJs2['default'].parse(cache), 304) : (0, _httpJs2['default'])(requestOpts).then(function (xhr) {
	        storage.setItem(url, xhr.responseText);
	        resolve.call(null, _libUtilJs2['default'].parse(xhr.responseText), xhr.status);
	      })['catch'](function (xhr) {
	        console.log('error xhr', xhr);
	        reject.call(null, _libUtilJs2['default'].parse(xhr.responseText, xhr.status));
	      });
	    });
	  },

	  fetch: function fetch(method) {
	    var _this = this;

	    return function (url) {
	      requestOpts.method = method;
	      requestOpts.url = url;

	      return _this;
	    };
	  }

	};

	var methods = ['get', 'put', 'post', 'patch', 'delete', 'jsonp'];

	exports['default'] = methods.reduce(function (mem, method) {
	  mem[method] = mem.fetch(method);
	  return mem;
	}, Cache);
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;