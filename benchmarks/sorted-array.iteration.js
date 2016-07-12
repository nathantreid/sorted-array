const Benchmark = require('benchmark');
global.require = require;
// process.exit(0)
const suite = new Benchmark.Suite();

suite
  .add('Array - iteration', function () {
    var sum = 0;
    for (var i = 0; i < array.length; i++)
      sum += array[i];
    return sum;
  }, {
    setup: function () {
      const filler = new Array(50);
      filler.fill(1);
      const array = [];
      for (var i = 0; i < filler.length; i++)
        array.push(filler[i]);
    }
  })
  .add('Array with length - iteration', function () {
    var sum = 0;
    for (var i = 0; i < array.length; i++)
      sum += array[i];
    return sum;
  }, {
    setup: function () {
      const filler = new Array(50);
      filler.fill(1);
      const array = new Array(50);
      for (var i = 0; i < filler.length; i++)
        array[i] = filler[i];
    }
  })
  .add('SortedArray - iteration', function () {
    var sum = 0;
    for (var i = 0; i < array.length; i++)
      sum += array[i];
    return sum;
  }, {
    setup: function () {
      const SortedArray = global.require('../sorted-array');
      const filler = new Array(50);
      filler.fill(1);
      const array = new SortedArray(filler);
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
