import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import ChatIcon from '@material-ui/icons/Chat'
import React, { useState } from 'react'

const useStyles = makeStyles(theme => ({
  bottomMessageBox: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: ' 0 0 1.1rem 1.1rem',
  },
  textField: {
    margin: '.5rem 1rem .5rem 1rem',
    padding: 0,
    backgroundColor: 'white',
  },
  topBar: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    padding: '1rem 0 1rem 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '1.1rem 1.1rem 0 0',
  },
  form: {
    margin: '1rem 1.5rem 0rem 2rem',
    display: 'flex',
    padding: '1rem 0 2rem 0',
    backgroundColor: 'white',
    flexDirection: 'column',
    borderRadius: '1rem',
  },
  terms: {
    margin: '0 1rem 0 1rem',
    display: 'flex',
    justifyContent: 'center',
  },
  termsText: {
    fontSize: theme.typography.pxToRem(8),
    textAlign: 'center',
  },
  send: {
    margin: '1rem 1.5rem 0rem 2rem',
  },
  messageInfo: {
    margin: '1rem 1.5rem 0rem 2rem',
    padding: '1rem',
    backgroundColor: theme.palette.primary.light,
    borderRadius: '1rem 1rem 1rem 0 ',
  },
}))
export default function MessageForm({ handleSubmit }) {
  const classes = useStyles()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)
  const [phoneNumberError, setPhoneNumberError] = useState(false)
  const [messageError, setMessageError] = useState(false)

  const validateInput = () => {
    let isValid = true
    if (name === '') {
      setNameError(true)
      isValid = false
    }
    if (phoneNumber === '' || phoneNumber.length <= '9') {
      setPhoneNumberError(true)
      isValid = false
    }
    if (message === '') {
      setMessageError(true)
      isValid = false
    }
    return isValid
  }
  const handleText = async () => {
    if (validateInput()) {
      const payload = { name, phoneNumber, message }
      await handleSubmit(payload)
      setName('')
      setPhoneNumber('')
      setMessage('')
    }
  }

  return (
    <>
      <div className={classes.topBar}>
        <ChatIcon />
        <Typography>We'll Text You</Typography>
      </div>
      <div>
        <div className={classes.messageInfo}>
          <Typography variant="p">
            Enter your information below and
            <br /> our team will text you shortly.
          </Typography>
        </div>
      </div>

      <Box className={classes.form} boxShadow={0.3}>
        <TextField
          variant="outlined"
          error={nameError}
          helperText={nameError ? 'Name Is Required' : ''}
          value={name}
          placeholder="Name..."
          label="Name"
          className={classes.textField}
          onChange={e => {
            setName(e.target.value)
            setNameError(false)
          }}
        />
        <TextField
          variant="outlined"
          error={phoneNumberError}
          helperText={phoneNumberError ? 'Phone Number Is Required' : ''}
          placeholder="Phone Number..."
          label="Mobile Phone"
          value={phoneNumber}
          className={classes.textField}
          onChange={e => {
            setPhoneNumber(e.target.value)
            setPhoneNumberError(false)
          }}
        />
        <TextField
          onChange={e => {
            setMessage(e.target.value)
            setMessageError(false)
          }}
          helperText={messageError ? 'A Message Is Required' : ''}
          placeholder="Message..."
          variant="outlined"
          value={message}
          label="Message"
          multiline
          rowsMax={5}
          className={classes.textField}
        />
      </Box>

      <div className={classes.bottomMessageBox}>
        <Typography className={classes.termsText}>
          By submitting you agree to receive <br />
          text messages at the number provided.
          <br />
          Consent is not a condition to receive
          <br /> goods/services. We may use automated <br />
          technology. Message/data rates apply.
        </Typography>

        <Button
          onClick={() => {
            handleText()
          }}
          className={classes.send}
          color="primary"
          variant="contained"
          size="large"
        >
          Send
        </Button>
      </div>
    </>
  )
}
