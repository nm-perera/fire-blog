import React, { Component } from "react";
import { firebase } from "../../firebase";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    user: null
  };
  handleLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.history.push("/user/signup");
      });
  };
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  };
  render() {
    const { user } = this.state;
    return (
      <nav>
        <div className="container">
          <Link to="/">
            <img src="/images/fire_logo.png" alt="logo" />
          </Link>
          {user ? (
            <ul className="menu">
              <li className="user__info">Welcome {user.displayName}</li>
              <li onClick={this.handleLogOut}>Log Out</li>
            </ul>
          ) : null}
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
