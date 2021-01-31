import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import About from './about'
import Home from './home'
import useAtTop from './hooks/useAtTop'
import NavBar from './components/NavBar'

const useStyles = makeStyles(theme => ({
  appBar: ({ atTop, isHome }) => ({
    display: atTop && isHome ? 'none' : '',
  }),
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
      <AppBar className={classes.appBar}>
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
    </div>
  )
}
