import React from 'react';
import {shallow} from 'enzyme';

import Modal from './Modal';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(<Modal />);
  });
});