import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { React } from 'react'
import HomeRoof from '../images/HomeRoof.jpg'
import Icons from './Icons'
import MainTile from './main-tile'
import Skills from './Skills'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  icons: {
    backgroundColor: theme.palette.primary.main,
  },
  background: {
    backgroundImage: `url(${HomeRoof})`,
    // backgroundSize: '100% 100vh',
    position: 'relative',
    minHeight: '92vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'center',
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexGrow: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    background: 'linear-gradient(to right, rgba(0, 0, 0, .6), rgba(255,0,0,0))',
    zIndex: 1,
  },
  intro: {
    zIndex: 2,
    flexSrhink: 0,
    paddingLeft: '4rem',
    [theme.breakpoints.up('lg')]: {
      flexBasis: '40%',
    },
    [theme.breakpoints.only('md')]: {
      flexBasis: '40%',
    },

    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%',
      justifySelf: 'center',
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
      paddingRight: '3rem',
      paddingLeft: '4rem',
      justifySelf: 'center',
    },
  },
  spacing: {
    [theme.breakpoints.up('md')]: {
      flexGrow: 1,
    },
  },
}))

export default function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="flex-start" spacing={0}>
        <Grid container item xs={12} spacing={0}>
          <MainTile />
        </Grid>
        <Grid item xs={12} className={classes.icons}>
          <Icons />
        </Grid>
        <Grid item xs={12}>
          <Skills />
        </Grid>
      </Grid>
    </div>
  )
}
