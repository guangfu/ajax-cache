const util = {
  serialise(params) {
    if (typeof params != 'object') return params;

    return Object.keys(params).reduce((mem, key) => {
      mem.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
      return mem;
    }, []).join('&');
  },

  serialiseUrl(url='', params) {
    url = url + (url.indexOf('?') !== -1 ? '&' : '?');
    return url + this.serialise(params);
  },

  parseUrl(url) {
    let a = document.createElement('a');
    a.href = url;

    return a;
  },

  stringify(item) {
    return item === Object(item) ? JSON.stringify(item) : item;
  },

  parse(data) {
    try {
      return data && JSON.parse(data);
    } catch(e) {
      return data;
    }
  },

  clone(source) {
    return Object.keys(source).reduce((obj, name) => {
      obj[name] = typeof source[name] === 'object' ? util.clone(source[name]) : source[name];
      return obj;
    }, {})
  }
}

export default util;
