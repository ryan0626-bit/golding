import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import About from './about'
import BottomChat from './components/chat'
import NavBar from './components/NavBar'
import Home from './home'
import useAtTop from './hooks/useAtTop'

const useStyles = makeStyles(theme => ({
  appBar: ({ atTop, isHome }) => ({}),
  root: {
    scrollX: 'hidden',
  },
}))
export default function App() {
  const atTop = useAtTop()
  const isHome = useLocation().pathname === '/'
  const classes = useStyles({ atTop, isHome })
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        color={atTop && isHome ? 'transparent' : 'primary'}
        className={classes.appBar}
      >
        <NavBar />
      </AppBar>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
      <BottomChat />
    </div>
  )
}
