'use strict';

class Inspector {
  static functions(obj) {
    if (typeof obj != 'object') return typeof obj + ' is not an object';

    const functions = [];
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'function') {
        functions.push(key + '()');
      }
    });
    return functions;
  }

  static properties(obj) {
    if (typeof obj != 'object') return typeof obj + ' is not an object';

    const properties = [];
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] !== 'function') {
        properties.push(key + " :: " + (typeof obj[key]).toUpperCase());
      }
    });
    return properties;
  }
}

module.exports = Inspector;
