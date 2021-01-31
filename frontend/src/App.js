import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './about'
import Home from './home'
import useAtTop from './hooks/useAtTop'
import NavBar from './NavBar'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  appBar: ({ atTop }) => ({
    display: atTop ? 'none' : '',
  }),
}))
export default function App() {
  const atTop = useAtTop()
  const classes = useStyles({ atTop })
  return (
    <div style={{ scrollX: 'hidden' }}>
      <AppBar className={classes.appBar}>
        <NavBar />
      </AppBar>

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
