function serialize(item) {
  return item === Object(item) ? JSON.stringify(item) : item;
}

function deserialize(data) {
  try {
    return data && JSON.parse(data);
  } catch(e) {
    return data;
  }
}

export default class Storage {
  constructor(name='') {
    this.name = '_guangfuStorage' + name;
    this.storage = window.sessionStorage;
    this.vessels = this._fetchVessels();
  }

  _fetchVessels() {
    return this.storage.getItem(this.name) ? this.storage.getItem(this.name).split(',') : [];
  }

  _getKey(key) {
    return this.name + '-' + key;
  }

  _savekeys() {
    return this.storage.setItem(this.name, this.vessels.join(','));
  }

  use(method='sessionStorage') {
    let methods = ['localStorage', 'sessionStorage', 'memory'];
    if (methods.indexOf(method) === -1) throw 'the method of storage must be one of localStorage,sessionStorage and memory';

    this.storage = method !== 'memory' ? window[method] : {
      cache: {},
      setItem(key, value) {
        return this.cache[key] = value;
      },
      getItem(key) {
        return this.cache[key];
      },
      removeItem(key) {
        delete this.cache[key];
      }
    };

    this.vessels = this._fetchVessels();
  }

  setItem(key, value) {
    let encryptKey = this._getKey(key);
    this.storage.setItem(encryptKey, serialize(value));
    if (this.vessels.indexOf(key) == -1) this.vessels.push(key);

    return this._savekeys();
  }

  getItem(key) {
    let encryptKey = this._getKey(key);

    return this.vessels.indexOf(key) === -1 ? undefined : deserialize(this.storage.getItem(encryptKey));  
  }

  removeItem(key) {
    let encryptKey = this._getKey(key), 
        index = this.vessels.indexOf(key);

    if ( index === -1 ) return false;

    this.storage.removeItem(encryptKey)
    this.vessels.splice(index, 1);

    return this._savekeys(); 
  }

  getAllItems() {
    return this.vessels.map((item, index) => {
      return this.getItem(item);
    })
  }

  clear() {
    this.vessels.forEach((item, index) => {
      this.removeItem(item);
    })  
  }

}
