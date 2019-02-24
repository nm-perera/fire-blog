import React, { Component } from "react";
import { firebase, provider } from "../../firebase";
import UserForm from "../util/UserForm";

class SignUp extends Component {
  state = {
    user: null
  };
  componentDidMount = () => {
    const redirect = () => this.props.history.push("/");
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        redirect();
      }
    });
  };
  handleGoogleAuth = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        this.setState({ user: result.user });
      });
  };
  handleEmailAndPasswordAuth = () => {
    console.log("ok");
  };
  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <UserForm
          handleGoogleAuth={this.handleGoogleAuth}
          handleEmailAndPasswordAuth={this.handleEmailAndPasswordAuth}
        />
      </div>
    );
  }
}

export default SignUp;
