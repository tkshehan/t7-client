import React from 'react';
import Modal from './Modal';
import {connect} from 'react-redux';
import resources from '../../../../data/resources';

export class Resources extends React.Component {
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
    if (resources[this.props.selected]) {
      punishment = (
        < >
          <Modal
            url={resources[this.props.selected].punishment}
            show={this.state.showModal}
            key={resources[this.props.selected].punishment}
          />

          <p>
            <button className="button" onClick={this.toggleModal}>
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

const mapStateToProps = (state) => {
  return {
    selected: state.selected,
  };
};

export default connect(mapStateToProps)(Resources);