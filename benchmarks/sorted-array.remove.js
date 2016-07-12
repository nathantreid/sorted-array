const Benchmark = require('benchmark');
global.require = require;
// process.exit(0)
const suite = new Benchmark.Suite();

suite
  .add('Array.remove', function () {
    array.remove(1);
  }, {
    setup: function () {
      const array = [];
      for (var i = 0; i < 100; i++) {
        array.push(i)
      }
      array.remove = function remove(element) {
        var index = array.indexOf(element);
        if (index >= 0) array.splice(index, 1);
      }
    }
  })
  .add('SortedArray#remove', function () {
    array.remove(1);
  }, {
    setup: function () {
      const SortedArray = global.require('../sorted-array');
      const filler = new Array(100);
      for (var i = 0; i < filler.length; i++) {
        filler[i] = i;
      }
      const array = new SortedArray(filler);
    }
  })
  // add listeners
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  });

suite.run({ 'async': true });
