'use strict';

const methods = (iface) => {
  const methodsArr = [];
  for (const field in iface) {
    if (typeof iface[field] === 'function') {
      methodsArr.push([field, iface[field].length]);
    }
  }
  return methodsArr;
};

module.exports = { methods };
