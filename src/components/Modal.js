import React from 'react';
import Iframe from 'react-simple-iframe';

class Modal extends React.Component {
  state = {
    iframeLoaded: false
  }

  handleLoadedIframe = () => {
    this.setState({
      iframeLoaded: true
    });
  }

  render() {

    const {iframeLoaded} = this.state;
    let className = 'modal';
    if (!this.props.show) {
      className = 'modal hidden';
    }
    return (
      <div className={className}>
        {!iframeLoaded && <p>LOADING....</p>}
        <Iframe
          src={this.props.url}
          frameBorder='0'
          height="315"
          width="420"
          onLoaded={this.handleLoadedIframe}
        />
      </div>
    )
  }
}

export default Modal;