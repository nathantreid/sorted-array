const Benchmark = require('benchmark');
global.require = require;
// process.exit(0)
const suite = new Benchmark.Suite();

suite
  .add('Array, unsorted', function () {
    array.push(i);
  }, {
    setup: function () {
      const array = [];
      let i = 10;
    }
  })
  .add('Array, unsorted with push function', function () {
    array.push2(i);
  }, {
    setup: function () {
      const array = [];
      array.push2 = function (i) {
        array.push(i);
      };
      let i = 10;
    }
  })
  .add('Array#sort', function () {
    array.push(i);
    array.sort(compareDefault);
    array.push(i);
    array.sort(compareDefault);
    array.push(i);
    array.sort(compareDefault);
    array.push(i);
    array.sort(compareDefault);
    array.push(i);
    array.sort(compareDefault);
    array.push(i);
    array.sort(compareDefault);
    array.push(i);
    array.sort(compareDefault);
    array.push(i);
    array.sort(compareDefault);
    array.push(i);
    array.sort(compareDefault);
    array.push(i);
    array.sort(compareDefault);
  }, {
    setup: function () {
      const array = [];
      let i = 10;

      function compareDefault(a, b) {
        if (a === b) return 0;
        return a < b ? -1 : 1;
      }
    }
  })
  .add('Array#sort batch', function () {
    array.push(i);
    array.push(i);
    array.push(i);
    array.push(i);
    array.push(i);
    array.push(i);
    array.push(i);
    array.push(i);
    array.push(i);
    array.push(i);
    array.sort(compareDefault);
  }, {
    setup: function () {
      const array = [];
      let i = 10;

      function compareDefault(a, b) {
        if (a === b) return 0;
        return a < b ? -1 : 1;
      }
    }
  })
  .add('SortedArray - sort on insert', function () {
    array.push(i);
    array.push(i);
    array.push(i);
    array.push(i);
    array.push(i);
    array.push(i);
    array.push(i);
    array.push(i);
    array.push(i);
    array.push(i);
  }, {
    setup: function () {
      const SortedArray = global.require('../sorted-array');
      const array = new SortedArray();
      let i = 10;
    }
  })
  .add('SortedArray2 - sort on insert', function () {
    array.push(i);
    array.push(i);
    array.push(i);
    array.push(i);
    array.push(i);
    array.push(i);
    array.push(i);
    array.push(i);
    array.push(i);
    array.push(i);
  }, {
    setup: function () {
      const SortedArray = global.require('./sorted-array2');
      const array = new SortedArray();
      let i = 10;
    }
  })
  .add('SortedArray, prefilled 10, push = 1', function () {
    array.push(1);
  }, {
    setup: function () {
      const SortedArray = global.require('../sorted-array');
      const array = new SortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }
  })
  .add('SortedArray2, prefilled 10, push = 1', function () {
    array.push(1);
  }, {
    setup: function () {
      const SortedArray = global.require('./sorted-array2');
      const array = new SortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }
  })
  .add('SortedArray, prefilled 10, push = 3', function () {
    array.push(3);
  }, {
    setup: function () {
      const SortedArray = global.require('../sorted-array');
      const array = new SortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }
  })
  .add('SortedArray2, prefilled 10, push = 3', function () {
    array.push(3);
  }, {
    setup: function () {
      const SortedArray = global.require('./sorted-array2');
      const array = new SortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }
  })
  .add('SortedArray, prefilled 10, push = 5', function () {
    array.push(5);
  }, {
    setup: function () {
      const SortedArray = global.require('../sorted-array');
      const array = new SortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }
  })
  .add('SortedArray2, prefilled 10, push = 5', function () {
    array.push(5);
  }, {
    setup: function () {
      const SortedArray = global.require('./sorted-array2');
      const array = new SortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }
  })
  .add('SortedArray, prefilled 10, push = 10', function () {
    array.push(10);
  }, {
    setup: function () {
      const SortedArray = global.require('../sorted-array');
      const array = new SortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }
  })
  .add('SortedArray2, prefilled 10, push = 10', function () {
    array.push(10);
  }, {
    setup: function () {
      const SortedArray = global.require('./sorted-array2');
      const array = new SortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }
  })
  .add('SortedArray, prefilled 100, push = 0', function () {
    array.push(0);
  }, {
    setup: function () {
      const SortedArray = global.require('../sorted-array');
      let fill = [];
      for (var i = 0; i < 100; i++)
        fill.push(i + 1);
      const array = new SortedArray(fill);
    }
  })
  .add('SortedArray2, prefilled 100, push = 0', function () {
    array.push(0);
  }, {
    setup: function () {
      const SortedArray = global.require('./sorted-array2');
      let fill = [];
      for (var i = 0; i < 100; i++)
        fill.push(i + 1);
      const array = new SortedArray(fill);
    }
  })
  .add('SortedArray, prefilled 100, push = 10', function () {
    array.push(10);
  }, {
    setup: function () {
      const SortedArray = global.require('../sorted-array');
      let fill = [];
      for (var i = 0; i < 100; i++)
        fill.push(i + 1);
      const array = new SortedArray(fill);
    }
  })
  .add('SortedArray2, prefilled 100, push = 10', function () {
    array.push(10);
  }, {
    setup: function () {
      const SortedArray = global.require('./sorted-array2');
      let fill = [];
      for (var i = 0; i < 100; i++)
        fill.push(i + 1);
      const array = new SortedArray(fill);
    }
  })
  .add('SortedArray, prefilled 100, push = 50', function () {
    array.push(50);
  }, {
    setup: function () {
      const SortedArray = global.require('../sorted-array');
      let fill = [];
      for (var i = 0; i < 100; i++)
        fill.push(i + 1);
      const array = new SortedArray(fill);
    }
  })
  .add('SortedArray2, prefilled 100, push = 50', function () {
    array.push(50);
  }, {
    setup: function () {
      const SortedArray = global.require('./sorted-array2');
      let fill = [];
      for (var i = 0; i < 100; i++)
        fill.push(i + 1);
      const array = new SortedArray(fill);
    }
  })
  .add('SortedArray, prefilled 100, push = 75', function () {
    array.push(75);
  }, {
    setup: function () {
      const SortedArray = global.require('../sorted-array');
      let fill = [];
      for (var i = 0; i < 100; i++)
        fill.push(i + 1);
      const array = new SortedArray(fill);
    }
  })
  .add('SortedArray2, prefilled 100, push = 75', function () {
    array.push(75);
  }, {
    setup: function () {
      const SortedArray = global.require('./sorted-array2');
      let fill = [];
      for (var i = 0; i < 100; i++)
        fill.push(i + 1);
      const array = new SortedArray(fill);
    }
  })
  .add('SortedArray, prefilled 100, push = 100', function () {
    array.push(100);
  }, {
    setup: function () {
      const SortedArray = global.require('../sorted-array');
      let fill = [];
      for (var i = 0; i < 100; i++)
        fill.push(i + 1);
      const array = new SortedArray(fill);
    }
  })
  .add('SortedArray2, prefilled 100, push = 100', function () {
    array.push(100);
  }, {
    setup: function () {
      const SortedArray = global.require('./sorted-array2');
      let fill = [];
      for (var i = 0; i < 100; i++)
        fill.push(i + 1);
      const array = new SortedArray(fill);
    }
  })
  // add listeners
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    // console.dir(this)
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  });

suite.run({ 'async': true });
