import React, { Component } from "react";

class PostBlog extends Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <label>Blog Subject</label>
          <input
            onChange={this.props.handleInputChange}
            name="newBlogSubject"
            value={this.props.newBlogSubject}
          />
          <label>Blog Body</label>
          <br />
          <textarea
            onChange={this.props.handleInputChange}
            name="newBlogBody"
            className="modalTextarea"
            value={this.props.newBlogBody}
          />
          <div className="button" onClick={this.props.handlePostNewBlog}>
            Submit
          </div>
        </form>
      </div>
    );
  }
}

export default PostBlog;
