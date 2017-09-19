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
  text('\n');
  if (context['recurse']) {
    text('\n');
    elementOpenStart('sierpinski-triangle');
    attr('x', function() {
      var values = [];
      values.push(context['x1']);
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
      values.push(context['y1']);
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
    text('\n');
    elementOpenStart('sierpinski-triangle');
    attr('x', function() {
      var values = [];
      values.push(context['x2']);
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
      values.push(context['y2']);
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
    text('\n');
    elementOpenStart('sierpinski-triangle');
    attr('x', function() {
      var values = [];
      values.push(context['x3']);
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
      values.push(context['y3']);
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
    text('\n');
  };
  text('\n\n\n');
  if (context['norecurse']) {
    text('\n');
    elementOpenStart('triangle-dot');
    attr('x', function() {
      var values = [];
      values.push(context['x4']);
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
      values.push(context['y4']);
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
    attr('size', function() {
      var values = [];
      values.push(context['targetSize']);
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
    elementOpenEnd('triangle-dot');
    elementClose('triangle-dot');
    text('\n');
  };
  text('\n\n');
};
var render = function(el, data) {
  idom.patch(el, idomRender, data);
}
export {
  render
};