const util = {
  serialise(params) {
    if (typeof params != 'object') return obj;

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

  stringify() {
    return item === Object(item) ? JSON.stringify(item) : item;
  },

  parse(data) {
    try {
      return data && JSON.parse(data);
    } catch(e) {
      return data;
    }
  }
}

export default util;