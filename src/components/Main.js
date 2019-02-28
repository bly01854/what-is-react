import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Why from "./Why";
import JSX from "./Learn/JSX";
import Components from "./Learn/Components";
import State from "./Learn/State";
import Lifecycle from "./Learn/Lifecycle";
import Events from "./Learn/Events";
import Next from "./Next";
import About from "./About";

export default function Main() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/why" component={Why} />
        <Route path="/jsx" component={JSX} />
        <Route path="/components" component={Components} />
        <Route path="/state" component={State} />
        <Route path="/lifecycle" component={Lifecycle} />
        <Route path="/events" component={Events} />
        <Route path="/next" component={Next} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}
