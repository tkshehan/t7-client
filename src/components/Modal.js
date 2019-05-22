import React from 'react';

class Modal extends React.Component {
  render() {
    let className = 'modal';
    if (!this.props.show) {
      className = 'modal hidden';
    }

    return (
      <div className={className}>
        <iframe width="420" height="315"
          title={this.props.url}
          src={this.props.url}>
        </iframe>
      </div>
    )
  }
}

export default Modal;