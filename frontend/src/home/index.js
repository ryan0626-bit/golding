import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { React } from 'react'
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
}))

export default function Home({ appBarHeight }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="flex-start" spacing={0}>
        <Grid container item xs={12} spacing={0}>
          <MainTile appBarHeight={appBarHeight} />
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
