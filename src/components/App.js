import React, {Component} from 'react';
import CharacterSelect from './CharacterSelect';
import Movelist from './Movelist';

class App extends Component {
  render() {
    return (
      < >
        <header className="App-header">
          <p>Header</p>
        </header>
        <main>
          <CharacterSelect />
          <Movelist character={'Shaheen'} />
        </main>
        <footer>
          <p>Footer</p>
        </footer>
      </>
    );
  }
}

export default App;
