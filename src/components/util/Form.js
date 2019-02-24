import React, { Component } from "react";
import { firebase } from "../../firebase";
import FileUploader from "react-firebase-file-uploader";

class Form extends Component {
  state = {
    post: {
      title: "",
      author: "",
      content: "",
      image: "",
      imageURL: ""
    },
    isUploading: false,
    progress: 0
  };
  componentWillReceiveProps = (nextProps, prevState) => {
    this.setState({
      post: nextProps.post
    });
  };
  handleChange = event => {
    this.setState({
      post: {
        ...this.state.post,
        [event.target.name]: event.target.value
      }
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmitHandler(this.state.post);
  };
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleUploadSuccess = filename => {
    this.setState({
      post: {
        ...this.state.post,
        image: filename
      },
      progress: 100,
      isUploading: false
    });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url =>
        this.setState({ post: { ...this.state.post, imageURL: url } })
      );
  };
  render() {
    return (
      <form className="post__create" onSubmit={this.handleSubmit}>
        <label>Post Title:</label>
        <input
          type="text"
          name="title"
          value={this.state.post.title}
          onChange={this.handleChange}
        />
        <label>Post Author:</label>
        <input
          type="text"
          name="author"
          value={this.state.post.author}
          onChange={this.handleChange}
        />
        <label>Post Content:</label>
        <textarea
          name="content"
          value={this.state.post.content}
          onChange={this.handleChange}
        />
        <FileUploader
          accept="image/*"
          name="image"
          storageRef={firebase.storage().ref("images")}
          onUploadStart={this.handleUploadStart}
          onUploadSuccess={this.handleUploadSuccess}
        />
        {this.state.progress === 100 && <p>Images Ready..</p>}
        <button className="btn-secondary btn-main-color">Submit</button>
      </form>
    );
  }
}

export default Form;
