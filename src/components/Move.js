import React from 'react'

class Move extends React.Component {
  render() {
    return (
      <tr>
        {
          this.props.properties.map(prop => {
            return (<td>{prop}</td>);
          })
        }
      </tr>
    )
  }
}

export default Move
