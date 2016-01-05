# 具有缓存功能的xhr请求库

ajax-cache是一个具有缓存功能的请求库，提供三种缓存方式：sessionStorage、localStorage以及内存memory，默认缓存方式是sessionStorage。其中get和jsonp请求是默认缓存的，post、put、patch和delete得手动开启缓存功能

## 安装

```js
npm install --save-dev ajax-cache;
```

## 用法

```js
import request from 'ajax-cache';

request.get('api').end().then((result) => {

}).catch((error) => {

})
request.jsonp('api').end().then((result) => {

}).catch((error) => {

})

request.post('api').data(data).end().then((result) => {

}).catch((error) => {

})
request.put('api').data(data).end().then((result) => {

}).catch((error) => {

})
request.patch('api').data(data).end().then((result) => {

}).catch((error) => {

})
request.delete('api').data(data).end().then((result) => {

}).catch((error) => {

})

```

## 方法

* config  对xhr请求全局配置
* setStorageMode 设置缓存使用方式，有三种缓存方式：sessionStorage、localStorage以及内存memory，默认缓存方式是sessionStorage
* header 头信息设置
* data 传送信息设置
* beforeSend 发送前调用
* timeout 超时时间设置
* http http的底层设置方法，如同jQuery的$.ajax
* clearCache 清除相对于请求的缓存
* cache 对该请求设置缓存
* get get请求方式
* post post请求方式
* put put请求方式
* patch patch请求方式
* delete delete请求方式
* jsonp jsonp请求请求方式
