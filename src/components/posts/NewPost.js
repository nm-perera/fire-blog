import React, { Component } from "react";
import { firestore } from "../../firebase";
import Form from "../util/Form";

class NewPost extends Component {
  handleSubmit = post => {
    firestore
      .collection("posts")
      .add(post)
      .then(doc => {
        this.props.history.push("/");
      });
  };
  render() {
    return (
      <div>
        <h3 className="content__title">New Post</h3>
        <Form handleSubmitHandler={this.handleSubmit} />
      </div>
    );
  }
}

export default NewPost;
