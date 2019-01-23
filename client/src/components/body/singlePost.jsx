import React, { Component } from "react";
import "./singlePost.css";

class SinglePost extends Component {
  componentDidMount() {
    this.props.getSinglePost(this.props.currentPostId);
  }

  render() {
    // console.log(this.props.currentPostData);
    // console.log(this.props.currentPostUser);

    let editable =
      this.props.currentPostData.user === this.props.userDataLogged._id;

    return (
      <div>
        {editable ? (
          <div className="postAdminMenu">
            <div onClick={this.props.handleEditPost} className="editButton">
              edit post
            </div>
            <div onClick={this.props.handlePostBlog} className="editButton">
              post blog
            </div>
          </div>
        ) : (
          ""
        )}
        <div>Posting User: {this.props.currentPostUser.username} </div>
        <div>Posted on: {this.props.currentPostData.createdAt}</div>
      </div>
    );
  }
}

export default SinglePost;
