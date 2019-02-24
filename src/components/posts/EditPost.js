import React, { Component } from "react";
import { firestore } from "../../firebase";
import Form from "../util/Form";

class EditForm extends Component {
  state = {
    title: "",
    author: "",
    content: ""
  };
  componentDidMount = () => {
    const { id } = this.props.match.params;
    firestore
      .collection("posts")
      .doc(id)
      .get()
      .then(doc => {
        const { title, content, author } = doc.data();
        this.setState({ title, content, author });
      });
  };
  handleSubmit = post => {
    const { id } = this.props.match.params;
    firestore
      .collection("posts")
      .doc(id)
      .update(post)
      .then(doc => {
        this.props.history.push("/");
      });
  };
  render() {
    return (
      <div>
        <h3 className="content__title">Edit Post</h3>
        <Form handleSubmitHandler={this.handleSubmit} post={this.state} />
      </div>
    );
  }
}

export default EditForm;
