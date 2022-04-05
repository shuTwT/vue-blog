const Mock = require('mockjs');
//格式： Mock.mock( url, post/get , 返回的数据)；
//./data/userJson就是我们上面定义的数据文件
Mock.mock('/api/homelist', 'get', require('./data/homelist'));
Mock.mock('/api/filelist', 'get', require('./data/filelist'));
Mock.mock('/api/linkseclist', 'get', require('./data/linkseclist'));