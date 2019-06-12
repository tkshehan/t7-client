import React from 'react'

class Move extends React.Component {
  render() {
    let properties = Object.keys(this.props.properties);
    let onBlock = parseInt(this.props.properties.Block);
    let punish = '';
    if (onBlock <= -15) {
      punish = 'i15';
    } else if (onBlock <= -12) {
      punish = 'i12';
    } else if (onBlock <= -10) {
      punish = 'i10';
    }


    return (
      <tr>
        {
          properties.map((prop, i) => {
            if (i === 4) {
              return (<td className={punish} key={i}>
                {this.props.properties[prop]}
              </td>);
            } else {
              return (<td key={i}>
                {this.props.properties[prop]}
              </td>);
            }
          })
        }
      </tr>
    )
  }
}

export default Move
