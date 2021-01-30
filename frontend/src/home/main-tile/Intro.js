import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import Seprator from '../../components/Seprator'
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '3rem',
    },
  },
  licenseBackground: {
    backgroundColor: 'white',
    flexShrink: 0,
    borderRadius: '.5rem',
    display: 'flex',
    marginBottom: '2rem',
  },
  license: {
    fontWeight: 'bold',
    padding: '0 .75rem 0 .75rem',
    textAlign: 'center',
    color: theme.palette.primary.dark,
  },
  textStyle: {
    alignItems: 'baseline',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '2rem',
    fontFamily: 'Arial',
    color: 'white',
  },
  solve: {
    fontFamily: 'Arial',
    color: 'white',
    marginBottom: '.5rem',
  },
  roofing: {
    fontFamily: 'Arial',
    color: 'white',
    fontWeight: 'bold',
  },
  projectsButton: {
    root: {
      borderRadius: '30px!important',
    },
    flexShrink: 0,
  },
}))

export default function Intro() {
  const classes = useStyles()
  const handleCallUs = () => {
    window.location.href = 'tel:202-430-0948'
  }
  return (
    <div className={classes.root}>
      <div className={classes.licenseBackground}>
        <Typography variant="p" className={classes.license}>
          LICENSE #123456
        </Typography>
      </div>

      <Typography className={classes.solve} variant="h5">
        Let Us Solve Your
      </Typography>
      <Typography variant="h3" className={classes.roofing}>
        Roofing Problems
      </Typography>
      <Seprator remWidth="5" />
      <Typography className={classes.textStyle} variant="h6">
        The best customer service in the business, no joke! Check it out by yourself right now.
      </Typography>

      <Button
        size="large"
        classes={classes.projectsButton}
        variant="contained"
        color="primary"
        onClick={handleCallUs}
      >
        Call Us Now!
      </Button>
    </div>
  )
}