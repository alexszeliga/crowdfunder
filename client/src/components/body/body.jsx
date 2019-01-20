import React, { Component } from "react";
import Hero from "./hero";
import ThreeUp from "./threeUp";
import DisplayPosts from "./displayPosts";
import NewPost from "./newPost";
import UserHome from "./userHome";
import "./body.css";
import Axios from "axios";

class Body extends Component {
  showUserName = () => {
    return;
  };

  bodyComponents = () => {
    let route = this.props.bodyRoute;
    switch (route) {
      case "/new-post":
        return (
          <NewPost
            handleInputChange={this.props.handleInputChange}
            newPostPostTitle={this.props.newPostPostTitle}
            newPostPostTags={this.props.newPostPostTags}
            newPostSubmitPost={this.props.newPostSubmitPost}
          />
        );
      case "/":
        return (
          <div>
            <ThreeUp clientWidth={this.props.clientWidth} />
            <DisplayPosts posts={this.props.allPosts} />
          </div>
        );
      case "/user-home":
        return (
          <UserHome
            userDataLogged={this.props.userDataLogged}
            userPosts={this.props.userPosts}
            getPosts={this.props.getPosts}
          />
        );
      default:
        return <ThreeUp clientWidth={this.props.clientWidth} />;
    }
  };

  render() {
    return (
      <div>
        <Hero clientWidth={this.props.clientWidth} />
        <div className="wrapper">
          {`UserName: ${this.props.userDataLogged.username}`}
          {this.bodyComponents()}
        </div>
      </div>
    );
  }
}

export default Body;
