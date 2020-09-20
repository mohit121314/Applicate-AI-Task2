import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import checkoutpage from "./checkoutpage";
import Home from "./Home";
import success from "./success";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/checkout" component={checkoutpage} />
        <Route exact path="/" component={Home} />
        <Route exact path="/success" component={success} />
      </Router>
    );
  }
}
