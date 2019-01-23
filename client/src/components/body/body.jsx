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
          <div
            class="wrapper top-element"
            style={{ paddingTop: `${this.props.navHeight}px` }}
          >
            <NewPost
              handleInputChange={this.props.handleInputChange}
              newPostPostTitle={this.props.newPostPostTitle}
              newPostPostTags={this.props.newPostPostTags}
              newPostSubmitPost={this.props.newPostSubmitPost}
            />
          </div>
        );
      case "/":
        return (
          <div
            className="top-element"
            style={{ paddingTop: `${this.props.navHeight}px` }}
          >
            <Hero
              clientWidth={this.props.clientWidth}
              headerText="Get Funded!"
              imgUrl={"./sky.jpg"}
            />
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
          <div
            className="wrapper top-element"
            style={{ paddingTop: `${this.props.navHeight}px` }}
          >
            <UserHome
              userDataLogged={this.props.userDataLogged}
              userPosts={this.props.userPosts}
              handleDisplayPost={this.props.handleDisplayPost}
            />
          </div>
        );
      case "/single-post":
        return (
          <div
            className="top-element"
            style={{ paddingTop: `${this.props.navHeight}px` }}
          >
            <Hero
              clientWidth={this.props.clientWidth}
              imgUrl={this.props.currentPostData.imgUrl}
              headerText={this.props.currentPostData.title}
            />
            <div className="wrapper">
              <SinglePost
                handleEditPost={this.props.handleEditPost}
                handlePostBlog={this.props.handlePostBlog}
                currentPostId={this.props.currentPostId}
                getSinglePost={this.props.getSinglePost}
                currentPostData={this.props.currentPostData}
                currentPostUser={this.props.currentPostUser}
                userDataLogged={this.props.userDataLogged}
              />
            </div>
          </div>
        );
      default:
        return (
          <div
            className="wrapper top-element"
            style={{ paddingTop: `${this.props.navHeight}px` }}
          >
            <ThreeUp clientWidth={this.props.clientWidth} />
          </div>
        );
    }
  }
}

export default Body;
