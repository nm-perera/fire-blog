import React, { Component } from "react";
import { firebase, firestore } from "../../firebase";
import { Link } from "react-router-dom";

class PostDetails extends Component {
  state = {
    title: "",
    author: "",
    image: "",
    imageURL: "",
    content: ""
  };
  componentDidMount = () => {
    const { id } = this.props.match.params;
    firestore
      .collection("posts")
      .doc(id)
      .get()
      .then(doc => {
        const { title, image, imageURL, content, author } = doc.data();
        this.setState({
          title,
          image,
          imageURL,
          content,
          author
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  handleDelete = id => {
    firestore
      .collection("posts")
      .doc(id)
      .delete()
      .then(doc => {
        this.props.history.push("/");
      });
    firebase
      .storage()
      .ref()
      .child(`images/${this.state.image}`)
      .delete()
      .then(() => {});
  };
  render() {
    const { title, image, imageURL, content, author } = this.state;
    const { id } = this.props.match.params;
    console.log(imageURL);
    return (
      <div className="postDetails">
        <div className="postDetails__img">
          <img src={imageURL} alt={image} />
        </div>
        <div className="postDetails__wrapper">
          <h1>{title}</h1>
          <span className="post__content__details">
            <i className="fas fa-camera-retro" /> Life Styles Tags: people April
            20, 2018 By {author}
          </span>
          <div className="postDetails__body">
            <p>{content}</p>
          </div>
          <div className="postDetails__options">
            <Link to={`/post/edit/${id}`} className="btn btn-primary">
              Edit Post
            </Link>
            <button
              className="btn-secondary btn-danger-color"
              onClick={() => this.handleDelete(id)}
            >
              Delete Post
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostDetails;
