import React from 'react';
import Modal from './Modal';

class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  toggleModal = () => {
    const set = !this.state.showModal;
    this.setState({
      showModal: set
    });
  }

  render() {
    let punishment = '';
    if (this.props.resources) {
      punishment = (
        < >
          <Modal
            url={this.props.resources.punishment}
            show={this.state.showModal}
            key={this.props.resources.punishment}
          />

          <p>
            <button onClick={this.toggleModal}>
              Punishment Guide
          </button>
          </p>
        </>);
    }

    return (
      <section className="resources">
        {punishment}
      </section>
    )
  }
}

export default Resources;