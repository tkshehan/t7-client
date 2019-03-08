import React, {Component} from 'react';
import CharacterSelect from './CharacterSelect';
import MoveList from './MoveArray';
import initialData from '../initialData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      characters: [],
      movelists: {},
      selected: '',
      KEY: 'FRAMEDATA',
    };
  }

  componentDidMount() {
    this.loadData();
    this.fetchAndSaveData();
  }

  loadData = () => {
    const result = localStorage.getItem(this.state.KEY) || JSON.stringify(initialData);
    const data = JSON.parse(result);
    const characters = Object.keys(data);
    this.setState({
      characters: characters,
      movelists: data,
    });
  }

  saveData = (data) => {
    localStorage.setItem(this.state.KEY, JSON.stringify(data));
  }

  fetchAndSaveData = () => {
    fetch("https://t7frames-server.herokuapp.com/frame-data")
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
          this.saveData(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
          console.log('fetch error');
          (async () => {
            const delay = time => new Promise(res => setTimeout(() => res(), time));
            await delay(3000);
            this.fetchData();
          })();
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
          <MoveList isLoaded={this.state.isLoaded} moves={charMoves} />
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
