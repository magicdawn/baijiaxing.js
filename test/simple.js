'use strict';

const baijiaxing = require('../');
const should = require('should');

describe('baijiaxing', function() {
  it('It works', function() {
    should.ok(baijiaxing.ToneMap);
    should.ok(baijiaxing.NoToneMap);
  });

  it('.get', function() {
    baijiaxing.get('张三').should.equal('zhang');
    baijiaxing.get('李四').should.equal('li');
    baijiaxing.get('诸葛亮').should.equal('zhu ge');
  });

  it('.getWithTone', function() {
    baijiaxing.getWithTone('张三').should.equal('zhāng');
    baijiaxing.getWithTone('李四').should.equal('lǐ');
    baijiaxing.getWithTone('诸葛亮').should.equal('zhū gě');
  });
});