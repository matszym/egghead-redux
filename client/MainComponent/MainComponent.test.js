import React from 'react';
import {shallow} from 'enzyme';
import test from 'tape';

import MainComponent from './MainComponent';

test('<MainComponent />', nested => {
  nested.test('should render', test => {
    const wrapper = shallow(<MainComponent />);

    const actual = wrapper.text();
    const msg = `'${wrapper.text()}' should contain 'rendered'`;

    test.assert(actual, msg);
    test.end();
  });
});
