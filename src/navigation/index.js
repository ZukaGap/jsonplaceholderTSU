import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeTable from "../components/Tables/HomeTable";
import PostTable from "../components/Tables/PostTable";

export default function Navigation() {
  return (
    <Router>
      <Link to="/" />
      <Switch>
        <Route exact path="/" component={HomeTable} />
        <Route path="/posts" component={PostTable} />
      </Switch>
    </Router>
  );
}
