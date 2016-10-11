import test from 'tape';

import {counter} from './counter.state';
import addCounter from './add-counter';
import removeCounter from './removeCounter';

test('counter', nested => {
  nested.test('should change state acording to action.type', test => {
    const testSamples = [
      { actual: counter(0, {type: 'INCREMENT'}), expected: 1 },
      { actual: counter(4, {type: 'INCREMENT'}), expected: 5 },
      { actual: counter(-5, {type: 'INCREMENT'}), expected: -4 },
      { actual: counter(123, {type: 'INCREMENT'}), expected: 124 },
      { actual: counter(222, {type: 'INCREMENT'}), expected: 223 },
      { actual: counter(0, {type: 'INCREMENT'}), expected: 1 },
      { actual: counter(0, {type: 'DECREMENT'}), expected: -1 },
      { actual: counter(11, {type: 'DECREMENT'}), expected: 10 },
      { actual: counter(-199, {type: 'DECREMENT'}), expected: -200 },
      { actual: counter(12, {type: 'DECREMENT'}), expected: 11 },
      { actual: counter(1, {type: 'DECREMENT'}), expected: 0 },
      { actual: counter(), expected: 0}
    ]

    testSamples.forEach(({actual, expected}) => test.equal(actual, expected, `-${actual} should equal ${expected}`));

    test.end();
  });
  nested.test('addCounter', nested => {
    nested.test('should add counter to array', test => {
      const listBefore = [];
      const listAfter = [0];
      const actual = addCounter(listBefore);
      
      test.deepEqual(listAfter, actual);
      test.end();
    });
    nested.test('should not mutate original array', test => {
      const listBefore = [];
      const beforeCopy = [...listBefore];
      const listAfter = [0];
      let actual = addCounter(listBefore);
      let msg = `listBefore and actual should not point to same array`;

      test.notEqual(actual, listBefore, msg);

      msg = `listBefore and beforeCopy should deepEqual`;
      test.deepEqual(listBefore, beforeCopy, msg);

      actual = listBefore.length;
      let expected = 0;
      msg = `listBefore.length should equal ${expected}`;
      test.equal(actual, expected, msg);
      test.end();
    });
  });
  nested.test('removeCounter', nested => {
    nested.test('should remove specified element from array', test => {
      const originalArray = [22, 14, 5, 2];
      const arg = {originalArray, index: 1};
      const actual = removeCounter(arg);
      const expected = [22, 5, 2];
      const msg = `${expected}, should not contain ${arg.originalArray[arg.index]}`

      test.deepEqual(actual, expected, msg);
      test.end();
    });
    nested.test('should not mutate original array', test => {
      const originalArray = [1, 2, 3, 4, 5];
      const copyArray = [...originalArray];
      const actual = removeCounter({originalArray, index: 3});
      const expected = [1, 2, 3, 5];
      const msg = `originalArray should deepEqual copyArray`;

      test.deepEqual(originalArray, copyArray, msg);
      test.end();
    });
  });
});