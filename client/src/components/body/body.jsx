import React, { Component } from "react";
import Hero from "./hero";
import ThreeUp from "./threeUp";
import DisplayPosts from "./displayPosts";
import NewPost from "./newPost";
import UserHome from "./userHome";
import SinglePost from "./singlePost";
import "./body.css";

class Body extends Component {
  showUserName = () => {
    return;
  };

  render() {
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
            <Hero clientWidth={this.props.clientWidth} />
            <div className="wrapper">
              <ThreeUp clientWidth={this.props.clientWidth} />
              <DisplayPosts
                posts={this.props.allPosts}
                handleDisplayPost={this.props.handleDisplayPost}
              />
            </div>
          </div>
        );
      case "/user-home":
        return (
          <div className="wrapper">
            <UserHome
              userDataLogged={this.props.userDataLogged}
              userPosts={this.props.userPosts}
              handleDisplayPost={this.props.handleDisplayPost}
            />
          </div>
        );
      case "/single-post":
        return (
          <div>
            <Hero clientWidth={this.props.clientWidth} />
            <div className="wrapper">
              <SinglePost
                currentPostId={this.props.currentPostId}
                getSinglePost={this.props.getSinglePost}
                currentPostData={this.props.currentPostData}
              />
            </div>
          </div>
        );
      default:
        return <ThreeUp clientWidth={this.props.clientWidth} />;
    }
  }
}

export default Body;
