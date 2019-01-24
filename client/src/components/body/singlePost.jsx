import React, { Component } from "react";
import "./singlePost.css";

class SinglePost extends Component {
  componentDidMount() {
    this.props.getSinglePost(this.props.currentPostId);
  }
  componentWillUnmount() {
    this.props.wipeCurrentPost();
  }
  showBlogs = blogArray => {
    if (blogArray) {
      return (
        <ul className="blogList">
          {blogArray.map((blog, i) => {
            return (
              <li className="blogWrapper">
                <h3 className="blogHeading" id={blog._id}>
                  {blog.subject}
                  <br />
                </h3>
                <p className="blogBody">{blog.body}</p>
              </li>
            );
          })}
        </ul>
      );
    }
  };
  render() {
    let editable =
      this.props.currentPostData.user === this.props.userDataLogged._id;

    return (
      <div>
        {editable ? (
          <div className="postAdminMenu">
            <div onClick={this.props.handleEditPost} className="editButton">
              edit post
            </div>
            <div onClick={this.props.handlePostBlog} className="editButton">
              post blog
            </div>
          </div>
        ) : (
          ""
        )}
        <div>Posting User: {this.props.currentPostUser.username} </div>
        <div>{this.showBlogs(this.props.currentPostData.blogs)}</div>
      </div>
    );
  }
}

export default SinglePost;
