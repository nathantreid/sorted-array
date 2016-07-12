import SortedArray from './sorted-array2';

import chai from 'chai';
const expect = chai.expect;

describe('constructor', function () {

  it('it should add the passed in array to the sorted array', function () {
    const sortedArray = new SortedArray([1, 2, 3, 3, 4]);
    expect([...sortedArray]).to.eql([1, 2, 3, 3, 4]);
  });

  it('it should sort the passed in array elements', function () {
    const sortedArray = new SortedArray([4, 2, 4, 1, 3]);

    expect([...sortedArray]).to.eql([1, 2, 3, 4, 4]);
  });

  it('it should sort using the custom comparator', function () {
    function reverseSort(a, b) {
      if (a === b) return 0;
      return b < a ? -1 : 1;
    }

    const sortedArray = new SortedArray([4, 2, 1, 3], reverseSort);

    expect([...sortedArray]).to.eql([4, 3, 2, 1]);
  });

});

describe('.push', function () {

  it('it should add the new element to the array', function () {
    const sortedArray = new SortedArray();
    sortedArray.push(3);
    expect([...sortedArray]).to.eql([3]);
  });

  it('it should sort the new element when adding it to the array', function () {
    const sortedArray = new SortedArray();
    sortedArray.push(3);

    sortedArray.push(5);
    expect([...sortedArray]).to.eql([3, 5]);

    sortedArray.push(2);
    expect([...sortedArray]).to.eql([2, 3, 5]);

    sortedArray.push(1);
    expect([...sortedArray]).to.eql([1, 2, 3, 5]);
  });

});

describe('.indexOf', function () {

  it('it should return the index of the given element', function () {
    const sortedArray = new SortedArray([1, 2, 3, 4]);
    let index = sortedArray.indexOf(3);
    expect(index).to.equal(2);
  });

});


describe('.remove', function () {

  it('it should remove the element from the array', function () {
    const sortedArray = new SortedArray([1, 2, 3, 4]);
    sortedArray.remove(3);
    expect([...sortedArray]).to.eql([1, 2, 4]);
  });

});
