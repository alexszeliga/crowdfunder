import React, { Component } from "react";
import DisplayPosts from "./displayPosts";
import Axios from "axios";

class UserHome extends Component {
  state = {};

  componentDidMount() {
    // this.props.getPosts("test");
    // console.log(this.props.userDataLogged);
  }
  render() {
    return (
      <div>
        <h1>User Home</h1>
        <DisplayPosts posts={this.props.userPosts} />
      </div>
    );
  }
}

export default UserHome;
