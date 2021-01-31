import BottomNavigation from '@material-ui/core/BottomNavigation'
import { makeStyles } from '@material-ui/core/styles'
import ChatIcon from '@material-ui/icons/Chat'
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

const useStyles = makeStyles(theme => ({
  bottomNavigation: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 1100,
    backgroundColor: ' rgba(255,0,0,0)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  chatIcon: {
    color: 'white',

    fontSize: '2.5rem',
  },
  iconButton: {
    margin: '0 3.5rem 3.5rem 0',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    height: '3.5rem',
    width: '3.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageBox: {
    margin: '0 3.5rem 2rem 0',
    padding: '1rem',
    backgroundColor: theme.palette.grey.main,
    minHeight: '65vh',
    minWidth: '35vh',
    [theme.breakpoints.down('xs')]: {
      minHeight: '80vh',
      width: '100%',
      margin: 0,
    },
    borderRadius: '1rem',
    border: `.25rem solid ${theme.palette.primary.main}`,
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    margin: '.5rem 2rem .5rem 2rem',
    padding: 0,
    backgroundColor: 'white',
  },
}))
export default function BottomChat() {
  const classes = useStyles()
  const [showBox, setShowBox] = useState(false)
  const handleShowBox = () => void setShowBox(true)
  const handleHideBox = () => void setShowBox(false)
  return (
    <div className={classes.bottomNavigation}>
      {showBox && (
        <ClickAwayListener onClickAway={handleHideBox}>
          <div className={classes.messageBox}>
            <div>Top Bar</div>
            <TextField variant="outlined" className={classes.textField} />
            <TextField variant="outlined" className={classes.textField} />
          </div>
        </ClickAwayListener>
      )}
      <div className={classes.iconButton} onClick={handleShowBox}>
        <ChatIcon className={classes.chatIcon} classes={{ root: { padding: 0 } }} />
      </div>
    </div>
  )
}
