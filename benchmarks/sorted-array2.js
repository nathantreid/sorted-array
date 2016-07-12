'use strict';
class SortedArray extends Array {

  constructor(array, compare = compareDefault) {
    super();
    this.compare = compare;
    if (array && array instanceof Array) {
      var length = array.length;
      var index = 0;

      while (index < length) this.push(array[index++]);
    }
  }

  push(element) {
    var array = this;
    var compare = this.compare;

    var high = array.length;
    var low = 0;

    if (high === 0) {
      super.push(element);
      return;
    }

    while (high >= low) {
      var index = (high + low) / 2 >>> 0;
      var ordering = compare(array[index], element);

      if (ordering < 0) low = index + 1;
      else if (ordering > 0) high = index;
      else {
        array.splice(index, 0, element);
        return;
      }

      if (high === low) {
        if (high > array.length)
          super.push(element);
        else {
          // ordering = compare(array[high], element);
          // if (ordering === 1) high += 1;
          array.splice(high, 0, element);
        }
        return;
      }

    }
  }

  push2(element) {
    super.push(element);

  }

  indexOf(element) {
    var array = this;
    var compare = this.compare;
    var high = array.length;
    var low = 0;

    while (high > low) {
      var index = (high + low) / 2 >>> 0;
      var ordering = compare(array[index], element);

      if (ordering < 0) low = index + 1;
      else if (ordering > 0) high = index;
      else return index;
    }

    return -1;
  }

  remove(element) {
    var index = this.indexOf(element);
    if (index >= 0) this.splice(index, 1);
    return this;
  }

}

SortedArray.comparing = function (property, array) {
  return new SortedArray(array, function (a, b) {
    return compareDefault(property(a), property(b));
  });
};

function compareDefault(a, b) {
  if (a === b) return 0;
  return a < b ? -1 : 1;
}

module.exports = SortedArray;

