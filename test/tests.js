import jsonp from '../src/jsonp.js';
import Storage from '../src/storage.js';
import xhr from '../src/xhr.js';
import http from '../src/http.js';
import Cache from '../src/index.js';

let should = chai.should();
let expect = chai.expect;

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

Cache.connect('posts', 'http://localhost:3000/posts');
Cache
  .get('posts')
  .data({
    id: 'aaa'
  })
  .clearCache(() => {
    return true;
  })
  .end()
  .then((data, status) => {
    console.log('success', data)
  })
  .catch((error, status) => {
    console.log('error', error)
  })
