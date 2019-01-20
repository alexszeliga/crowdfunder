import React, { Component } from "react";
import Hero from "./hero";
import ThreeUp from "./threeUp";
import PostsHome from "./postsHome";
import NewPost from "./newPost";
import "./body.css";

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
            <PostsHome />
          </div>
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
