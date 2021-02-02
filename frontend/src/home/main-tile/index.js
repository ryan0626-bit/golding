import { makeStyles } from '@material-ui/core/styles'
import { React } from 'react'
import HomeRoof from '../../images/HomeRoof.jpg'
import Intro from './Intro'
import Request from './Request'

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${HomeRoof})`,
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '3rem',
    },
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexGrow: 1,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to right, rgba(0, 0, 0, .6), rgba(255,0,0,0))',
    zIndex: 1,
  },
  navBar: {
    flexBasis: '100%',
  },
  intro: {
    zIndex: 2,
    flexSrhink: 0,

    [theme.breakpoints.up('lg')]: {
      flexBasis: '40%',
      paddingLeft: '4rem',
    },
    [theme.breakpoints.only('md')]: {
      flexBasis: '40%',
      paddingLeft: '2rem',
    },

    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%',
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
  },
  request: {
    zIndex: 2,
    [theme.breakpoints.up('lg')]: {
      flexBasis: '30%',
      paddingRight: '5rem',
    },
    [theme.breakpoints.up('md')]: {
      flexBasis: '50%',
    },
    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%',
      justifySelf: 'center',
    },
  },
  spacing: {
    [theme.breakpoints.up('md')]: {
      flexGrow: 1,
    },
  },
}))

export default function Index() {
  const classes = useStyles()

  return (
    <div className={classes.background}>
      <div className={classes.backgroundOverlay} />
      <div className={classes.navBar} />
      <div className={classes.intro}>
        <Intro />
      </div>
      <div className={classes.spacing} />
      <div className={classes.request}>
        <Request />
      </div>
    </div>
  )
}
