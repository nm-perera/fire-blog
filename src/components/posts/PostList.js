import React, { Component } from "react";
import { Link } from "react-router-dom";
import { firestore, firebase } from "../../firebase";
import Post from "./Post";

class PostList extends Component {
  state = {
    posts: [],
    user: null
  };
  unsubscribe = null;
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.unsubscribe = firestore
          .collection("posts")
          .onSnapshot(snapshot => {
            const posts = snapshot.docs.map(doc => {
              return {
                id: doc.id,
                ...doc.data()
              };
            });
            this.setState({ posts });
          });
      } else {
        this.props.history.push("/user/signup");
      }
    });
  };
  // componentWillUnmount = () => {
  //   this.unsubscribe();
  // };
  render() {
    const { posts } = this.state;
    return (
      <div>
        <Link to="/post/new" className="btn btn-primary">
          Create New Post
        </Link>
        <h3 className="content__title">Latest Posts</h3>
        {posts &&
          posts.map(post => {
            return <Post post={post} key={post.id} />;
          })}
      </div>
    );
  }
}

export default PostList;
