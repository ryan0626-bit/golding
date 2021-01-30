import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: ({ remWidth }) => ({
    margin: '10px 0 20px',
    height: '3px',
    width: `${remWidth}rem`,
    backgroundColor: theme.palette.primary.main,
  }),
}))

export default function Seprator({ remWidth }) {
  const classes = useStyles({ remWidth })

  return <div className={classes.root}></div>
}
