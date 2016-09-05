'use strict';

/**
 * Module dependencies
 */

const fs = require('fs');
const _ = require('lodash');

/**
 * 处理 tone
 */

const ToneMap = require('./tone');
const NoToneMap = _.cloneDeep(ToneMap);
_.each(NoToneMap, (v, k) => {
  NoToneMap[k] = v.slice(0, -1); // 去掉最后的声调
});

const removeTone = pyWithTone => {
  let py = pyWithTone;
  if (!py) return;
  _.each(NoToneMap, (v, k) => {
    py = py.replace(k, v);
  });
  return py;
};


/**
 * 中文 -> 拼音
 */

const db = fs.readFileSync(__dirname + '/db.txt', 'utf8');
let arr;
arr = db.split('\n').map(_.trim).filter(Boolean);
arr = arr.map(line => {
  return line.match(/[\w\W]+?\) ?/g).map(_.trim).filter(Boolean);
});
arr = _.flatten(arr);

// 带声调的
const registryWithTone = {};

for (let item of arr) {
  const match = item.match(/([\w\W]+?)\(([\w\W]+?)\)/);
  const ch = match[1];
  let py = match[2];
  registryWithTone[ch] = py;
}

// 不带声调的
const registry = _.mapValues(registryWithTone, v => removeTone(v));

/**
 * 获取姓
 */

const getFactory = registry => ch => {
  let fiPy;

  // 复姓
  let fi = ch.slice(0, 2);

  if ((fiPy = registry[fi])) {
    return fiPy;
  }

  // 单姓
  fi = ch[0];
  if ((fiPy = registry[fi])) {
    return fiPy;
  }
  return;
};

const get = getFactory(registry);
const getWithTone = getFactory(registryWithTone);

/**
 * exports
 */

_.assign(exports, {
  get,
  getWithTone,

  removeTone,
  ToneMap,
  NoToneMap
});