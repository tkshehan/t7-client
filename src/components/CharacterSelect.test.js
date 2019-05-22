import React from 'react';
import {shallow, mount} from 'enzyme';

import CharacterSelect from './CharacterSelect';
const characters = ['1', '2', '3'];

describe('<CharacterSelect />', () => {
  it('Renders without crashing', () => {
    shallow(<CharacterSelect characters={characters} />);
  });

  it('Should render a list of characters', () => {
    const wrapper = shallow(<CharacterSelect characters={characters} />);
    const list = wrapper.find('li');
    expect(list.length).toEqual(characters.length);
  });

  it('Should fire a callback when a button is clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(
      <CharacterSelect
        selectCharacter={callback}
        characters={characters}
      />);
    wrapper.find('button').first().simulate('click');
    expect(callback).toHaveBeenCalledWith(characters[0]);
  });
});