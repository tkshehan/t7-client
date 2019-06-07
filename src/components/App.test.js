import React from 'react';
import {shallow} from 'enzyme';

import {App} from './App';
import Header from './Header';

describe('<App/>', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  });

  it('Renders <Header>', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header char={''} />)).toEqual(true);
  });

  it('Can change the selected Char', () => {
    const testChar = 'TestChar';
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    instance.selectCharacter(testChar);
    expect(wrapper.state('selected')).toEqual(testChar);
  });

  it('Should load the characters', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('characters')).not.toBe(undefined);
    expect(wrapper.state('characters').length).not.toBe(0);
  });
});