import BottomNavigation from '@material-ui/core/BottomNavigation'
import { makeStyles } from '@material-ui/core/styles'
import ChatIcon from '@material-ui/icons/Chat'
import React from 'react'

const useStyles = makeStyles(theme => ({
  bottomNavigation: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 1100,
    backgroundColor: ' rgba(255,0,0,0)',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  chatIcon: {
    color: 'white',
    '&:hover': {
      color: theme.palette.primary.main,
    },
    fontSize: '2.5rem',
  },
  iconButton: {
    margin: '0 3.5rem 3.5rem 0',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: 'white',
      cursor: 'pointer',
    },
    height: '3.5rem',
    width: '3.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
export default function BottomChat() {
  const classes = useStyles()
  return (
    <BottomNavigation className={classes.bottomNavigation}>
      <div className={classes.iconButton}>
        <ChatIcon className={classes.chatIcon} />
      </div>
    </BottomNavigation>
  )
}
