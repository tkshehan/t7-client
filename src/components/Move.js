import React from 'react'

class Move extends React.Component {
  render() {
    let properties = Object.keys(this.props.properties);
    return (
      <tr>
        {
          properties.map((prop, i) => {
            return (<td key={i}>{this.props.properties[prop]}</td>);
          })
        }
      </tr>
    )
  }
}

export default Move
