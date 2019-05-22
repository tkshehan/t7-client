import React from 'react';
import {shallow} from 'enzyme';

import Resources from './Resources';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(<Resources />);
  });
});