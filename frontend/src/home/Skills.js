import { Button, Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import BuildIcon from '@material-ui/icons/Build'
import PaletteIcon from '@material-ui/icons/Palette'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  poppyIntro: {
    display: 'flex',
    flexDirection: 'column',
  },
  pic: {
    [theme.breakpoints.up('sm')]: {
      marginRight: '3rem',
    },
  },
  quoteText: {
    fontSize: 30,
    textAlign: 'center',
  },
  icon: {
    marginTop: '1rem',
  },
  personText: {
    textAlign: 'center',
    marginTop: '1rem',
  },
  leftDiscription: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,

    marginRight: '1.5rem',
    fontSize: 25,
    borderTop: '8px solid blue',
  },
  rightDiscription: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginLeft: '1.5rem',
    fontSize: 25,
    borderTop: '8px solid blue',
  },
  skills: {
    margin: '3rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    flexGrow: 1,
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  viewButton: {},
}))

export default function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.skills}>
        <Paper elevation={5} className={classes.leftDiscription}>
          <div>
            <PaletteIcon />
          </div>
          <Typography>
            Web Design User Focused A website should be designed for the people who will use it, so
            that's exactly what I do. User focused design should be the primary goal of any website.
          </Typography>
        </Paper>
        <Paper elevation={5} className={classes.rightDiscription}>
          <div>
            <BuildIcon />
          </div>
          <Typography>
            Web Development Responsive and Fast Every website should be built with two primary
            goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as
            possible.
          </Typography>
        </Paper>
      </div>
      <div className={classes.viewButton}>
        <Button>View All Services</Button>
      </div>
    </div>
  )
}
