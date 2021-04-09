import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minHeight: '1rem',
  },
}));

export default function Icons() {
  const classes = useStyles();
  return <div className={classes.root}></div>;
}
