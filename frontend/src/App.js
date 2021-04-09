import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import About from './about';
import BottomChat from './components/chat';
import NavBar from './components/NavBar';
import Home from './home';
import useAtTop from './hooks/useAtTop';
import useHeight from './hooks/useHeight';

const useStyles = makeStyles(theme => ({
  appBar: ({ atTop, isHome }) => ({}),
  root: {
    scrollX: 'hidden',
  },
  main: ({ appBarHeight }) => ({
    paddingTop: appBarHeight,
  }),
}));
export default function App() {
  const atTop = useAtTop();
  const isHome = useLocation().pathname === '/';
  const [appBarHeight, appBar] = useHeight();
  const classes = useStyles({ atTop, isHome, appBarHeight });
  return (
    <div className={classes.root}>
      <AppBar
        ref={appBar}
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
          <Home appBarHeight={appBarHeight} />
        </Route>
        <Redirect to="/" />
      </Switch>
      <BottomChat />
    </div>
  );
}
