import React, { Component } from "react";
import "./displayPosts.css";

class DisplayPosts extends Component {
  commaListToArray = stringList => {
    return stringList.split(",");
  };

  showPosts = postArray => {
    if (postArray.length > 0) {
      return (
        <ul>
          {/* render posts based on data object */}
          {this.props.posts.map((post, i) => {
            return (
              <li>
                <h1>{post.title}</h1>
                <section>
                  {post.tags.split(",").map((tag, i) => {
                    return <span className="tag">{tag}</span>;
                  })}
                </section>
              </li>
            );
          })}
        </ul>
      );
    }
  };
  render() {
    console.log(this.props.posts);
    if (this.props.posts.length > 0) {
      return (
        <div>
          <h1>Posts Table</h1>
          <div>Controls like search</div>
          {this.showPosts(this.props.posts)}
        </div>
      );
    } else {
      return (
        <div>
          <h1>Posts Table</h1>
          <div>Controls like search</div>
          <h1>No posts</h1>
        </div>
      );
    }
  }
}

export default DisplayPosts;
