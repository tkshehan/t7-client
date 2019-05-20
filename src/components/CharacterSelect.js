import React from 'react'

class CharacterSelect extends React.Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.selectCharacter(event.target.value);
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

export default CharacterSelect
