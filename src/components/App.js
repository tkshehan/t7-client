import React, {Component} from 'react';
import CharacterSelect from './CharacterSelect';
import MoveList from './MoveArray';
import Header from './Header';

import {connect} from 'react-redux';
import {setCharacters, setMoveData} from '../actions';

import resources from '../data/resources';
import {STORAGE_KEY} from '../data/config';

export class App extends Component {

  componentDidMount() {
    this.loadData();
    this.fetchAndSaveData();
  }

  loadData = () => {
    const result = localStorage.getItem(STORAGE_KEY) || false;
    if (!result) return;

    const moveData = JSON.parse(result);
    const characters = Object.keys(moveData);
    this.props.setCharacters(characters);
    this.props.setMoveData(moveData);
  }

  saveData = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  fetchAndSaveData = () => {
    fetch("https://t7frames-server.herokuapp.com/frame-data")
      .then(res => {
        return res.json()
      })
      .then(
        (result) => {
          const characters = Object.keys(result);
          this.props.setCharacters(characters);
          this.props.setMoveData(result);
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

  render() {
    const charMoves = this.props.moveData[this.props.selected];
    return (
      <>
        <Header char={this.props.selected} />
        <main>
          <CharacterSelect />
          <MoveList
            moves={charMoves}
            resources={resources[this.props.selected]}
          />
        </main>
        <footer>
        </footer>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selected: state.selected,
    moveData: state.moveData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCharacters: (characters) => dispatch(setCharacters(characters)),
    setMoveData: (moveData) => dispatch(setMoveData(moveData)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
