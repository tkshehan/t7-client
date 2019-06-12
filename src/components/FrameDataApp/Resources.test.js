import React from 'react';
import {shallow, mount} from 'enzyme';

import {Resources} from './Resources';
import Modal from './Modal';

const resource = {
  punishment: 'https://www.youtube.com/embed/pBX2T7R_DgY'
}

describe('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(<Resources />);
  });

  it('Renders a video without crashing', () => {
    const wrapper = mount(<Resources resources={resource} />);
    wrapper.setState({showModal: true});
    expect(wrapper.contains(Modal)).toEqual(true);
  });

  it('Should toggle the showModal state when button is clicked', () => {
    const wrapper = mount(<Resources resources={resource} />);
    const shown = wrapper.state('showModal');
    const button = wrapper.find('button');
    button.simulate('click');
    expect(wrapper.state('showModal')).toEqual(!shown);
  });
});