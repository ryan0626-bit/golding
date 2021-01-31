import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles(theme => ({
  icons: {
    marginBottom: '.5rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconButtons: {
    marginLeft: '1rem',
    marginRight: '1rem',
  },
  linkIcon: {
    fontSize: theme.typography.pxToRem(50),
  },
}))

export default function Icons() {
  const classes = useStyles()
  const handleWebsiteClick = siteName => {
    window.location.href = siteName
  }
  return (
    <div>
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
