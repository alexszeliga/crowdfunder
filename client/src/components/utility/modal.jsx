import React, { Component } from "react";
import CloseButton from "./closeButton";

class Modal extends Component {
  modalBodyComponent = () => {
    let { toggleModal, modalRoute, modalReset } = this.props;
    modalReset();
    switch (modalRoute) {
      case "message":
        return <div>This is the message Modal</div>;
      default:
        return <div>modal404</div>;
    }
  };
  render() {
    let { toggleModal } = this.props;
    return (
      <div class={`fixed pin z-50 overflow-auto bg-smoke-light flex hidden`}>
        <div
          class={`relative p-8 bg-white w-full max-w-md m-auto flex-col flex`}
        >
          <CloseButton toggleModal={toggleModal} />
          <div>{this.modalBodyComponent()}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
