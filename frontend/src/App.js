import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import About from './about'
import Home from './home'
import useAtTop from './hooks/useAtTop'
import NavBar from './NavBar'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import { useLocation } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  appBar: ({ atTop, isHome }) => ({
    display: atTop && isHome ? 'none' : '',
  }),
}))
export default function App() {
  const atTop = useAtTop()
  const isHome = useLocation().pathname === '/'
  console.log(useLocation())
  const classes = useStyles({ atTop, isHome })
  return (
    <div style={{ scrollX: 'hidden' }}>
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
