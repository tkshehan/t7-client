import React, {Component} from 'react';
import CharacterSelect from './CharacterSelect';
import MoveList from './MoveArray';
import Header from './Header';

import {connect} from 'react-redux';
import {fetchData, loadData} from '../actions';

export class App extends Component {
  componentDidMount() {
    this.props.loadData();
    this.props.fetchData();
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
    fetchData: () => dispatch(fetchData()),
    loadData: () => dispatch(loadData()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);