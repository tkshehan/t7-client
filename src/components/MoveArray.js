import React from 'react'
import Move from './Move'

class MoveList extends React.Component {

  render() {
    if (!this.props.isLoaded) {
      return (<section className="moveList">
        <h2>Tekken 7 Frame Data</h2>
        <h3>Please Wait...</h3>
        <p>Server may need to wake up</p>
      </section>)
    }
    if (!this.props.moves) {
      return (<section className="moveList">
        <h2>Tekken 7 Frame Data</h2>
        <h3>Select a Character</h3>
      </section>)
    }

    const moves = this.props.moves.moves.map((move, i) => {
      return (<Move key={i} properties={move} />);
    });

    let throwSection;
    if (this.props.moves.throws) {
      const throws = this.props.moves.throws.map((grab, i) => {
        return (<Move key={i} properties={grab} />);
      });
      throwSection = (
        < >
          <h3>Throws</h3>
          <table>
            <tbody>
              <tr>
                <th>Command</th>
                <th>Level</th>
                <th>Damage</th>
                <th>Startup</th>
                <th>Break</th>
                <th>BreakFrame</th>
                <th>Notes</th>
              </tr>
              {
                throws
              }
            </tbody>
          </table>
        </>
      )
    }

    return (
      <section className="moveList">
        <h2>{this.props.moves.character.toUpperCase()}</h2>
        <table>
          <tbody>
            <tr>
              <th>Command</th>
              <th>Hit level</th>
              <th>Damage</th>
              <th>Start up</th>
              <th>Block</th>
              <th>Hit</th>
              <th>Counter hit</th>
              <th>Notes</th>
            </tr>
            {
              moves
            }
          </tbody>
        </table>
        {
          throwSection
        }
      </section>
    )
  }
}


export default MoveList
