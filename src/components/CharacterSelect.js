import React from 'react'

class CharacterSelect extends React.Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.selectCharacter(event.target.value);
  }

  render() {
    return (
      <section className="charSelect">
        <ul>
          {
            this.props.characters.sort().map((char, i) => {
              return (
                <li key={i}><button value={char} onClick={this.handleClick}>{char.toUpperCase()}</button></li>
              )
            })
          }
        </ul>
      </section>
    )
  }
}

export default CharacterSelect
