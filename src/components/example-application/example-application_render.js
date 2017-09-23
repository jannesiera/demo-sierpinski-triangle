import * as idom from 'incremental-dom';
var elementOpen = idom.elementOpen;
var elementClose = idom.elementClose;
var text = idom.text;
var attr = idom.attr;
var elementOpenStart = idom.elementOpenStart;
var elementOpenEnd = idom.elementOpenEnd;
var deepCopy = function(source) {
  var copy = {};
  Object.getOwnPropertyNames(source).forEach(function(propKey) {
    var desc = Object.getOwnPropertyDescriptor(source, propKey);
    Object.defineProperty(copy, propKey, desc);
    if (deep && typeof desc.value === 'object') {
      copy[propKey] = copyObject(source[propKey]);
    }
  });
  return copy;
};
var idomRender = function render(context) {
  elementOpenStart('style');
  elementOpenEnd('style');
  text('\n    .container {\n        position: absolute;\n        transform-origin: 0 0;\n        left: 50%;\n        top: 50%;\n        width: 10px;\n        height: 10px;\n        background: #eee;\n    } \n');
  elementClose('style');
  text('\n\n');
  elementOpenStart('div');
  attr('class', function() {
    var values = [];
    values.push('container');
    if (values.length === 1) {
      return values[0];
    }
    if (values.length > 1) {
      return values.reduce(function(sum, val) {
        return sum + val;
      })
    }
    return '';
  }());
  attr('style', function() {
    var values = [];
    values.push('transform: scaleX(');
    values.push(context['scale']);
    values.push(') scaleY(0.7) translateZ(0.1px);');
    if (values.length === 1) {
      return values[0];
    }
    if (values.length > 1) {
      return values.reduce(function(sum, val) {
        return sum + val;
      })
    }
    return '';
  }());
  elementOpenEnd('div');
  text('\n    ');
  elementOpenStart('div');
  elementOpenEnd('div');
  text('\n        ');
  elementOpenStart('sierpinski-triangle');
  attr('x', function() {
    var values = [];
    values.push(context['x']);
    if (values.length === 1) {
      return values[0];
    }
    if (values.length > 1) {
      return values.reduce(function(sum, val) {
        return sum + val;
      })
    }
    return '';
  }());
  attr('y', function() {
    var values = [];
    values.push(context['y']);
    if (values.length === 1) {
      return values[0];
    }
    if (values.length > 1) {
      return values.reduce(function(sum, val) {
        return sum + val;
      })
    }
    return '';
  }());
  attr('s', function() {
    var values = [];
    values.push(context['s']);
    if (values.length === 1) {
      return values[0];
    }
    if (values.length > 1) {
      return values.reduce(function(sum, val) {
        return sum + val;
      })
    }
    return '';
  }());
  attr('seconds', function() {
    var values = [];
    values.push(context['seconds']);
    if (values.length === 1) {
      return values[0];
    }
    if (values.length > 1) {
      return values.reduce(function(sum, val) {
        return sum + val;
      })
    }
    return '';
  }());
  elementOpenEnd('sierpinski-triangle');
  elementClose('sierpinski-triangle');
  text('\n    ');
  elementClose('div');
  text('\n');
  elementClose('div');
  text('\n');
};
var render = function(el, data) {
  idom.patch(el, idomRender, data);
}
export {
  render
};