import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Why from './Why';

export default function Main(){
    return (
      <div>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/why' component={Why} />
          </Switch>
      </div>
    )
  }
