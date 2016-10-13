import test from 'tape';
import todo from './todo.state';

test('todo reducer', nested => {
  nested.test('ADD_TODO', nested => {
    nested.test('should add todo object to state array', test => {
      const initialState = [];
      const payload = {
        id: 0,
        text: 'Learn redux'
      }
      const action = {
        type: 'ADD_TODO',
        payload
      }
      const actual = todo(initialState, action);
      const expected = [Object.assign({}, payload, {completed: false})];
      const msg = `${actual} should deepEqual ${expected}`;

      test.deepEqual(actual, expected, msg);
      test.end();
    });
    nested.test('should return new state', test => {
      const initialState = [1, 2, 3];
      const initialStateCopy = [...initialState];
      let actual = todo(initialState, {type: 'INVALID_ACTION'});
      let msg = `state returned from reducer should not point to initial state`;

      test.notEqual(actual, initialState, msg);

      msg = `${actual} should deepEqual ${initialStateCopy}`
      test.deepEqual(actual, initialStateCopy, msg);
      test.end();
    });
  });
  nested.test('TOGGLE_TODO', nested => {
    nested.test('should toggle value of completed property', test => {
      const initialState = [
        {
          id: 0,
          text: 'Write test',
          completed: false
        },
        {
          id: 1,
          text: 'Write reducer',
          completed: false
        },
        {
          id: 2,
          text: 'Run test',
          completed: false
        }
      ];
      const action = {
        type: 'TOGGLE_TODO',
        payload: {
          id: 1
        }
      };
      const actual = todo(initialState, action);
      const expected = initialState.map(obj => { 
        const newObject = Object.assign({}, obj);

        if (newObject.id === action.payload.id) 
          newObject.completed = !newObject.completed;

        return newObject;
      });
      const msg = `${ actual }` +
                  ` should equal ${expected}`;

      test.deepEqual(actual, expected, msg);
      test.end();
    });
    nested.test('should return new state to avoid mutations', test => {
      test.end();
    });
  });
});