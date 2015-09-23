import jsonp from '../src/jsonp.js';
import Storage from '../src/lib/storage.js';
import xhr from '../src/xhr.js';

let should = chai.should();

describe('jsonp test', () => {
  it('should invoke error fun when the url is invalid', () => {
    return jsonp('http://int.dpool.sina.com.cn/iploodkup/iplookup.php?format=js').catch((response) => {
      response.status.should.equal(404);
    });
  })

  it('should invoke success fun when the url is valid', () => {
    return jsonp('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js').then((response) => {
      response.status.should.equal(200);
    })
  })
})


describe('storage test', () => {
  describe('sessionStorage test', () => {
    it('should get correct value', () => {
      let storage = new Storage('sessionStorage');
      storage.setItem('a', {hello: 'world'});
      storage.setItem('b', {goodbye: 'world'});
      storage.getItem('a').hello.should.equal('world');
      storage.getItem('b').goodbye.should.equal('world');
      storage.getAllItems().should.have.length(2);
      storage.getAllItems().should.include({hello: 'world'});
      storage.removeItem('a');
      should.not.exist(storage.getItem('a'))
      storage.getItem('b').goodbye.should.equal('world');
      storage.clear();
      should.not.exist(storage.getItem('b'))

    })
  })

  describe('localStorage test', () => {
    it('should get correct value', () => {
      let storage = new Storage('localStorage');
      storage.use('localStorage');
      storage.setItem('a', {hello: 'world'});
      storage.setItem('b', {goodbye: 'world'});
      storage.getItem('a').hello.should.equal('world');
      storage.getItem('b').goodbye.should.equal('world');
      storage.getAllItems().should.have.length(2);
      storage.getAllItems().should.include({hello: 'world'});
      storage.removeItem('a');
      should.not.exist(storage.getItem('a'))
      storage.getItem('b').goodbye.should.equal('world');
      storage.clear();
      should.not.exist(storage.getItem('b'))

    })
  })

  describe('memory', () => {
    it('should get correct value', () => {
      let storage = new Storage('memory');
      storage.use('memory');
      storage.setItem('a', {hello: 'world'});
      storage.setItem('b', {goodbye: 'world'});
      storage.getItem('a').hello.should.equal('world');
      storage.getItem('b').goodbye.should.equal('world');
      storage.getAllItems().should.have.length(2);
      storage.getAllItems().should.include({hello: 'world'});
      storage.removeItem('a');
      should.not.exist(storage.getItem('a'))
      storage.getItem('b').goodbye.should.equal('world');
      storage.clear();
      should.not.exist(storage.getItem('b'))

    })
  })
})

describe('xhr test', () => {
  let obj = {
    method: 'GET', 
    url: 'http://apis.baidu.com/apistore/weatherservice/citylist?cityname=%E6%9C%9D%E9%98%B3'
  }
  it('should invoke success fn', () => {
    return xhr(obj).then((response) => {
      response.status.should.equal(200);
    })
  })

  it('should invoke fail fn', () => {
    return xhr({ url: 'http://wwww.baidu.com' }).catch((response) => {
      response.status.should.not.equal(200);
      response.status.should.equal(0);
    })
  })
  
})

describe('http test', () => {
  it('should success via get mehtod')

  it('should success via post method')

  it('should success via put method')

  it('should success via delete method')

  it('should success via patch method')
})

describe('cache test', () => {

})
