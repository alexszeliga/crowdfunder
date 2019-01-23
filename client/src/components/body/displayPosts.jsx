import React, { Component } from "react";
import "./displayPosts.css";

class DisplayPosts extends Component {
  showPosts = postArray => {
    if (postArray.length > 0) {
      return (
        <ul>
          {this.props.posts.map((post, i) => {
            return (
              <li>
                <h3
                  className="postLink"
                  id={post._id}
                  onClick={this.props.handleDisplayPost}
                >
                  {post.title}
                </h3>
                <div className="tagRow">
                  {post.tags.map((tag, i) => {
                    return <span className="tag">{tag}</span>;
                  })}
                </div>
              </li>
            );
          })}
        </ul>
      );
    }
  };
  render() {
    if (this.props.posts.length > 0) {
      return (
        <div className="displayPosts">
          <div className="postListWrapper">
            {this.showPosts(this.props.posts)}
          </div>
        </div>
      );
    } else {
      return (
        <div className="displayPosts">
          <h1>Posts Table</h1>
          <div>Controls like search</div>
          <h1>No posts</h1>
        </div>
      );
    }
  }
}

export default DisplayPosts;
