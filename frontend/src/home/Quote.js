import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import Person from '../images/IconPerson.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: '3rem',
    marginRight: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10rem',
    marginBottom: '5rem',
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
}))

export default function Quote() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.quoteText}>
        "Ryan is an excellent web designer and faultless technician. He’s a pleasure to work with,
        great value for money and will always go the extra mile when necessary."
      </div>
      <div className={classes.icon}>
        <Avatar src={Person} />
      </div>
      <div className={classes.personText}>Chris Fenwick</div>
    </div>
  )
}
