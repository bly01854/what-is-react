import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './Home';

export default function Main(){
    return (
      <main>
          <Switch>
              <Route exact path='/' component={Home} />
          </Switch>
      </main>
    )
  }
