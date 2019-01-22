import React, { Component } from "react";
import DisplayPosts from "./displayPosts";

class UserHome extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1>User Home</h1>
        <DisplayPosts
          posts={this.props.userPosts}
          handleDisplayPost={this.props.handleDisplayPost}
        />
      </div>
    );
  }
}

export default UserHome;
