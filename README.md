# baijiaxing
> baijiaxing = 百家姓

[![Build Status](https://img.shields.io/travis/magicdawn/baijiaxing.js.svg?style=flat-square)](https://travis-ci.org/magicdawn/baijiaxing.js)
[![Coverage Status](https://img.shields.io/codecov/c/github/magicdawn/baijiaxing.js.svg?style=flat-square)](https://codecov.io/gh/magicdawn/baijiaxing.js)
[![npm version](https://img.shields.io/npm/v/baijiaxing.svg?style=flat-square)](https://www.npmjs.com/package/baijiaxing)
[![npm downloads](https://img.shields.io/npm/dm/baijiaxing.svg?style=flat-square)](https://www.npmjs.com/package/baijiaxing)
[![npm license](https://img.shields.io/npm/l/baijiaxing.svg?style=flat-square)](http://magicdawn.mit-license.org)

## Install
```sh
$ npm i baijiaxing --save
```

## API
```js
const baijiaxing = require('baijiaxing');
```

### `.get(中文姓名)`

```js
baijiaxing.get('张三').should.equal('zhang');
baijiaxing.get('李四').should.equal('li');
baijiaxing.get('诸葛亮').should.equal('zhu ge');
```

### `.getWithTone(中文姓名)`

```js
baijiaxing.getWithTone('张三').should.equal('zhāng');
baijiaxing.getWithTone('李四').should.equal('lǐ');
baijiaxing.getWithTone('诸葛亮').should.equal('zhū gě');
```


## Changelog
[CHANGELOG.md](CHANGELOG.md)

## License
the MIT License http://magicdawn.mit-license.org