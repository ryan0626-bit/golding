import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}))

export default function Icons() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>
        <Typography>100+</Typography>
      </div>
      <div>
        <Typography>PROJECTS COMPLETED</Typography>
      </div>
      <div>
        <Typography>4.9</Typography>
      </div>
      <div>
        <Typography>AVERAGE RATING</Typography>
      </div>
      <div>
        <Typography>15+</Typography>
      </div>
      <div>
        <Typography>HARD WORKING PEOPLE</Typography>
      </div>
      <div>
        <Typography>250+</Typography>
      </div>
      <div>
        <Typography>SATISFIED CLIENTS</Typography>
      </div>
    </div>
  )
}
