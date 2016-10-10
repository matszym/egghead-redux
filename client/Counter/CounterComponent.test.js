import React from 'react';
import {shallow} from 'enzyme';
import test from 'tape';
import {spy} from 'sinon';

import CounterComponent from './CounterComponent';
import {store} from './counter.state';

test('<CounterComponent />', nested => {
  nested.test('should render 0 as initial state', test => {
    const wrapper = shallow(<CounterComponent value={ store.getState() } />);


    const actual = wrapper.find('.counter__value').text();
    const expected = '0';
    const msg = `Initial counter value (${actual}), should equal ${expected}`;

    test.equal(actual, expected, msg);
    test.end();
  });
  nested.test('should call correct functions on button click', test => {
    const onIncrease = spy();
    const onDecrease = spy();
    const wrapper = shallow(
      <CounterComponent 
        value={ store.getState() } 
        onIncrease={ onIncrease }
        onDecrease={ onDecrease }
      />);

    wrapper.find('.counter__button--increase').simulate('click');
    let actual = onIncrease.called;

    test.assert(actual, `increase should be called when clicked + button`);

    wrapper.find('.counter__button--decrease').simulate('click');
    actual = onDecrease.called;

    test.assert(actual, `decrease should be called when clicked - button`);
    test.end();
  });
  nested.test('.counter__value modifiers', nested => {
    function processCounterComponent({value, classSuffix}) {
      const wrapper = shallow(
        <CounterComponent 
          value={ value }
        />);
  
      const actual = wrapper.find('.counter__value').hasClass(`counter__value${classSuffix}`);
      const msg = `${wrapper.find('.counter__value').node.props.className} should contain counter__value${classSuffix}`;

      return {actual, msg}
    }

    nested.test('--neutral', test => {
      const {msg, actual} = processCounterComponent({
        value: 0,
        classSuffix: '--neutral' 
      });
      
      test.assert(actual, msg);
      test.end()
    });
    nested.test('--positive', test => {
      const {msg, actual} = processCounterComponent({
        value: 1,
        classSuffix: '--positive'
      });

      test.assert(actual, msg);
      test.end();
    });
    nested.test('--negative', test => {
      const {msg, actual} = processCounterComponent({
        value: -1,
        classSuffix: '--negative'
      });

      test.assert(actual, msg);
      test.end();
    });
  })
});