import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './about'
import Home from './home'
import NavBar from './NavBar'

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}
