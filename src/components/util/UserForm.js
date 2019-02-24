import React, { Component } from "react";
import { firebase } from "../../firebase";

class UserForm extends Component {
  render() {
    return (
      <div className="user__create">
        <label>Email</label>
        <input type="text" name="email" />
        <label>Password</label>
        <input type="password" name="password" />
        <button
          className="btn-secondary btn-main-color"
          onClick={this.props.handleEmailAndPasswordAuth}
        >
          Sign Up
        </button>
        <button
          className="btn-secondary btn-blue-color"
          onClick={this.props.handleGoogleAuth}
        >
          Sign Up With Google
        </button>
      </div>
    );
  }
}

export default UserForm;
