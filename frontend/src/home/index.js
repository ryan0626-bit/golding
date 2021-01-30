import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { React } from 'react'
import HomeRoof from '../images/HomeRoof.jpg'
import Icons from './Icons'
import Intro from './Intro'
import Request from './Request'
import Skills from './Skills'
import NavBar from '../NavBar'

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
    height: '90vh',
    width: '100%',
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // backgroundColor: 'black',
    background: 'linear-gradient(to right, rgba(0, 0, 0, .5), rgba(255,0,0,0))',
  },
}))

export default function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="flex-start" spacing={5}>
        <div className={classes.background}>
          <div className={classes.backgroundOverlay} style={{ zIndex: 9 }} />
          <Grid container item xs={12} spacing={0}>
            <Grid item xs={12} sm={5} md={4} style={{ zIndex: 11 }}>
              <Intro />
            </Grid>
            <Grid item sm={0} md={2} />
            <Grid item xs={12} sm={7} md={6} style={{ zIndex: 11 }}>
              <Request />
            </Grid>
          </Grid>
        </div>
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
