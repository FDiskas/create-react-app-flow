// @flow
import * as React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = 'Welcome to React';
  expect(wrapper.contains(welcome)).toEqual(true);
});
it('matches a snapshot', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
