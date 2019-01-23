import React, { Component } from "react";
import "./modal.css";
import EditPost from "./editPost";
import PostBlog from "./postBlog";

class Modal extends Component {
  state = {};
  modalBodyComponent = () => {
    switch (this.props.modalRoute) {
      case "editPost":
        return (
          <EditPost
            currentPostData={this.props.currentPostData}
            handleUpdatePost={this.props.handleUpdatePost}
            handleInputChange={this.props.handleInputChange}
          />
        );
      case "postBlog":
        return <PostBlog />;
      default:
        return <div>modal404</div>;
    }
  };
  render() {
    return (
      <div
        className={
          this.props.modalStatus ? "modalScreen" : "modalScreen hidden"
        }
      >
        <div className="modalBox">
          <div className="modalContent">
            <div className="modalClose2" onClick={this.props.modalReset} />
            {this.modalBodyComponent()}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
