const Benchmark = require('benchmark');
global.require = require;
// process.exit(0)
const suite = new Benchmark.Suite();

function setup(){
  const arr1 = [];

  for (var i = 0; i < 100; i++) {
    arr1.push(i);
  }

  function insertAt(array, index, element) {
    array.push(array[array.length-1]);
    var i = array.length - 2;
    while (--i>index) {
      array[i] = array[i-1];
    }
    array[index] = element;
  }

  function insertAt2(array, target, element) {
    var index = array.length;
    array.push(element);
    while (index > target) {
      var i = index, j = --index;
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}

suite
  .add('splice at 0', function () {
    arr1.splice(0, 0, 0);
  }, {
    setup
  })
  .add('insertAt 0', function () {
    insertAt(arr1, 0, 0);
  }, {
    setup
  })
  .add('insertAt2 0', function () {
    insertAt2(arr1, 0, 0);
  }, {
    setup
  })
  .add('splice at 99', function () {
    arr1.splice(99, 0, 0);
  }, {
    setup
  })
  .add('insertAt 99', function () {
    insertAt(arr1, 99, 0);
  }, {
    setup
  })
  .add('insertAt2 99', function () {
    insertAt2(arr1, 99, 0);
  }, {
    setup
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
