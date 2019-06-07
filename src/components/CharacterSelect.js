import React from 'react'
import {changeCharacter} from '../actions';
import {connect} from 'react-redux';

export class CharacterSelect extends React.Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.changeCharacter(event.target.value);
  }

  render() {
    return (
      <section className="charSelect">
        <div className="hamburger">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul>
            {
              this.props.characters.sort().map((char, i) => {
                return (
                  <li key={i}><button value={char} onClick={this.handleClick}>{char.toUpperCase()}</button></li>
                )
              })
            }
          </ul>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCharacter: (character) => dispatch(changeCharacter(character))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSelect);
