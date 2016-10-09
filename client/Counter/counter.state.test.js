import test from 'tape';

import counter from './counter.state';

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

    testSamples.forEach(({actual, expected}) => test.equal(actual, expected, `${actual} should equal ${expected}`));

    test.end();
  });
});