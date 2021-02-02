import Box from '@material-ui/core/Box'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ChatIcon from '@material-ui/icons/Chat'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import axios from 'axios'
import React, { useState } from 'react'
import MessageForm from './MessageForm'

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
    [theme.breakpoints.only('xs')]: {
      margin: '0 .5rem 3.5rem 0',
    },
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
  messageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '0 3.5rem 2rem 0',
    minHeight: '65vh',

    minWidth: '35vh',
    borderRadius: '1.25rem',
    backgroundColor: theme.palette.grey.main,
    [theme.breakpoints.down('xs')]: {
      minHeight: '80vh',
      width: '100%',
      margin: 0,
    },
  },
  bottomMessageBox: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: ' 0 0 1.1rem 1.1rem',
  },
  successIcon: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem',
  },
  successText: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem',
  },
  thankYouText: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem',
  },
}))
export default function BottomChat() {
  const classes = useStyles()
  const [showBox, setShowBox] = useState(false)
  const handleShowBox = () => void setShowBox(true)
  const handleHideBox = () => void setShowBox(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async payload => {
    await axios.post('http://127.0.0.1:5001/dev/text', payload)

    setShowSuccess(true)
    // handleHideBox();
  }

  return (
    <div className={classes.bottomNavigation}>
      {showBox && (
        <ClickAwayListener onClickAway={handleHideBox}>
          <Box className={classes.messageContainer} boxShadow={6}>
            {showSuccess ? (
              <div style={{ justifySelf: 'center' }}>
                <div className={classes.successIcon}>
                  <Typography variant="h4">
                    <CheckCircleIcon color="primary" />
                  </Typography>
                </div>
                <div className={classes.successText}>
                  <Typography variant="h5">Request Submitted</Typography>
                </div>
                <div className={classes.thankYouText}>
                  <Typography>
                    Thank You! Our team will reach out to you as soon as possible.
                  </Typography>
                </div>
              </div>
            ) : (
              <MessageForm handleSubmit={handleSubmit} />
            )}
          </Box>
        </ClickAwayListener>
      )}
      <Box className={classes.iconButton} onClick={handleShowBox} boxShadow={6}>
        <ChatIcon className={classes.chatIcon} classes={{ root: { padding: 0 } }} />
      </Box>
    </div>
  )
}
