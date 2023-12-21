'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const arr = ip.split('.').reverse().map((s, i) => parseInt(s) << (i * 8));
  return arr.reduce((a, c) => a + c, 0);
};

ipToInt('142.25.547.85');

module.exports = { ipToInt };
