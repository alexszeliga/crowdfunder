import React, { Component } from "react";
import "./singlePost.css";

class SinglePost extends Component {
  componentDidMount() {
    this.props.getSinglePost(this.props.currentPostId);
    console.log(this.props.currentPostData.tags);
  }

  render() {
    return (
      <div>
        <h1>{this.props.currentPostData.title}</h1>
        {console.log(this.props.currentPostData.tags)}
      </div>
    );
  }
}

export default SinglePost;
