import React from 'react'
import Move from './Move'

class Movelist extends React.Component {
  render() {
    return (
      <section>
        <h2>{this.props.character}</h2>
        <table>
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
          <Move properties={['in rage 1 + 2', 'm', '55(10, 7, 7, 31)', '20 pc8~17', '- 22', 'KND', 'KND', 'Rage art']} />
          <Move properties={['in rage 1 + 2', 'm', '55(10, 7, 7, 31)', '20 pc8~17', '- 22', 'KND', 'KND', 'Rage art']} />
          <Move properties={['in rage 1 + 2', 'm', '55(10, 7, 7, 31)', '20 pc8~17', '- 22', 'KND', 'KND', 'Rage art']} />
        </table>
      </section>
    )
  }
}

export default Movelist
