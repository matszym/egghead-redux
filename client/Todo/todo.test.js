import test from 'tape';

import {toggleTodo} from './todo';

test('todo', nested => {
  nested.test('toggleTodo', nested => {
    nested.test('should flip value of completed', test =>{
      const todoBefore = {
        id: 0,
        text: 'Learn redux',
        completed: false
      };
      const todoAfter = {
        id: 0,
        text: 'Learn redux',
        completed: true
      }
      const actual = toggleTodo(todoBefore);
      const msg = `actual.completed should equal ${todoAfter.completed}`
      
      test.deepEqual(actual, todoAfter, msg);
      test.end();
    });
    nested.test('should not mutate object passed as argument', test => {
      const todoBefore = {
        id:0,
        text: 'Learn redux',
        completed: false
      };
      const todoBeforeCopy = Object.assign({}, todoBefore);
      const actual = toggleTodo(todoBefore);
      let msg = `todoBefore should deepEqual todoBeforeCopy after toggleTodo returns`;

      test.deepEqual(todoBefore, todoBeforeCopy, msg);
      msg = `todoBefore should not point to same array as actual`;
      test.notEqual(todoBefore, actual, msg);
      test.end();
    });
  });
});