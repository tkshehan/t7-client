import React, {Component} from 'react';
import CharacterSelect from './CharacterSelect';
import MoveList from './MoveArray';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      characters: [],
      movelists: {},
      selected: '',
    };
  }

  componentDidMount() {
    fetch("https://t7-frames.herokuapp.com/frame-data")
      .then(res => {
        return res.json()
      })
      .then(
        (result) => {
          const characters = Object.keys(result);
          this.setState({
            isLoaded: true,
            characters: characters,
            movelists: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
          console.log(error);
        }
      )
  }

  selectCharacter = (char) => {
    this.setState({
      selected: char
    });
  }

  render() {
    const charMoves = this.state.movelists[this.state.selected];
    return (
      < >
        <header className="App-header">
        </header>
        <main>
          <CharacterSelect selectCharacter={this.selectCharacter} characters={this.state.characters} />
          <MoveList moves={charMoves} />
        </main>
        <footer>
          <p>
            {
              this.state.error
            }
          </p>
        </footer>
      </>
    );
  }
}

export default App;
