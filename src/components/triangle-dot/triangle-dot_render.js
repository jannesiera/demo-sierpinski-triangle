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
  text('\n    .dot {\n        position: absolute;\n        background: #61dafb;\n        font: normal 15px sans-serif;\n        text-align: center;\n        cursor: pointer;\n    }\n\n    .hover {\n        background: #ff0;\n    }\n');
  elementClose('style');
  text('\n\n');
  elementOpenStart('div');
  attr('class', function() {
    var values = [];
    values.push('dot ');
    if (context['hover']) {
      values.push('hover');
    };
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
  attr('onmouseover', function() {
    var values = [];
    values.push(context['mouseover']);
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
  attr('onmouseleave', function() {
    var values = [];
    values.push(context['mouseleave']);
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
    values.push('width: ');
    values.push(context['width']);
    values.push('px; height: ');
    values.push(context['height']);
    values.push('px; left: ');
    values.push(context['left']);
    values.push('px; top: ');
    values.push(context['top']);
    values.push('px; border-radius: ');
    values.push(context['borderRadius']);
    values.push('px; line-height: ');
    values.push(context['lineHeight']);
    values.push('px;');
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
  if (context['hover']) {
    text('\n        *');
    text(context['seconds']);
    text('*\n    ');
  };
  text('\n    ');
  if (context['nohover']) {
    text('\n        ');
    text(context['seconds']);
    text('\n    ');
  };
  text('\n');
  elementClose('div');
};
var render = function(el, data) {
  idom.patch(el, idomRender, data);
}
export {
  render
};