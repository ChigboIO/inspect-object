'use strict';

class Inspector {
  static functions(obj) {
    if (typeof obj != 'object') {
      return 'Argument is a/an ' + (typeof obj).toUpperCase() + ', not an OBJECT';
    }

    const functions = [];
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'function') {
        functions.push(key + '()');
      }
    });
    return functions;
  }

  static properties(obj) {
    if (typeof obj != 'object') {
      return 'Argument is a/an ' + (typeof obj).toUpperCase() + ', not an OBJECT';
    }

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
