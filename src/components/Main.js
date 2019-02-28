import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Why from './Why';
import JSX from './Learn/JSX';
import Components from './Learn/Components';

export default function Main(){
    return (
      <div>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/why' component={Why} />
              <Route path='/jsx' component={JSX} />
              <Route path='/components' component={Components} />
          </Switch>
      </div>
    )
  }
