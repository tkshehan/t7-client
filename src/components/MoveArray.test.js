import React from 'react';
import {shallow} from 'enzyme';

import MoveArray from './MoveArray';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(<MoveArray />);
  });
});