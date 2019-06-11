import React, { Component, Suspense } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Posts from "./Posts/Posts";
import "./Blog.css";

const NewPost = React.lazy(() => import("./NewPost/NewPost"));

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/">
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post">New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route
            path="/new-post"
            render={() => (
              <Suspense fallback={<div>'loading...'</div>}>
                <NewPost />
              </Suspense>
            )}
          />
          <Route path="/" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
