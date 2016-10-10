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
  nested.test('should add neutral class modifier to counter__value when value === 0', test => {
    const wrapper = shallow(
      <CounterComponent 
        value={ 0 }
      />);

    const actual = wrapper.find('.counter__value').hasClass('counter__value--neutral');
    const msg = `${wrapper.find('.counter__value').node.props.className} should contain counter__value--neutral`;

    test.assert(actual, msg);
    test.end();
  });
  nested.test('should add positive class modifier to counter__value when value > 0', test => {
    const wrapper = shallow(
      <CounterComponent
        value={ 1 }
      />);
    const actual = wrapper.find('.counter__value').hasClass('counter__value--positive');
    const msg = `${wrapper.find('.counter__value').node.props.className} should contain counter__value--positive`;
  
    test.assert(actual, msg);
    test.end();
  });
  nested.test('should add negative class modifier to counter__value when value < 0', test => {
    const wrapper = shallow(
      <CounterComponent
        value={ -1 }
      />);
    const actual = wrapper.find('.counter__value').hasClass('counter__value--negative');
    const msg = `${wrapper.find('.counter__value').node.props.className} should contain counter__value--negative`;
  
    test.assert(actual, msg);
    test.end();
  });
});