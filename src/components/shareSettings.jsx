import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Modal from "./modal";
class ShareSettings extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <Fragment>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <button
          className="btn btn-primary pl-3 pr-3 pt-2 pb-2"
          onClick={this.showModal}
        >
          Share
        </button>
      </Fragment>
    );
  }
}

export default ShareSettings;
