'use strict';

const random = (min, max) => {
  if (!max) {
    max = min;
    min = 0;
  }
  if (min === max) return min;
  return min + Math.floor(Math.random() * max - min);
};

module.exports = { random };
