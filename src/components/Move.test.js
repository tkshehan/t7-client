import React from 'react';
import {shallow} from 'enzyme';

import Move from './Move';

describe('<Move />', () => {
  it('Renders without crashing', () => {
    shallow(<Move properties={[]} />);
  });
});