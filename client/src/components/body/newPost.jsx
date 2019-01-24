import React, { Component } from "react";
import "./newPost.css";

class NewPost extends Component {
  state = {};
  render() {
    return (
      <div className="formWrapper">
        <form>
          <h1>What will they all be talking about tomorrow?</h1>
          <input
            className="newPostPostTitle"
            name="newPostPostTitle"
            onChange={this.props.handleInputChange}
            value={this.props.newPostPostTitle}
            placeholder="Title your campaign"
          />
          <h2>Tag your campaign</h2>
          <input
            className="newPostPostTags"
            name="newPostPostTags"
            onChange={this.props.handleInputChange}
            value={this.props.newPostPostTags}
            placeholder="Tags,Separated,By,Commas"
          />
          <h2>What Picture Screams "This is it!" (url)</h2>
          <input
            className="newPostPostTags"
            name="newPostPostUrl"
            onChange={this.props.handleInputChange}
            value={this.props.newPostPostUrl}
            placeholder="Tags,Separated,By,Commas"
          />
          <br />
          <input
            type="submit"
            name="submit"
            className="theButton"
            onClick={this.props.newPostSubmitPost}
          />
        </form>
      </div>
    );
  }
}

export default NewPost;
