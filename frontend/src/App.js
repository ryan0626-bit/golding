import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './about'
import Home from './home'
import useAtTop from './hooks/useAtTop'
import NavBar from './NavBar'
import AppBar from '@material-ui/core/AppBar'

export default function App() {
  const atTop = useAtTop()
  console.log('App', atTop)
  return (
    <div style={{ scrollX: 'hidden' }}>
      {!atTop && (
        <AppBar>
          <NavBar />
        </AppBar>
      )}
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
