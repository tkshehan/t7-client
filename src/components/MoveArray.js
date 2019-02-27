import React from 'react'
import Move from './Move'

class MoveList extends React.Component {

  render() {
    if (!this.props.moves) {
      return (<h2>Tekken 7 Frame Data</h2>)
    }

    const moves = this.props.moves.moves.map((move, i) => {
      return (<Move key={i} properties={move} />)
    });
    return (
      <section>
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
      </section>
    )
  }
}


export default MoveList
