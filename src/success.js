import React, { Component } from "react";
import "./App.css";

export default class success extends Component {
  render() {
    return (
      <div class="successContainer">
        <div class="successMsg">
          <i class="fa fa-check checkIcon" aria-hidden="true"></i>
          <p>Your order is placed successfully.</p>
        </div>
      </div>
    );
  }
}
