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

	var _srcLibStorageJs = __webpack_require__(4);

	var _srcLibStorageJs2 = _interopRequireDefault(_srcLibStorageJs);

	var _srcXhrJs = __webpack_require__(5);

	var _srcXhrJs2 = _interopRequireDefault(_srcXhrJs);

	var _srcHttpJs = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../src/http.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _srcHttpJs2 = _interopRequireDefault(_srcHttpJs);

	var should = chai.should();

	describe('jsonp test', function () {
	  it('should invoke error fun when the url is invalid', function () {
	    return (0, _srcJsonpJs2['default'])('http://int.dpool.sina.com.cn/iploodkup/iplookup.php?format=js')['catch'](function (response) {
	      response.status.should.equal(404);
	    });
	  });

	  it('should invoke success fun when the url is valid', function () {
	    return (0, _srcJsonpJs2['default'])('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js').then(function (response) {
	      response.status.should.equal(200);
	    });
	  });
	});

	describe('storage test', function () {
	  describe('sessionStorage test', function () {
	    it('should get correct value', function () {
	      var storage = new _srcLibStorageJs2['default']('sessionStorage');
	      storage.setItem('a', { hello: 'world' });
	      storage.setItem('b', { goodbye: 'world' });
	      storage.getItem('a').hello.should.equal('world');
	      storage.getItem('b').goodbye.should.equal('world');
	      storage.getAllItems().should.have.length(2);
	      storage.getAllItems().should.include({ hello: 'world' });
	      storage.removeItem('a');
	      should.not.exist(storage.getItem('a'));
	      storage.getItem('b').goodbye.should.equal('world');
	      storage.clear();
	      should.not.exist(storage.getItem('b'));
	    });
	  });

	  describe('localStorage test', function () {
	    it('should get correct value', function () {
	      var storage = new _srcLibStorageJs2['default']('localStorage');
	      storage.use('localStorage');
	      storage.setItem('a', { hello: 'world' });
	      storage.setItem('b', { goodbye: 'world' });
	      storage.getItem('a').hello.should.equal('world');
	      storage.getItem('b').goodbye.should.equal('world');
	      storage.getAllItems().should.have.length(2);
	      storage.getAllItems().should.include({ hello: 'world' });
	      storage.removeItem('a');
	      should.not.exist(storage.getItem('a'));
	      storage.getItem('b').goodbye.should.equal('world');
	      storage.clear();
	      should.not.exist(storage.getItem('b'));
	    });
	  });

	  describe('memory', function () {
	    it('should get correct value', function () {
	      var storage = new _srcLibStorageJs2['default']('memory');
	      storage.use('memory');
	      storage.setItem('a', { hello: 'world' });
	      storage.setItem('b', { goodbye: 'world' });
	      storage.getItem('a').hello.should.equal('world');
	      storage.getItem('b').goodbye.should.equal('world');
	      storage.getAllItems().should.have.length(2);
	      storage.getAllItems().should.include({ hello: 'world' });
	      storage.removeItem('a');
	      should.not.exist(storage.getItem('a'));
	      storage.getItem('b').goodbye.should.equal('world');
	      storage.clear();
	      should.not.exist(storage.getItem('b'));
	    });
	  });
	});

	describe('xhr test', function () {
	  var obj = {
	    method: 'GET',
	    url: 'http://apis.baidu.com/apistore/weatherservice/citylist?cityname=%E6%9C%9D%E9%98%B3'
	  };
	  it('should invoke success fn', function () {
	    return (0, _srcXhrJs2['default'])(obj).then(function (response) {
	      response.status.should.equal(200);
	    });
	  });

	  it('should invoke fail fn', function () {
	    return (0, _srcXhrJs2['default'])({ url: 'http://wwww.baidu.com' })['catch'](function (response) {
	      response.status.should.equal(0);
	    });
	  });
	});

	describe('http test', function () {
	  var options = undefined,
	      wrongUrl = undefined;
	  beforeEach(function () {
	    options = {
	      url: 'http://apis.baidu.com/apistore/weatherservice/citylist?cityname=%E6%9C%9D%E9%98%B3',
	      data: { test: 'testcode', id: 10 }
	    };
	    wrongUrl = 'http://wwww.baidu.com';
	  });

	  it('should success via get mehtod', function () {
	    options.method = 'GET';
	    return (0, _srcHttpJs2['default'])(options).then(function (response) {
	      response.status.should.equal(200);
	    });

	    options.url = wrongUrl;

	    return (0, _srcHttpJs2['default'])(options)['catch'](function (response) {
	      response.status.should.equal(0);
	    });
	  });

	  it('should success via post method', function () {
	    options.method = 'POST';
	    return (0, _srcHttpJs2['default'])(options).then(function (response) {
	      response.status.should.equal(200);
	    });

	    options.url = wrongUrl;

	    return (0, _srcHttpJs2['default'])(options)['catch'](function (response) {
	      response.status.should.equal(0);
	    });
	  });

	  it('should success via put method', function () {
	    options.method = 'PUT';
	    return (0, _srcHttpJs2['default'])(options).then(function (response) {
	      response.status.should.equal(200);
	    });

	    options.url = wrongUrl;

	    return (0, _srcHttpJs2['default'])(options)['catch'](function (response) {
	      response.status.should.equal(0);
	    });
	  });

	  it('should success via delete method', function () {
	    options.method = 'DELETE';
	    return (0, _srcHttpJs2['default'])(options).then(function (response) {
	      response.status.should.equal(200);
	    });

	    options.url = wrongUrl;

	    return (0, _srcHttpJs2['default'])(options)['catch'](function (response) {
	      response.status.should.equal(0);
	    });
	  });

	  it('should success via patch method', function () {
	    options.method = 'PATCH';
	    return (0, _srcHttpJs2['default'])(options).then(function (response) {
	      response.status.should.equal(200);
	    });

	    options.url = wrongUrl;

	    return (0, _srcHttpJs2['default'])(options)['catch'](function (response) {
	      response.status.should.equal(0);
	    });
	  });
	});

	describe('cache test', function () {});

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
	    value: function _fetchVessels(name) {
	      return this.storage.getItem(name) ? this.storage.getItem(name).split(',') : [];
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

/***/ }
/******/ ])
});
;