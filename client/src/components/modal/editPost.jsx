import React, { Component } from "react";

class EditPost extends Component {
  state = {};

  render() {
    console.log(this.props.currentPostData);
    const { title, imgUrl, tags } = this.props.currentPostData;
    return (
      <div>
        <form>
          <label>Edit Post Title</label>
          <br />
          <input
            placeholder={title}
            onChange={this.props.handleInputChange}
            name="editPostTitle"
            value={this.props.editPostTitle}
          />
          <br />
          <label>Edit Post Image URL</label>
          <br />
          <input
            placeholder={imgUrl}
            onChange={this.props.handleInputChange}
            name="editPostImgUrl"
            value={this.props.editPostImgUrl}
          />
          <br />
          <label>Edit Post Tags</label>
          <br />
          <input
            placeholder={tags}
            onChange={this.props.handleInputChange}
            name="editPostTags"
            value={this.props.editPostTags}
          />
          <div className="button" onClick={this.props.handleUpdatePost}>
            Submit
          </div>
        </form>
      </div>
    );
  }
}

export default EditPost;
