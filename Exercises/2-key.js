'use strict';

const generateKey = (length, possible) => {
  let str = '';
  const len = possible.length;
  for (let i = 0; i < length; i++) {
    const randNum = Math.floor(Math.random() * len);
    str += possible[randNum];
  }
  return str;
};

module.exports = { generateKey };
