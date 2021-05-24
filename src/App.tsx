import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { HomePage, UserPage, RepoPage } from "./pages";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={<HomePage />} />
        <Route exact path="/user/:userName" children={<UserPage />} />
        <Route
          exact
          path="/user/:userName/repo/:repoName"
          children={<RepoPage />}
        />
        <Redirect to="/" from="*" />
      </Switch>
    </Router>
  );
};

export default App;
