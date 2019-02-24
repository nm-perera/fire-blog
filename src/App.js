import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import PostList from "./components/posts/PostList";
import PostDetails from "./components/posts/PostDetails";
import NewPost from "./components/posts/NewPost";
import EditPost from "./components/posts/EditPost";
import SignUp from "./components/auth/SignUp";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={PostList} />
              <Route exact path="/post/new" component={NewPost} />
              <Route exact path="/post/:id" component={PostDetails} />
              <Route exact path="/post/edit/:id" component={EditPost} />
              <Route exact path="/user/signup" component={SignUp} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
